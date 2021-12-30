/*
 * @Author: lihuan
 * @Date: 2021-10-04 11:23:39
 * @LastEditTime: 2021-12-30 22:43:21
 * @Email: 17719495105@163.com
 */

import { memo, FC, Suspense } from 'react';

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { AuthProvider } from '@/router/helper';
import store from './store/index';
import Router from '@/router/Router';
import { Provider as ThemeProvider } from '@/utils/theme';

const App: FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Suspense fallback={<div>Loading...</div>}>
          <BrowserRouter>
            <AuthProvider>
              <Router />
            </AuthProvider>
          </BrowserRouter>
        </Suspense>
      </ThemeProvider>
    </Provider>
  );
};

export default memo(App);
