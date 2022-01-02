/*
 * @Author: lihuan
 * @Date: 2022-01-02 22:11:15
 * @LastEditors: lihuan
 * @LastEditTime: 2022-01-02 23:19:31
 * @Email: 17719495105@163.com
 */
import styled from 'styled-components'

export const LHNavbarWrapper = styled.div`
  display: flex;
  align-items:center;
  font-size: var(--font-size);
  text-align: center;
  padding: 2px 4px;
  .left,.right {
    flex: 1;
  }
  .center {
    flex: 2;
  }
`
