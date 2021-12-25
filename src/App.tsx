/*
 * @Author: lihuan
 * @Date: 2021-10-04 11:23:39
 * @LastEditTime: 2021-12-25 19:42:24
 * @Email: 17719495105@163.com
 */

import { memo, FC, useState, useEffect } from 'react';

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import store from './store/index';

import { renderRoutes, routes } from '@/router/index';

import { ThemWrapper, THEME } from '@/utils/theme';

const App: FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={THEME}>
        <ThemWrapper>
          <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
        </ThemWrapper>
      </ThemeProvider>
    </Provider>
  );
};

export default memo(App);
