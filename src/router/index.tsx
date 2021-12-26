/*
 * @Author: lihuan
 * @Date: 2021-11-27 19:46:40
 * @LastEditors: lihuan
 * @LastEditTime: 2021-12-26 21:20:56
 * @Email: 17719495105@163.com
 */

import { RouteObject } from 'react-router';
import { lazy } from 'react';

import { AuthWrapper } from './helper';
const Login = lazy(() => import('@/views/login/Login'));

function Home() {
  return <div>Home</div>;
}
function Test() {
  return <div>Test</div>;
}
const routes: RouteObject[] = [
  {
    path: '/',
    element: (
      <AuthWrapper>
        <Home />
      </AuthWrapper>
    ),
  },
  {
    path: 'home',
    element: (
      <AuthWrapper>
        <Home />
      </AuthWrapper>
    ),
  },
  {
    path: 'login',
    element: <Login />,
  },
  {
    path: 'test',
    element: (
      <AuthWrapper>
        <Test />
      </AuthWrapper>
    ),
  },
];

export { routes };
