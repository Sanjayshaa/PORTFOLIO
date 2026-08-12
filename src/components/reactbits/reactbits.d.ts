declare module './Strands' {
  import { ComponentType, CSSProperties } from 'react';
  export interface StrandsProps {
    colors?: string[];
    count?: number;
    speed?: number;
    amplitude?: number;
    waviness?: number;
    thickness?: number;
    glow?: number;
    taper?: number;
    spread?: number;
    hueShift?: number;
    intensity?: number;
    saturation?: number;
    opacity?: number;
    scale?: number;
    glass?: boolean;
    refraction?: number;
    dispersion?: number;
    glassSize?: number;
    className?: string;
    style?: CSSProperties;
  }
  const Strands: ComponentType<StrandsProps>;
  export default Strands;
}

declare module './MaskedHeading' {
  import { ComponentType, CSSProperties } from 'react';
  export interface MaskedHeadingProps {
    text?: string;
    tag?: string;
    mediaType?: 'image' | 'video';
    src?: string;
    poster?: string;
    fillScale?: number;
    parallax?: number;
    drift?: number;
    brightness?: number;
    saturation?: number;
    grayscale?: boolean;
    reveal?: 'rise' | 'wipe' | 'fade' | 'none';
    duration?: number;
    stagger?: number;
    trigger?: 'view' | 'mount' | 'hover';
    align?: 'left' | 'center' | 'right';
    weight?: number;
    tracking?: number;
    lineHeight?: number;
    textScale?: number;
    className?: string;
    style?: CSSProperties;
  }
  const MaskedHeading: ComponentType<MaskedHeadingProps>;
  export default MaskedHeading;
}

declare module './LogoLoop' {
  import { ComponentType, CSSProperties, ReactNode, Key } from 'react';
  export interface LogoItem {
    node?: ReactNode;
    src?: string;
    alt?: string;
    title?: string;
    href?: string;
    ariaLabel?: string;
  }
  export interface LogoLoopProps {
    logos: LogoItem[];
    speed?: number;
    direction?: 'left' | 'right' | 'up' | 'down';
    width?: number | string;
    logoHeight?: number;
    gap?: number;
    pauseOnHover?: boolean;
    hoverSpeed?: number;
    fadeOut?: boolean;
    fadeOutColor?: string;
    scaleOnHover?: boolean;
    renderItem?: (item: LogoItem, key: Key) => ReactNode;
    ariaLabel?: string;
    className?: string;
    style?: CSSProperties;
  }
  const LogoLoop: ComponentType<LogoLoopProps>;
  export default LogoLoop;
}

declare module './MoltenMetal' {
  import { ComponentType, CSSProperties } from 'react';
  export interface MoltenMetalProps {
    color1?: string;
    color2?: string;
    color3?: string;
    speed?: number;
    scale?: number;
    detail?: number;
    glow?: number;
    coreSize?: number;
    swirl?: number;
    fold?: number;
    blackPoint?: number;
    brightness?: number;
    mouseInteraction?: boolean;
    mouseStrength?: number;
    opacity?: number;
    className?: string;
    style?: CSSProperties;
  }
  const MoltenMetal: ComponentType<MoltenMetalProps>;
  export default MoltenMetal;
}

declare module './SpecularButton' {
  import { ComponentType, CSSProperties, ReactNode, MouseEventHandler } from 'react';
  export interface SpecularButtonProps {
    children?: ReactNode;
    size?: 'sm' | 'md' | 'lg';
    radius?: number;
    tint?: string;
    tintOpacity?: number;
    blur?: number;
    textColor?: string;
    lineColor?: string;
    baseColor?: string;
    intensity?: number;
    shineSize?: number;
    shineFade?: number;
    thickness?: number;
    speed?: number;
    followMouse?: boolean;
    proximity?: number;
    autoAnimate?: boolean;
    disabled?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    type?: 'button' | 'submit' | 'reset';
    className?: string;
    style?: CSSProperties;
  }
  const SpecularButton: ComponentType<SpecularButtonProps>;
  export default SpecularButton;
}
