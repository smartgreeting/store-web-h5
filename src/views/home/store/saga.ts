/*
 * @Author: lihuan
 * @Date: 2022-01-02 12:55:07
 * @LastEditors: lihuan
 * @LastEditTime: 2022-01-02 14:02:37
 * @Email: 17719495105@163.com
 */
import { put, all, call, takeLatest } from "redux-saga/effects";

import { IBannerList } from "@/api/home/model";

import * as actionTypes from './actionTypes';
import { IBannerPending } from "./types";
import { getBanner } from "@/api/home";
import { fetchBannerFail, fetchBannerSuccess } from "./action";


function* fetchBanner(actions: IBannerPending): Generator<any, void, IBannerList> {
  try {
    const { list } = yield call(getBanner);
    yield put(fetchBannerSuccess({ pending: false, status: 'ok', list }));

  } catch (err: any) {
    yield put(fetchBannerFail({ pending: false, status: 'fail' }));
  }
}

function* productSaga() {
  yield all([
    takeLatest(actionTypes.FETCH_BANNER_PENDING, fetchBanner),
  ]);
}

export default productSaga;
