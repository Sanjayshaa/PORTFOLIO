import { useEffect, useRef } from 'react';
import { Renderer, Program, Mesh, Triangle } from 'ogl';
import './MoltenMetal.css';

const hexToRgb = hex => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return [1, 1, 1];
  return [parseInt(result[1], 16) / 255, parseInt(result[2], 16) / 255, parseInt(result[3], 16) / 255];
};

const vertex = `#version 300 es
in vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const fragment = `#version 300 es
precision highp float;
uniform vec2 iResolution;
uniform float iTime;
uniform float uSpeed;
uniform float uScale;
uniform float uDetail;
uniform float uGlow;
uniform float uCoreSize;
uniform float uSwirl;
uniform float uFold;
uniform float uBlackPoint;
uniform float uBrightness;
uniform float uOpacity;
uniform vec2 uMouse;
uniform float uMouseStrength;
uniform bool uEnableMouse;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uColor3;
out vec4 fragColor;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
}

void main() {
  float time = iTime * uSpeed;
  vec2 p = uScale * ((gl_FragCoord.xy - 0.5 * iResolution.xy) / iResolution.y);

  if (uEnableMouse) {
    p += (uMouse - 0.5) * uMouseStrength;
  }

  vec2 i = p;
  float c = 0.0;
  float d = length(p);
  float rot = d + time + p.x * uSwirl;

  float cosRot = cos(rot);
  float sinRot = sin(rot);
  mat2 warp = mat2(cosRot, sinRot, -sinRot, cosRot) * uFold;
  float glowCore = uGlow * uCoreSize;

  for (float n = 0.0; n < 8.0; n++) {
    if (n >= uDetail) break;
    p *= warp;
    float t = d - time / (n + 3.0);
    i -= p + vec2(cos(t - i.x - d) + sin(t + i.y), sin(t - i.y) + cos(t + i.x) + d);
    c += glowCore / max(length(vec2(sin(i.x + t), cos(i.y + t))), 0.001);
  }

  c /= 6.0;
  float intensity = max(c - uBlackPoint, 0.0) * uBrightness;

  vec3 col = mix(uColor1, uColor2, clamp(intensity, 0.0, 1.0));
  col = mix(col, uColor3, clamp(intensity - 1.0, 0.0, 1.0));

  float alpha = clamp(intensity, 0.0, 1.0) * uOpacity;
  fragColor = vec4(col * alpha, alpha);
}
`;

export default function MoltenMetal({
  color1 = '#5227FF',
  color2 = '#FF9FFC',
  color3 = '#FFFFFF',
  speed = 0.35,
  scale = 4,
  detail = 3,
  glow = 1.6,
  coreSize = 0.1,
  swirl = 1,
  fold = -0.2,
  blackPoint = 0.05,
  brightness = 1.3,
  mouseInteraction = true,
  mouseStrength = 0.3,
  opacity = 1.0,
  className = '',
  style
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctn = containerRef.current;
    if (!ctn) return;

    const renderer = new Renderer({ alpha: true, premultipliedAlpha: true, antialias: true });
    const gl = renderer.gl;
    gl.clearColor(0, 0, 0, 0);

    const geometry = new Triangle(gl);
    const program = new Program(gl, {
      vertex,
      fragment,
      uniforms: {
        iResolution: { value: [ctn.offsetWidth, ctn.offsetHeight] },
        iTime: { value: 0 },
        uSpeed: { value: speed },
        uScale: { value: scale },
        uDetail: { value: detail },
        uGlow: { value: glow },
        uCoreSize: { value: coreSize },
        uSwirl: { value: swirl },
        uFold: { value: fold },
        uBlackPoint: { value: blackPoint },
        uBrightness: { value: brightness },
        uOpacity: { value: opacity },
        uMouse: { value: [0.5, 0.5] },
        uMouseStrength: { value: mouseStrength },
        uEnableMouse: { value: mouseInteraction },
        uColor1: { value: hexToRgb(color1) },
        uColor2: { value: hexToRgb(color2) },
        uColor3: { value: hexToRgb(color3) }
      }
    });

    const mesh = new Mesh(gl, { geometry, program });
    ctn.appendChild(gl.canvas);

    const handleResize = () => {
      if (!ctn) return;
      renderer.setSize(ctn.offsetWidth, ctn.offsetHeight);
      program.uniforms.iResolution.value = [ctn.offsetWidth, ctn.offsetHeight];
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    let mouseX = 0.5;
    let mouseY = 0.5;
    const handleMouseMove = e => {
      if (!ctn) return;
      const rect = ctn.getBoundingClientRect();
      mouseX = (e.clientX - rect.left) / rect.width;
      mouseY = 1.0 - (e.clientY - rect.top) / rect.height;
    };

    if (mouseInteraction) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    let animateId;
    const update = t => {
      animateId = requestAnimationFrame(update);
      program.uniforms.iTime.value = t * 0.001;
      program.uniforms.uMouse.value = [mouseX, mouseY];
      renderer.render({ scene: mesh });
    };
    animateId = requestAnimationFrame(update);

    return () => {
      cancelAnimationFrame(animateId);
      window.removeEventListener('resize', handleResize);
      if (mouseInteraction) window.removeEventListener('mousemove', handleMouseMove);
      if (ctn && gl.canvas.parentNode === ctn) {
        ctn.removeChild(gl.canvas);
      }
    };
  }, [color1, color2, color3, speed, scale, detail, glow, coreSize, swirl, fold, blackPoint, brightness, opacity, mouseInteraction, mouseStrength]);

  return <div ref={containerRef} className={`molten-metal-container ${className}`} style={style} />;
}
