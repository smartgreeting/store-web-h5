/*
 * @Author: lihuan
 * @Date: 2021-11-06 20:01:11
 * @LastEditors: lihuan
 * @LastEditTime: 2021-12-25 18:46:03
 * @Email: 17719495105@163.com
 */
/// <reference types="react-scripts" />

import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    primary: string;
    success: string;
    warning: string;
    danger: string;
    white: string;
    weak: string;
    light: string;
    borderColor: string;
    fontSize: string;
    text: string;
  }
}
