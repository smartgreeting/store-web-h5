/*
 * @Author: lihuan
 * @Date: 2022-01-08 21:13:23
 * @LastEditors: lihuan
 * @LastEditTime: 2022-01-10 22:53:03
 * @Email: 17719495105@163.com
 */


import styled from "styled-components";
import discount_price from '@/assets/images/discount_price.png'

export const ListWrapper = styled.div`
  display: flex;
  flex-wrap:wrap;
  justify-content:flex-start;
`

export const ItemWrapper = styled.div`
  padding-bottom:20px;
  display: flex;
  flex-direction: column;
  justify-content:space-around;
  margin-left:10px;
  .good-img{
    width:172px;
    height:172px;
    border-top-left-radius:8px;
    border-top-right-radius:8px;
  }
  .desc-wrapper {
      width:160px;
      margin:6px 8px;
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
      .tag{
      width:34px;
      height: 14px;
      margin-right: 8px;
      vertical-align:middle;
    }
    .desc{
      font-weight: 500;
    }
  }
  .min-price{
    position: relative;
    left:8px;
    width:84px;
    color:#ff2078;
    font-size:12px;
    background-color:rgba(255, 32, 120, 0.07);
    img {
      width:14px;
      height:14px;
      margin-right:3px;
    }
  }
  .price-wrapper{
    margin-top:6px; padding;
    color:#ff4142;

    .price{
      font-size:16px;
      position:relative;
      left:6px;
      top:3px;
    }
    em {
      font-size: 22px;
    }
    .discount{
      position:relative;
      font-size:14px;
      top:3px;
      left:12px;
      padding:3px;
    }
    .discount::after{
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 200%;
        height: 200%;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        border: 1px solid #ff4142;
        transform: scale(0.5);
        transform-origin: 0 0;
        border-radius: 4px;
      }
    .discount-price{
      display: inline-block;
      position: relative;
      width: 94px;
      height:28px;
      line-height:23px;
      text-align: center;
      left:10px;
      background-image:url(${discount_price});
      background-repeat: no-repeat;
      background-size:contain;

    }
  }

  .bottom{
    display: flex;
    justify-content: space-between;
    margin:4px 6px;
    .express{
      width:50px;
      height:18px;
      font-size:12px;
    }
    .comment{
        position: relative;
        top:4px;
        color:#aaa;
        font-size:14px;
    }
    .likely {
      width:55px;
      font-size:14px;
      line-height:20px;
      text-align: center;
      border-radius:10px;
      background-color:#ddd;

    }
  }
`
