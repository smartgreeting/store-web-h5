/*
 * @Author: lihuan
 * @Date: 2022-01-01 23:56:29
 * @LastEditors: lihuan
 * @LastEditTime: 2022-01-23 21:51:21
 * @Email: 17719495105@163.com
 */
import styled from 'styled-components'

export const SwiperWrapper = styled.div`
    padding-top:44px;
    width: 94%;
    transform:translateX(3%);
  .container {
    color: ${({ theme }) => theme.primary};
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
    img {
      width: 100%;
      height:160px;
    }
  }


`
