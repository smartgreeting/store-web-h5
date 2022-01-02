/*
 * @Author: lihuan
 * @Date: 2022-01-02 12:48:00
 * @LastEditors: lihuan
 * @LastEditTime: 2022-01-02 14:02:05
 * @Email: 17719495105@163.com
 */

import request from '@/utils/network/index';
import { IBannerList } from './model';

enum Api {
  banner = '/product/banner',

}

export const getBanner = () => {
  return request.get<IBannerList>({
    url: Api.banner
  })
}
