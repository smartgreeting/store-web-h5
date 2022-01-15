/*
 * @Author: lihuan
 * @Date: 2022-01-02 12:55:19
 * @LastEditors: lihuan
 * @LastEditTime: 2022-01-15 21:00:01
 * @Email: 17719495105@163.com
 */
import { produce, Draft } from 'immer';

import * as actionTypes from './actionTypes';
import { ProductActions, ProductState } from './types';


const initialState: ProductState = {
  banner: {
    list: [],
    status: '',
    pending: true,
  },
  productList: {
    list: [],
    count: 0,
    status: '',
    pending: true,
  }
}
const productReducer = produce((draft: Draft<ProductState>, action: ProductActions) => {
  switch (action.type) {
    case actionTypes.FETCH_BANNER_PENDING:
      draft.banner = initialState.banner
      return
    case actionTypes.FETCH_BANNER_SUCCESS:
      draft.banner = action.payload
      return
    case actionTypes.FETCH_BANNER_FAIL:
      draft.banner = { ...initialState.banner, ...action.payload }
      return
    case actionTypes.FETCH_PRODUCTLIST_PENDING:
      draft.productList = initialState.productList
      return
    case actionTypes.FETCH_PRODUCTLIST_SUCCESS:
      draft.productList = action.payload
      return
    case actionTypes.FETCH_PRODUCTLIST_FAIL:
      draft.productList = { ...initialState.productList, ...action.payload }
      return
    default:
      return draft;
  }

}, initialState)


export default productReducer
