/*
 * @Author: lihuan
 * @Date: 2021-10-04 16:03:24
 * @LastEditTime: 2021-11-18 21:56:09
 * @Email: 17719495105@163.com
 */

import { combineReducers } from 'redux';

import { loginReducer } from '@/views/login/store';

const rootReducer = combineReducers({
  login: loginReducer,
});

export type AppStore = ReturnType<typeof rootReducer>;

export default rootReducer;
