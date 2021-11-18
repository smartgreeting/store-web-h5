/*
 * @Author: lihuan
 * @Date: 2021-10-04 11:23:39
 * @LastEditTime: 2021-11-18 17:22:26
 * @Email: 17719495105@163.com
 */

import { memo, FC, useEffect } from 'react';

import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import { BrowserRouter } from 'react-router-dom';

import store from './store/index';
import Counter from './views/counter/Counter';
import Login from '@/views/login/Login';
import request from '@/utils/network/index';
const App: FC = () => {
  useEffect(() => {
    request
      .post<{
        code: number;
        data: {
          id: number;
          token: string;
        };
        msg: string;
      }>({
        url: '/api/user/login',
        data: {
          phone: '17719495105',
          password: '123456',
          code: '108000',
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e, 5555);
      });
  });
  return (
    <Provider store={store}>
      <BrowserRouter>
        {/* <Counter></Counter> */}
        <Login></Login>
      </BrowserRouter>
    </Provider>
  );
};

export default memo(App);
