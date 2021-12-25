/*
 * @Author: lihuan
 * @Date: 2021-11-27 19:36:21
 * @LastEditors: lihuan
 * @LastEditTime: 2021-12-25 19:41:47
 * @Email: 17719495105@163.com
 */

import { PALETTE } from './palette';
import { ThemWrapper } from "./themWrapper";

const THEME = {
  primary: '#1677ff',
  success: '#00b578',
  warning: '#ff8f1f',
  danger: '#ff3141',
  white: '#ffffff',
  weak: '#999999',
  light: '#cccccc',
  borderColor: '#eeeeee',
  fontSize: '13px',
  text: '#333333'
};
const CUSTOMTHEME = {
  primary: PALETTE.primary,
  success: PALETTE.success,
  warning: PALETTE.warning,
  danger: PALETTE.danger,
  white: PALETTE.white[90],
  weak: PALETTE.weak,
  light: PALETTE.light,
  borderColor: PALETTE.borderColor,
  fontSize: PALETTE.fontSize,
  text: PALETTE.text
};

export { THEME, ThemWrapper, CUSTOMTHEME };
