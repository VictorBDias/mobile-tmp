import { IColor, colors, darkColors } from '@design/colors';
import { StatusBar } from 'expo-status-bar';
import {
  type ReactNode,
  createContext,
  useContext,
  useState,
  useEffect,
} from 'react';
import { Theme } from 'tamagui';
import changeNavigationBarColor from 'react-native-navigation-bar-color';

type Theme = 'light' | 'dark';

export const ThemeContext = createContext<{
  theme: Theme;
  colors: IColor;
  changeTheme: (theme: Theme) => void;
} | null>(null);

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    const setSystemPreferences = () => {
      const isLightTheme = theme === 'light';
      try {
        changeNavigationBarColor(
          isLightTheme ? colors.background : darkColors.background,
          !isLightTheme
        );
      } catch (e) {
        console.error(e);
      }
    };

    setSystemPreferences();
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        colors: theme === 'light' ? colors : darkColors,
        changeTheme: theme => setTheme(theme),
      }}
    >
      <StatusBar
        style={theme === 'light' ? 'dark' : 'light'}
        backgroundColor="transparent"
        translucent
      />
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
