/*
 * @Author: lihuan
 * @Date: 2021-11-17 22:22:42
 * @LastEditors: lihuan
 * @LastEditTime: 2021-12-25 21:51:02
 * @Email: 17719495105@163.com
 */
import request from '@/utils/network/index';
import { ISms } from './model';

enum Api {
  getSms = '/user/getSms',
}

export const getSms = (phone: string) => {
  return request.get<ISms>({
    url: Api.getSms,
    params: {
      phone,
    },
  });
};
