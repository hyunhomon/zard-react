import { css, type SerializedStyles } from "@emotion/react";
import type {
  Alignment,
  TextAlign,
  SizeProps,
  SpacingProps,
  ShapeProps,
  LayoutProps,
  PositionProps,
  DisplayProps,
} from "../schemas/styles";
import type { Font } from "../ui/themes/type";

export const parseSize = (props: SizeProps): SerializedStyles => css({
    width: wrap(props.w),
    height: wrap(props.h),
    minWidth: wrap(props.minw),
    minHeight: wrap(props.minh),
    maxWidth: wrap(props.maxw),
    maxHeight: wrap(props.maxh),
});

export const parseSpacing = (props: SpacingProps): SerializedStyles => css({
    padding: wrap(props.p),
    paddingHorizontal: wrap(props.ph),
    paddingVertical: wrap(props.pv),
    paddingTop: wrap(props.pt),
    paddingRight: wrap(props.pr),
    paddingBottom: wrap(props.pb),
    paddingLeft: wrap(props.pl),

    margin: wrap(props.m),
    marginHorizontal: wrap(props.mh),
    marginVertical: wrap(props.mv),
    marginTop: wrap(props.mt),
    marginRight: wrap(props.mr),
    marginBottom: wrap(props.mb),
    marginLeft: wrap(props.ml),
});

export const parseShape = (props: ShapeProps): SerializedStyles => css({
    borderRadius: wrap(props.r),
    borderTopRadius: wrap(props.rt),
    borderBottomRadius: wrap(props.rb),
    borderTopLeftRadius: wrap(props.rtl),
    borderTopRightRadius: wrap(props.rtr),
    borderBottomLeftRadius: wrap(props.rbl),
    borderBottomRightRadius: wrap(props.rbr),
});

export const parseLayout = (props: LayoutProps): SerializedStyles => css({
    display: "flex",
    flexDirection:
      props.dir === "r" ? (props.reverse ? "row-reverse" : "row")
      : (props.reverse ? "column-reverse" : "column"),
    flexWrap: props.wrap ? "wrap" : "nowrap",

    flex: props.flex,
    justifyContent: props.dir === "r"
      ? (props.gap === "auto" ? "space-between" : align(props.align).r)
      : align(props.align).c,
    alignItems: props.dir === "r"
      ? align(props.align).c
      : (props.gap === "auto" ? "space-between" : align(props.align).r),
    gap: wrap(props.gap),
});

export const parsePosition = (props: PositionProps): SerializedStyles => css({
    position:
      props.pos === "rel" ? "relative"
      : props.pos === "abs" ? "absolute"
      : props.pos === "fix" ? "fixed"
      : props.pos === "stk" ? "sticky"
      : undefined,
    top: wrap(props.t),
    right: wrap(props.r),
    bottom: wrap(props.b),
    left: wrap(props.l),
    zIndex: props.zIdx,
});

export const parseDisplay = (props: DisplayProps): SerializedStyles => css({
    backgroundColor: props.bgColor,
    opacity: props.opacity,
    boxShadow: props.shadow,
    filter: props.filter,

    borderColor: props.olColor,
    borderWidth: wrap(props.olWidth = 1),
    borderStyle: props.olColor ? (props.olStyle ?? "solid") : undefined,

    visibility:
      props.show === "invisible"
        ? "hidden"
        : props.show === "gone"
        ? "collapse"
        : "visible",

    overflow: props.overflow,
    cursor: props.cursor,
});

export const parseFont = (font: Font, color: string, align?: TextAlign): SerializedStyles => css({
    fontFamily: font.fontFamily,
    fontSize: wrap(font.fontSize),
    fontWeight: font.fontWeight,
    lineHeight: wrap(font.lineHeight),
    letterSpacing: wrap(font.letterSpacing),
    textAlign: align,
    color,
});

const wrap = (v: any): string | undefined => typeof v === "number" ? `${v}px` : v;
const align = (v?: Alignment): { r?: string; c?: string } => v ? alignMap[v] : {};

const alignMap: Record<Alignment, { r?: string; c?: string }> = {
  tl: { r: "flex-start", c: "flex-start" },
  tc: { r: "center",     c: "flex-start" },
  tr: { r: "flex-end",   c: "flex-start" },

  cl: { r: "flex-start", c: "center" },
  c:  { r: "center",     c: "center" },
  cr: { r: "flex-end",   c: "center" },

  bl: { r: "flex-start", c: "flex-end" },
  bc: { r: "center",     c: "flex-end" },
  br: { r: "flex-end",   c: "flex-end" },
};
