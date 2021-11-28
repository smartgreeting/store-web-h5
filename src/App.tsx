/*
 * @Author: lihuan
 * @Date: 2021-10-04 11:23:39
 * @LastEditTime: 2021-11-27 21:34:42
 * @Email: 17719495105@163.com
 */

import { memo, FC } from 'react';

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import store from './store/index';
import Login from '@/views/login/Login';

import { renderRoutes, routes } from '@/router/index';
const App: FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Login></Login>
        {renderRoutes(routes)}
      </BrowserRouter>
    </Provider>
  );
};

export default memo(App);
