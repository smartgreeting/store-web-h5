/*
 * @Author: lihuan
 * @Date: 2021-12-25 17:27:15
 * @LastEditors: lihuan
 * @LastEditTime: 2021-12-25 19:04:02
 * @Email: 17719495105@163.com
 */

import styled from 'styled-components'
const ThemWrapper = styled.div`
  --adm-color-primary: ${({ theme }) => theme.primary};
  --adm-color-success: ${({ theme }) => theme.success};
  --adm-color-warning: ${({ theme }) => theme.warning};
  --adm-color-danger: ${({ theme }) => theme.danger};
  --adm-color-white: ${({ theme }) => theme.white};
  --adm-color-weak: ${({ theme }) => theme.weak};
  --adm-color-light: ${({ theme }) => theme.light};
  --adm-border-color: ${({ theme }) => theme.borderColor};
  --adm-font-size-main: ${({ theme }) => theme.fontSize};
  --adm-color-text: ${({ theme }) => theme.text};

  --adm-font-family: -apple-system, blinkmacsystemfont, 'Helvetica Neue',
  helvetica, segoe ui, arial, roboto, 'PingFang SC', 'miui',
  'Hiragino Sans GB', 'Microsoft Yahei', sans-serif;
`;



export {
  ThemWrapper
}
