/*
 * @Author: lihuan
 * @Date: 2021-11-27 19:46:40
 * @LastEditors: lihuan
 * @LastEditTime: 2021-11-28 21:14:06
 * @Email: 17719495105@163.com
 */

import type { RouteProps } from 'react-router';
import { renderRoutes } from './helper';

function Login() {
  return <div>Login</div>;
}
function Test() {
  return <div>Test</div>;
}
interface IRouteConfig extends RouteProps {
  path: string;
  requiresAuth: boolean;
  meta: {
    title?: string;
    icon?: string;
  };
}
const routes: IRouteConfig[] = [
  {
    path: '/login',
    exact: true,
    strict: true,
    requiresAuth: false,
    component: Login,
    meta: { title: '登录呢', icon: 'login' },
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
