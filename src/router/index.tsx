/*
 * @Author: lihuan
 * @Date: 2021-11-27 19:46:40
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-11-29 09:44:38
 * @Email: 17719495105@163.com
 */

import { Redirect, RouteProps } from 'react-router';
import { lazy } from 'react';
import { renderRoutes } from './helper';

const Login = lazy(() => import('@/views/login/Login'));

function Home() {
  return <div>Home</div>;
}
function Test() {
  return <div>Test</div>;
}
interface IRouteConfig extends RouteProps {
  path: string;
  requiresAuth: boolean;
  meta?: {
    title?: string;
    icon?: string;
  };
}
const routes: IRouteConfig[] = [
  {
    path: '/',
    exact: true,
    strict: true,
    requiresAuth: false,
    render: () => <Redirect to={{ pathname: 'home' }} />,
  },
  {
    path: '/home',
    exact: true,
    strict: true,
    requiresAuth: true,
    component: Home,
    meta: { title: 'home', icon: 'home' },
  },
  {
    path: '/login',
    exact: true,
    strict: true,
    requiresAuth: false,
    component: Login,
    meta: { title: '登录', icon: 'login' },
  },
  {
    path: '/test',
    exact: true,
    requiresAuth: true,
    component: Test,
    meta: { title: 'test', icon: 'user' },
  },
];

export { renderRoutes, routes };
