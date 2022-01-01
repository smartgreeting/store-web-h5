/*
 * @Author: lihuan
 * @Date: 2021-11-17 22:22:59
 * @LastEditors: lihuan
 * @LastEditTime: 2021-12-31 20:37:29
 * @Email: 17719495105@163.com
 */

export interface ISms {
  smsCode: string;
}


export interface IRegisterParams {
  phone: string;
  password: string;
  smsCode: string;
}
