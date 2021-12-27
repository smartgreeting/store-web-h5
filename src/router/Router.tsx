/*
 * @Author: lihuan
 * @Date: 2021-12-26 14:17:50
 * @LastEditors: lihuan
 * @LastEditTime: 2021-12-26 17:15:12
 * @Email: 17719495105@163.com
 */

import { useRoutes } from 'react-router-dom';

import { routes } from './index';

const Router = () => {
  const element = useRoutes(routes);

  return element;
};

export default Router;
