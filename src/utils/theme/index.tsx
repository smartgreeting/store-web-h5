/*
 * @Author: lihuan
 * @Date: 2021-11-27 19:36:21
 * @LastEditors: lihuan
 * @LastEditTime: 2022-01-02 21:57:36
 * @Email: 17719495105@163.com
 */

import { createContext, useState, ReactElement, useContext } from 'react';
import { ThemeProvider } from 'styled-components';

import { THEME, CUSTOMTHEME } from './palette';
import { ThemWrapper } from './themWrapper';

const ThemeContext = createContext({ theme: THEME, toggleTheme: (value: typeof THEME) => {} });
export const useTheme = () => {
  return useContext(ThemeContext);
};
/**
 *  ThemeProvider
 *  ThemWrapper 为了让 antd-mobile 和 styled-components 在主题保持一致
 */
const Provider = ({ children }: { children: ReactElement }) => {
  const [theme, setTheme] = useState(THEME);
  const toggleTheme = (value: typeof THEME) => {
    setTheme(value);
  };
  const ContextValue = { theme, toggleTheme };
  return (
    <ThemeContext.Provider value={ContextValue}>
      <ThemeProvider theme={ContextValue.theme}>
        <ThemWrapper>{children}</ThemWrapper>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export { THEME, CUSTOMTHEME, ThemeContext, Provider };
