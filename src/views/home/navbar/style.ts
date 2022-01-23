/*
 * @Author: lihuan
 * @Date: 2022-01-04 19:58:14
 * @LastEditors: lihuan
 * @LastEditTime: 2022-01-23 21:49:06
 * @Email: 17719495105@163.com
 */
import styled from "styled-components";

export const NavBarWrapper = styled.div`
    height:44px;
    display:flex;
    align-items:center;
    position: fixed;
    z-index:1000;
    .memu{
      font-size:32px;
    }
    .nav {
      display:flex;
      align-items:center;
      border-radius: 15px;
      height:30px;
      background-color:#fff;
      .logo {
      color: red;
      padding-left:15px;
      font-size:16px;
      font-weight:500;
      }
      .vertical{
        font-size:26px;
      }
      .search {
        font-size:22px;
        position:relative;
        left:-2px;
      }
      input{
        text-indent: 6px;

      }
    }

  `
