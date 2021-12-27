/*
 * @Author: lihuan
 * @Date: 2021-11-17 21:49:09
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-12-08 17:15:32
 * @Email: 17719495105@163.com
 */
import { delay, put, takeLatest, call, all } from 'redux-saga/effects';

import { fetchCaptuhaSuccess, fetchCaptuhaFail } from './action';
import { getCaptuha } from '@/api/login/index';

import * as actionTypes from './actionTypes';

import type { ICaptuhaPending } from './types';
import type { ICaptuha } from '@/api/login/model';

function* fetchCaptuha(actions: ICaptuhaPending) {
  try {
    const { code }: ICaptuha = yield call(getCaptuha, actions.payload.phone);
    yield put(fetchCaptuhaSuccess({ code }));
  } catch (err: any) {
    yield put(fetchCaptuhaFail({ msg: err.msg }));
  }
}

function* loginSaga() {
  yield all([takeLatest(actionTypes.FETCH_CAPTUHA_PENDING, fetchCaptuha)]);
}

export default loginSaga;
