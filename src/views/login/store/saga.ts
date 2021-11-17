/*
 * @Author: lihuan
 * @Date: 2021-11-17 21:49:09
 * @LastEditors: lihuan
 * @LastEditTime: 2021-11-17 23:07:40
 * @Email: 17719495105@163.com
 */
import { delay, put, takeEvery, call } from 'redux-saga/effects';
import { getCaptuha } from '@/api/login/index';
import { ICaptuha, IData } from '@/api/login/model';
import { putCaptuhaSucess, putCaptuhaFail } from './actionCreaters';
import * as actionTypes from './constants';

export interface ICaptuhaSucess {
  type: typeof actionTypes.FETCH_CAPTUHA_SUCESS;
  code: string;
}
export interface ICaptuhaFail {
  type: typeof actionTypes.FETCH_CAPTUHA_FAIL;
  msg: string;
}
export interface ICaptuhaPendig {
  type: typeof actionTypes.FETCH_CAPTUHA_PENDING;
  phone: string;
}

export type LoginActions = ICaptuhaSucess | ICaptuhaFail | ICaptuhaPendig;

function* fetchCaptuha(actions: ICaptuhaPendig) {
  const data: IData = yield call(getCaptuha, actions.phone);
  try {
    yield put(putCaptuhaSucess(data.data.code));
  } catch (error) {
    yield put(putCaptuhaFail(data.msg));
  }
}

function* watchCaptuha() {
  yield takeEvery(actionTypes.FETCH_CAPTUHA_PENDING, fetchCaptuha);
}

const saga = [watchCaptuha()];
export default saga;
