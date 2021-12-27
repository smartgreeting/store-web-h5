/*
 * @Author: lihuan
 * @Date: 2021-11-27 19:36:21
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-12-27 16:27:21
 * @Email: 17719495105@163.com
 */

import { createContext, useState, ReactElement, useMemo } from 'react';
import { ThemeProvider } from 'styled-components';

import { THEME, CUSTOMTHEME } from './palette';
import { ThemWrapper } from './themWrapper';

const ThemeContext = createContext({ theme: THEME, toggleTheme: (value: typeof THEME) => {} });
const useTheme = () => {
  const [theme, setTheme] = useState(THEME);
  const toggleTheme = (value: typeof THEME) => {
    setTheme(value);
  };
  return {
    toggleTheme,
    theme,
  };
};
/**
 *  ThemeProvider
 *  ThemWrapper 为了让 antd-mobile 和 styled-components 在主题保持一致
 */
const Provider = ({ children }: { children: ReactElement }) => {
  const value = useTheme();
  const ContextValue = useMemo(() => value, [value]);
  return (
    <ThemeContext.Provider value={ContextValue}>
      <ThemeProvider theme={ContextValue.theme}>
        <ThemWrapper>{children}</ThemWrapper>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export { THEME, CUSTOMTHEME, ThemeContext, Provider };
