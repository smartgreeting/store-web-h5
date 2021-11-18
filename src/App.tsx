/*
 * @Author: lihuan
 * @Date: 2021-10-04 11:23:39
 * @LastEditTime: 2021-11-18 21:54:38
 * @Email: 17719495105@163.com
 */

import { memo, FC } from 'react';

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import store from './store/index';
import Login from '@/views/login/Login';
const App: FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Login></Login>
      </BrowserRouter>
    </Provider>
  );
};

export default memo(App);
