/*
 * @Author: lihuan
 * @Date: 2021-11-27 18:55:08
 * @LastEditors: lihuan
 * @LastEditTime: 2021-11-27 19:36:58
 * @Email: 17719495105@163.com
 */

import { rgb, rgba } from 'polished';
const PALETTE = {
  primary: '#1175ED',
  red: rgb(241, 60, 60),
  textgray: '#8590a6',
  gray: '#f6f6f6',
  lightgray: rgb(246, 246, 246),
  get white() {
    const base = '#FFFFFF';
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
