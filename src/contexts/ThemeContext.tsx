import { ReactNode, createContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../themes/default";
import { darkTheme } from "../themes/dark";

type ThemeProps = {
  children: ReactNode;
};
interface ThemeContextType {
  theme: string; //trouxe o tema themes
  toggleTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextType);

export function ThemeContextProvider({ children }: ThemeProps) {
  const [theme, setTheme] = useState("default");

  function toggleTheme() {
    console.log(theme);
    theme === "dark" ? setTheme("default") : setTheme("dark");
  }

  return (
    <ThemeProvider theme={theme == "default" ? defaultTheme : darkTheme}>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}
