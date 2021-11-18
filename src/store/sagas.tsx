/*
 * @Author: lihuan
 * @Date: 2021-10-04 16:19:09
 * @LastEditTime: 2021-11-18 13:52:55
 * @Email: 17719495105@163.com
 */
import { all, fork } from 'redux-saga/effects';

import { counterSaga } from '@/views/counter/store';
import { loginSaga } from '@/views/login/store';
export default function* rootSaga() {
  yield all([...counterSaga, fork(loginSaga)]);
}
