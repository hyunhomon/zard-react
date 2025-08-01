import React, { createContext, useContext, useEffect, useState } from "react";
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import { lightTheme, darkTheme } from "../ui/themes";

type ThemeMode = "light" | "dark" | "system";

interface ThemeContextProps {
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
}

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeContext = createContext<ThemeContextProps>({
  mode: "system",
  setMode: () => {},
});


export const useThemeMode = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [mode, setMode] = useState<ThemeMode>(
    () => (localStorage.getItem("theme-mode") as ThemeMode) || "system"
  );
  const [theme, setTheme] = useState(lightTheme);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  
    const applyTheme = () => {
      if (mode === "system") {
        setTheme(mediaQuery.matches ? darkTheme : lightTheme);
      } else if (mode === "dark") {
        setTheme(darkTheme);
      } else {
        setTheme(lightTheme);
      }
    };
  
    applyTheme();
  
    mediaQuery.addEventListener("change", applyTheme);
    return () => mediaQuery.removeEventListener("change", applyTheme);
  }, [mode]);

  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
    </ThemeContext.Provider>
  );
};
