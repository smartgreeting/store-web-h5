/*
 * @Author: lihuan
 * @Date: 2022-01-02 12:48:00
 * @LastEditors: lihuan
 * @LastEditTime: 2022-01-15 21:21:05
 * @Email: 17719495105@163.com
 */

import request from '@/utils/network/index';
import { IBannerList, IGoodsList, IPage } from './model';

enum Api {
  banner = '/product/banner',
  getProductList = '/product/getProductList'

}

export const getBanner = () => {
  return request.get<IBannerList>({
    url: Api.banner
  })
}

export const getProductList = (params: IPage) => {
  return request.get<IGoodsList>({
    url: Api.getProductList,
    params
  })
}
