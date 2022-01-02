/*
 * @Author: lihuan
 * @Date: 2021-11-17 22:22:59
 * @LastEditors: lihuan
 * @LastEditTime: 2022-01-01 19:30:12
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
export interface ILoginParams {
  phone: string;
  password: string;
}

export interface ILogin {
  id: number;
  token: string;
}
