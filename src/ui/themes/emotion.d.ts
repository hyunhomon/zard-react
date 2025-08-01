import "@emotion/react";
import type { Theme as CustomTheme } from "./type";

declare module "@emotion/react" {
    export interface Theme extends CustomTheme {}
}
