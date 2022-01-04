/*
 * @Author: lihuan
 * @Date: 2022-01-02 22:11:15
 * @LastEditors: lihuan
 * @LastEditTime: 2022-01-04 20:24:27
 * @Email: 17719495105@163.com
 */
import styled from 'styled-components'

export const LHNavbarWrapper = styled.div`
  display: flex;
  align-items:center;
  font-size: var(--font-size);
  text-align: center;
  padding: 2px 4px;
  position:absolute;
  width: 100%;
  z-index:2;
  .left,.right {
    flex: 1;
  }
  .center {
    flex: 5;
  }
`
