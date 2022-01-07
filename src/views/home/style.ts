/*
 * @Author: lihuan
 * @Date: 2022-01-03 22:27:51
 * @LastEditors: lihuan
 * @LastEditTime: 2022-01-08 00:54:47
 * @Email: 17719495105@163.com
 */
import styled from "styled-components";

export const HomeWrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  /* background-color: ${({ theme }) => theme.danger}; */
  background-color: #f6f6f6;
.bg{
  position: absolute;
  top: 0;
  left: -25%;
  height: 150px;
  width: 150%;
  border-bottom-left-radius: 100%;
  border-bottom-right-radius: 100%;
  background-image:linear-gradient(0deg,#f1503b,#c82519 50%)
}
.banner {
  padding-top:12px;
  width:375px;
  height:100px;
}

`
