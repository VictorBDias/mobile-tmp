import { IColor, colors, darkColors } from '@design/colors';
import { type ReactNode, createContext, useContext, useState } from 'react';
import { Theme } from 'tamagui';

type Theme = 'light' | 'dark';

export const ThemeContext = createContext<{
  theme: Theme;
  colors: IColor;
  changeTheme: (theme: Theme) => void;
} | null>(null);

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light');

  return (
    <ThemeContext.Provider
      value={{
        theme,
        colors: theme === 'light' ? colors : darkColors,
        changeTheme: theme => setTheme(theme),
      }}
    >
      <Theme name={theme}>{children}</Theme>
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
};
