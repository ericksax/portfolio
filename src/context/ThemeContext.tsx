
import { createContext, useState, ReactNode, useContext } from "react";

interface ThemeProps {
  theme: boolean,
  setTheme: (theme: boolean) => void
}

interface ChildProps {
  children?: ReactNode
}

export const ThemeContext = createContext<ThemeProps>({} as ThemeProps);

export function ThemeModeProviter({ children }: ChildProps): JSX.Element {
  const [theme, setTheme] = useState(false)

  return ( 
  <ThemeContext.Provider value={{theme, setTheme}}>
    {children}
  </ThemeContext.Provider>
  );
}

const useTheme = () => {
  const {theme, setTheme} = useContext(ThemeContext)
  return {
    setTheme, 
    theme
  }
}

export default useTheme