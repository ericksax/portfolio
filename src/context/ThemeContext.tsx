import { createContext, useState, ReactNode, useContext } from "react";
import { colors } from "../styles/colors";

interface ThemeProps {
  theme: boolean;
  setTheme: (theme: boolean) => void;
  ModeTheme: () => string;
}

interface ChildProps {
  children?: ReactNode;
}

export const ThemeContext = createContext<ThemeProps>({} as ThemeProps);

export function ThemeModeProvider({ children }: ChildProps): JSX.Element {
  const [theme, setTheme] = useState(false);

  function ModeTheme() {
    if (theme) {
      return colors.background.dark;
    } else {
      return colors.background.light;
    }
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme, ModeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

const useTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return {
    setTheme,
    theme,
  };
};

export default useTheme;
