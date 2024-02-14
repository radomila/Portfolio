import * as React from 'react';
import { useState, createContext, useContext } from 'react';

interface Props {
  children: React.ReactNode;
}

interface ThemeContextType {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

const ThemeToggleContext = createContext<ThemeContextType>({
  theme: 'light',
  setTheme: () => {},
});

export const ThemeToggleContextProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState('light');

  const themeToggleContextStore = { theme, setTheme };

  return (
    <ThemeToggleContext.Provider value={themeToggleContextStore}>
      {children}
    </ThemeToggleContext.Provider>
  );
};

export const useThemeToggleContext = () => useContext(ThemeToggleContext);
