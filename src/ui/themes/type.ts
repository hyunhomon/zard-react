export interface Theme {
    colors: Colors;
    fonts: Fonts;
}

export interface Colors {
    bgWeak: string;
    bgRegular: string;
    bgStrong: string;
    bgInverted: string;
    bgOccurred: string;

    divider: string;
    outline: string;

    ctWeak: string;
    ctRegular: string;
    ctStrong: string;
    ctInverted: string;
    ctElevated: string;

    primary: string;
    success: string;
    warning: string;
    danger: string;

    dimWeak: string;
    dimStrong: string;
}

export interface Fonts {
    xll: Font;
    xlm: Font;
    xls: Font;

    ll: Font;
    lm: Font;
    ls: Font;

    ml: Font;
    mm: Font;
    ms: Font;

    sl: Font;
    sm: Font;
    ss: Font;
}

export interface Font {
    fontFamily: string;
    fontSize: number;
    fontWeight: number;
    lineHeight: number;
    letterSpacing: number;
}
