/*
 * @Author: lihuan
 * @Date: 2021-11-17 21:49:09
 * @LastEditors: lihuan
 * @LastEditTime: 2021-12-25 16:13:32
 * @Email: 17719495105@163.com
 */
import { delay, put, takeLatest, call, all } from 'redux-saga/effects';

import { fetchSmsSuccess, fetchSmsFail } from './action';
import { getSms } from '@/api/login/index';

import * as actionTypes from './actionTypes';

import type { ISmsPending } from './types';
import type { ISms } from '@/api/login/model';

function* fetchSms(actions: ISmsPending): Generator<any, void, ISms> {
  try {
    const { smsCode } = yield call(getSms, actions.payload.phone);
    yield put(fetchSmsSuccess({ smsCode }));
  } catch (err: any) {
    yield put(fetchSmsFail({ msg: err.msg }));
  }
}

function* loginSaga() {
  yield all([takeLatest(actionTypes.FETCH_SMS_PENDING, fetchSms)]);
}

export default loginSaga;
