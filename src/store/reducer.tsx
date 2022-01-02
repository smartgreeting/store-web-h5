/*
 * @Author: lihuan
 * @Date: 2021-10-04 16:03:24
 * @LastEditTime: 2022-01-02 13:23:48
 * @Email: 17719495105@163.com
 */

import { combineReducers } from 'redux';

import { loginReducer } from '@/views/login/store';
import { productReducer } from '@/views/home/store';

const rootReducer = combineReducers({
  login: loginReducer,
  product: productReducer,
});

export type AppStore = ReturnType<typeof rootReducer>;

export default rootReducer;
