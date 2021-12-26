/*
 * @Author: lihuan
 * @Date: 2021-10-04 11:23:39
 * @LastEditTime: 2021-12-26 21:38:54
 * @Email: 17719495105@163.com
 */

import { memo, FC, useState, useEffect, Suspense } from 'react';

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { AuthProvider } from '@/router/helper';
import store from './store/index';
import Router from '@/router/Router';
import { ThemWrapper, THEME } from '@/utils/theme';

const App: FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={THEME}>
        <ThemWrapper>
          <Suspense fallback={<div>Loading...</div>}>
            <BrowserRouter>
              <AuthProvider>
                <Router />
              </AuthProvider>
            </BrowserRouter>
          </Suspense>
        </ThemWrapper>
      </ThemeProvider>
    </Provider>
  );
};

export default memo(App);
