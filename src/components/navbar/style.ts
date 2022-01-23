/*
 * @Author: lihuan
 * @Date: 2022-01-02 22:11:15
 * @LastEditors: lihuan
 * @LastEditTime: 2022-01-23 21:45:20
 * @Email: 17719495105@163.com
 */
import styled from 'styled-components'

export const LHNavbarWrapper = styled.div`
  display: flex;
  align-items:center;
  font-size: var(--font-size);
  text-align: center;
  height:44px;
  width: 375px;
  background-color:var(--background-color);
  z-index:2;
  .left,.right {
    flex: 1;
  }
  .center {
    flex: 5;
  }
`
