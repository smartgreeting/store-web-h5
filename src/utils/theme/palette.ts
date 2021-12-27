/*
 * @Author: lihuan
 * @Date: 2021-11-27 18:55:08
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-12-27 13:56:22
 * @Email: 17719495105@163.com
 */

import { rgba } from 'polished';
const PALETTE = {
  primary: '#ff3141',
  success: '#00b578',
  warning: '#ff8f1f',
  danger: '#ff3141',
  weak: '#999999',
  light: '#cccccc',
  borderColor: '#eeeeee',
  fontSize: '13px',
  text: '#333333',
  get white() {
    const base = '#ffffff';
    return {
      base,
      90: rgba(base, 0.9),
      80: rgba(base, 0.8),
      70: rgba(base, 0.7),
      60: rgba(base, 0.6),
      50: rgba(base, 0.5),
      40: rgba(base, 0.4),
      30: rgba(base, 0.3),
      20: rgba(base, 0.2),
      10: rgba(base, 0.1),
      6: rgba(base, 0.06),
    };
  },
  get black() {
    const base = '#121212';
    return {
      base,
      90: rgba(base, 0.9),
      80: rgba(base, 0.8),
      70: rgba(base, 0.7),
      60: rgba(base, 0.6),
      50: rgba(base, 0.5),
      40: rgba(base, 0.4),
      30: rgba(base, 0.3),
      20: rgba(base, 0.2),
      10: rgba(base, 0.1),
      6: rgba(base, 0.06),
    };
  },
};
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
  text: '#333333',
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
  text: PALETTE.text,
};
export { PALETTE, THEME, CUSTOMTHEME };
