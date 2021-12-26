/*
 * @Author: lihuan
 * @Date: 2021-11-28 18:30:07
 * @LastEditors: lihuan
 * @LastEditTime: 2021-12-26 21:39:14
 * @Email: 17719495105@163.com
 */

import React, { createContext, useContext, useState } from 'react';

import { Navigate } from 'react-router-dom';

export const AuthContext = createContext({ authed: false, setAuthed: () => {} }) as any;

export const useAuth = () => {
  const [authed, setAuthed] = useState(true);

  return {
    authed,
    setAuthed,
  };
};
export const AuthProvider = ({ children }: { children: React.ReactElement }) => {
  const auth = useAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export const AuthWrapper = ({ children }: { children: React.ReactElement }) => {
  const { authed } = useContext(AuthContext);
  return authed === true ? children : <Navigate to="/login" replace />;
};

// import { Suspense } from 'react';
// import { Redirect, Route, Switch } from 'react-router';

// const renderRoutes = (routes: any, extraProps = {}, switchProps = {}) => {
//   return routes ? (
//     <Suspense fallback={<div>页面加载中...</div>}>
//       <Switch {...switchProps}>
//         {routes.map((item: any, i: number) => (
//           <Route
//             key={item.name || i}
//             path={item.path}
//             exact={item.exact}
//             strict={item.strict}
//             render={(props) => routeRender(item, props, extraProps)}
//           />
//         ))}
//       </Switch>
//     </Suspense>
//   ) : null;
// };
// const requiresAuth = false; //是否已经登录

// const routeRender = (route: any, props: any, extraProps: any) => {
//   // 判断渲染route
//   if (!route.requiresAuth) {
//     // 是否需要登陆
//     return item(props, extraProps, route);
//   } else {
//     if (requiresAuth) {
//       //需要登陆时 是否登陆
//       return item(props, extraProps, route);
//     } else {
//       return <Redirect to={{ pathname: 'login' }} />;
//     }
//   }
// };

// function item(props: any, extraProps: any, route: any) {
//   return route.render ? (
//     route.render({ ...props, ...extraProps, route: route })
//   ) : (
//     <route.component {...props} {...extraProps} route={route} />
//   );
// }

// export { renderRoutes };
