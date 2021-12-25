/*
 * @Author: lihuan
 * @Date: 2021-10-04 11:23:39
 * @LastEditTime: 2021-12-05 13:44:05
 * @Email: 17719495105@163.com
 */

import { memo, FC } from 'react';

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import store from './store/index';

import { renderRoutes, routes } from '@/router/index';
const App: FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
    </Provider>
  );
};

export default memo(App);
