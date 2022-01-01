/*
 * @Author: lihuan
 * @Date: 2021-11-17 21:49:09
 * @LastEditors: lihuan
 * @LastEditTime: 2022-01-01 15:26:59
 * @Email: 17719495105@163.com
 */
import { put, takeLatest, call, all } from 'redux-saga/effects';
import { Toast } from 'antd-mobile';

import { fetchSmsSuccess, fetchSmsFail, fetchRegisterSuccess, fetchRegisterFail } from './action';
import { getSms, register } from '@/api/login/index';

import * as actionTypes from './actionTypes';

import type { IRegisterPending, ISmsPending } from './types';
import type { ISms } from '@/api/login/model';

function* fetchSms(actions: ISmsPending): Generator<any, void, ISms> {
  try {
    const { smsCode } = yield call(getSms, actions.payload.phone);
    yield put(fetchSmsSuccess({ smsCode, pending: false, status: 'ok' }));
    Toast.show({
      duration: 1000,
      content: '短信发送成功',
    });
  } catch (err: any) {
    yield put(fetchSmsFail({ pending: false, status: 'fail' }));
  }
}

function* fetchRegister(actions: IRegisterPending) {
  try {
    yield call(register, actions.payload);
    yield put(fetchRegisterSuccess({ pending: false, status: 'ok' }));
    Toast.show({
      duration: 1000,
      content: '注册成功',
    });
  } catch (err: any) {
    yield put(fetchRegisterFail({ pending: false, status: 'fail' }));
  }
}

function* loginSaga() {
  yield all([
    takeLatest(actionTypes.FETCH_SMS_PENDING, fetchSms),
    takeLatest(actionTypes.FETCH_REGISTER_PENDING, fetchRegister),
  ]);
}

export default loginSaga;
