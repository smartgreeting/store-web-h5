/*
 * @Author: lihuan
 * @Date: 2021-11-27 18:55:08
 * @LastEditors: lihuan
 * @LastEditTime: 2021-12-25 19:16:22
 * @Email: 17719495105@163.com
 */

import { rgba } from 'polished';
const PALETTE = {
  primary: '#1175ED',
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

export { PALETTE };
