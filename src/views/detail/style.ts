/*
 * @Author: lihuan
 * @Date: 2022-01-22 21:21:15
 * @LastEditors: lihuan
 * @LastEditTime: 2022-01-23 21:37:11
 * @Email: 17719495105@163.com
 */

import styled from 'styled-components'


export const NavBarWrapper = styled.div`
  position:fixed;
  height:40px;
  display:flex;
  align-items:center;
  color: #777;
  .title {
    display:flex;
    flex-direction:row;
    justify-content:space-evenly;
    .active{
      color:#000;
      position: relative;
    }
    .active::after {
      content:'';
      position:absolute;
      width:100%;
      height:2px;
      border-radius:2px;
      left:0;
      top:19px;
      background-color:red;
    }
  }
`
