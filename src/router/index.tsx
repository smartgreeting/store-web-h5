/*
 * @Author: lihuan
 * @Date: 2021-11-27 19:46:40
 * @LastEditors: lihuan
 * @LastEditTime: 2022-01-22 16:42:28
 * @Email: 17719495105@163.com
 */

import type { RouteObject } from 'react-router';
import { lazy } from 'react';

import { AuthWrapper } from './helper';
const Login = lazy(() => import('@/views/login/Login'));
const Register = lazy(() => import('@/views/login/Register'));
const Home = lazy(() => import('@/views/home'));
const Detail = lazy(() => import('@/views/detail'));

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
      <AuthWrapper title="登录" isAuth={false}>
        <Login />
      </AuthWrapper>
    ),
  },
  {
    path: 'register',
    element: (
      <AuthWrapper title="注册" isAuth={false}>
        <Register />
      </AuthWrapper>
    ),
  },
  {
    path: 'detail/:id',
    element: (
      <AuthWrapper title="详情" isAuth={true}>
        <Detail />
      </AuthWrapper>
    ),
  },
];

export { routes };
