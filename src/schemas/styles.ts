export type Alignment =
  | "tl" | "tc" | "tr"
  | "cl" | "c" | "cr"
  | "bl" | "bc" | "br";

export type TextAlign = "left" | "center" | "right";

export interface SizeProps {
    w?: number | string;
    h?: number | string;
    minw?: number | string;
    minh?: number | string;
    maxw?: number | string;
    maxh?: number | string;
}

export interface SpacingProps {
  p?: number;
  ph?: number;
  pv?: number;
  pt?: number;
  pr?: number;
  pb?: number;
  pl?: number;

  m?: number;
  mh?: number;
  mv?: number;
  mt?: number;
  mr?: number;
  mb?: number;
  ml?: number;
}

export interface ShapeProps {
    r?: number;
    rt?: number;
    rb?: number;
    rtl?: number;
    rtr?: number;
    rbl?: number;
    rbr?: number;
}

export interface LayoutProps {
    dir?: "r" | "c";
    reverse?: boolean;
    align?: Alignment;
    wrap?: boolean;
    flex?: number;
    gap?: number | "auto";
}

export interface PositionProps {
    pos?: "rel" | "abs" | "fix" | "stk";
    t?: number;
    r?: number;
    b?: number;
    l?: number;
    zIdx?: number;
}

export interface DisplayProps {
    bgColor?: string;
    opacity?: number;
    shadow?: string;
    filter?: string;

    olColor?: string;
    olWidth?: number;
    olStyle?: "solid" | "dashed" | "dotted";

    show?: "visible" | "invisible" | "gone";
    overflow?: "visible" | "hidden" | "scroll" | "auto";

    cursor?: "default" | "pointer" | "not-allowed";
}
