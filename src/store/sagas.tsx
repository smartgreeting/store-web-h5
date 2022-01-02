/*
 * @Author: lihuan
 * @Date: 2021-10-04 16:19:09
 * @LastEditTime: 2022-01-02 13:26:12
 * @Email: 17719495105@163.com
 */
import { all, fork } from 'redux-saga/effects';

import { loginSaga } from '@/views/login/store';
import { productSaga } from '@/views/home/store';

export default function* rootSaga() {
  yield all([fork(loginSaga), fork(productSaga)]);
}
