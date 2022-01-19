/*
 * @Author: lihuan
 * @Date: 2022-01-07 22:57:36
 * @LastEditors: lihuan
 * @LastEditTime: 2022-01-18 19:53:38
 * @Email: 17719495105@163.com
 */

import styled from "styled-components";

export const GridWrapper = styled.div`
  padding:10px 0;
  /* background-color:${({ theme }) => theme.white}; */

  .adm-page-indicator-dot-active{
    --active-dot-size:4px;
    --active-dot-color:${({ theme }) => theme.primary}
  }
  .adm-page-indicator {
    --dot-size: 4px;
    --dot-border-radius: 4px;
  }
  .content {
    display: flex;
    flex-wrap:wrap;
  }
`


export const GridItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items:center;
  width:75px;
  height: 74px;
  .image {
    width:40px;
    height:40px;
  }
  span {
    color: ${({ theme }) => theme.text};
  }
`
