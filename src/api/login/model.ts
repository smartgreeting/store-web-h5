/*
 * @Author: lihuan
 * @Date: 2021-11-17 22:22:59
 * @LastEditors: lihuan
 * @LastEditTime: 2021-11-17 23:05:03
 * @Email: 17719495105@163.com
 */
export interface IData<T = any> {
  code: number;
  msg: string;
  data: T;
}
export interface ICaptuha {
  code: string;
}
