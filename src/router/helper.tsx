/*
 * @Author: lihuan
 * @Date: 2021-11-28 18:30:07
 * @LastEditors: lihuan
 * @LastEditTime: 2022-01-03 20:30:43
 * @Email: 17719495105@163.com
 */

import React, { createContext, FC, useContext, useState } from 'react';

import { Navigate, useLocation } from 'react-router-dom';

import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { useTitle } from '@/hooks/useTitle';

import { TransitionWrapper } from './style';
import react from 'react';
// Context
export const AuthContext = createContext({ isLogin: false, toggleIsLogin: (isLogin: boolean) => {} });

export const useAuth = () => {
  return useContext(AuthContext);
};
// Provider
export const AuthProvider: FC = ({ children }) => {
  const [isLogin, setIsLogin] = useState(localStorage.getItem('token') ? true : false);
  const toggleIsLogin = setIsLogin;
  const contextValue = { isLogin, toggleIsLogin };
  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

export const AuthWrapper: FC<{ title: string; isAuth: boolean }> = ({ children, title, isAuth }) => {
  const location = useLocation();
  const { isLogin } = useAuth();

  useTitle(`SmartGreeting - ${title}`);

  return !isAuth ? (
    <Transition title={title}>{children}</Transition>
  ) : (isAuth && isLogin) === true ? (
    <Transition title={title}>{children}</Transition>
  ) : (
    <Transition title={title}>
      <Navigate to="/login" state={{ from: location }} replace />
    </Transition>
  );
};

function Transition({ children, title }: { children: react.ReactNode; title: string }) {
  return (
    <TransitionWrapper>
      <SwitchTransition>
        <CSSTransition
          key={1}
          // TODO: re-render more once
          // components in CSSTransition will be render more than once if we use context api #717
          // key={title}
          addEndListener={(node, done) => node.addEventListener('transitionend', done, false)}
          classNames="fade">
          {children}
        </CSSTransition>
      </SwitchTransition>
    </TransitionWrapper>
  );
}
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
