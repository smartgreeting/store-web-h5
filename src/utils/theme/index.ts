/*
 * @Author: lihuan
 * @Date: 2021-11-27 19:36:21
 * @LastEditors: lihuan
 * @LastEditTime: 2021-11-27 19:41:37
 * @Email: 17719495105@163.com
 */

import { PALETTE } from './palette';

const colors = {
  primary: PALETTE.primary,
  danger: PALETTE.red,
  text: PALETTE.black.base,
  black: PALETTE.black,
  white: PALETTE.white,
};

const fontSize = {
  caption: '12px',
  body: '14px',
  headline: '16px',
  title: '18px',
};

const textColor = {
  base: colors.text,
  primary: colors.primary,
  muted: colors.black[40],
  hint: colors.black[20],
};
const boxShadow = {
  card: `0 2px 4px ${colors.black[10]}`,
};
const border = {
  divider: `1px solid ${colors.black[6]}`,
};

const THEME = {
  colors,
  fontSize,
  textColor,
  boxShadow,
  border,
};

export { THEME };
