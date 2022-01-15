/*
 * @Author: lihuan
 * @Date: 2022-01-02 12:55:07
 * @LastEditors: lihuan
 * @LastEditTime: 2022-01-15 21:23:53
 * @Email: 17719495105@163.com
 */
import { put, all, call, takeLatest } from "redux-saga/effects";

import { IBannerList, IGoodsList } from "@/api/home/model";

import * as actionTypes from './actionTypes';
import { IBannerPending, IProductListPending } from "./types";
import { getBanner, getProductList } from "@/api/home";
import { fetchBannerFail, fetchBannerSuccess, fetchProductListFail, fetchProductListSuccess } from "./action";


function* fetchBanner(actions: IBannerPending): Generator<any, void, IBannerList> {
  try {
    const { list } = yield call(getBanner);
    yield put(fetchBannerSuccess({ pending: false, status: 'ok', list }));

  } catch (err: any) {
    yield put(fetchBannerFail({ pending: false, status: 'fail' }));
  }
}
function* fetchProductList(actions: IProductListPending): Generator<any, void, IGoodsList> {
  try {
    const { list, count } = yield call(getProductList, actions.payload);
    yield put(fetchProductListSuccess({ pending: false, status: 'ok', list, count }));

  } catch (err: any) {
    yield put(fetchProductListFail({ pending: false, status: 'fail' }));
  }
}

function* productSaga() {
  yield all([
    takeLatest(actionTypes.FETCH_BANNER_PENDING, fetchBanner),
    takeLatest(actionTypes.FETCH_PRODUCTLIST_PENDING, fetchProductList),
  ]);
}

export default productSaga;
