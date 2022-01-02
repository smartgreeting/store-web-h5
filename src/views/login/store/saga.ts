/*
 * @Author: lihuan
 * @Date: 2021-11-17 21:49:09
 * @LastEditors: lihuan
 * @LastEditTime: 2022-01-01 19:38:04
 * @Email: 17719495105@163.com
 */
import { put, takeLatest, call, all } from 'redux-saga/effects';
import { Toast } from 'antd-mobile';

import { fetchSmsSuccess, fetchSmsFail, fetchRegisterSuccess, fetchRegisterFail, fetchLoginFail, fetchLoginSuccess } from './action';
import { getSms, login, register } from '@/api/login/index';

import * as actionTypes from './actionTypes';

import type { ILoginPending, IRegisterPending, ISmsPending } from './types';
import type { ILogin, ISms } from '@/api/login/model';

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
function* fetchLogin(actions: ILoginPending): Generator<any, void, ILogin> {
  try {
    const { id, token } = yield call(login, actions.payload);
    yield put(fetchLoginSuccess({ pending: false, status: 'ok', id, token }));

  } catch (err: any) {
    yield put(fetchLoginFail({ pending: false, status: 'fail' }));
  }
}

function* loginSaga() {
  yield all([
    takeLatest(actionTypes.FETCH_SMS_PENDING, fetchSms),
    takeLatest(actionTypes.FETCH_REGISTER_PENDING, fetchRegister),
    takeLatest(actionTypes.FETCH_LOGIN_PENDING, fetchLogin),
  ]);
}

export default loginSaga;
