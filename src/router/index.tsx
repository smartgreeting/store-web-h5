/*
 * @Author: lihuan
 * @Date: 2021-11-27 19:46:40
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-12-27 17:28:01
 * @Email: 17719495105@163.com
 */

import type { RouteObject } from 'react-router';
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
      <AuthWrapper title="首页" isAuth={true}>
        <Home />
      </AuthWrapper>
    ),
  },
  {
    path: 'home',
    element: (
      <AuthWrapper title="首页" isAuth={true}>
        <Home />
      </AuthWrapper>
    ),
  },
  {
    path: 'login',
    element: (
      <AuthWrapper title="登录页" isAuth={false}>
        <Login />
      </AuthWrapper>
    ),
  },
  {
    path: 'test',
    element: (
      <AuthWrapper title="测试页" isAuth={true}>
        <Test />
      </AuthWrapper>
    ),
  },
];

export { routes };
