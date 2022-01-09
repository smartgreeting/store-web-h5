/*
 * @Author: lihuan
 * @Date: 2022-01-08 21:13:23
 * @LastEditors: lihuan
 * @LastEditTime: 2022-01-08 21:59:42
 * @Email: 17719495105@163.com
 */


import styled from "styled-components";

export const ListWrapper = styled.div`
  display: flex;
  flex-wrap:wrap;
  justify-content:flex-start;
`

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:space-around;
  margin-left:10px;
  img{
    width:172px;
    height:172px;
    border-top-left-radius:8px;
    border-top-right-radius:8px;
  }
  .desc{
    margin:10px 7px;
    width:160px;
    line-height: 22px;
    font-size: 14px;
    font-family: -apple-system, Helvetica, sans-serif;
    overflow: hidden;
    color: #434343;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    word-break: break-all;
    -webkit-box-orient: vertical;
  }


`
