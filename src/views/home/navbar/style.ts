/*
 * @Author: lihuan
 * @Date: 2022-01-04 19:58:14
 * @LastEditors: lihuan
 * @LastEditTime: 2022-01-04 20:53:13
 * @Email: 17719495105@163.com
 */
import styled from "styled-components";

export const NavBarWrapper = styled.div`
    background-color:#d93331;
    height:44px;
    display:flex;
    align-items:center;
    .search {
      display:flex;
      align-items:center;
      border-radius: 15px;
      height:30px;
      background-color:#fff;
    }
    .logo {
      color: red;
      padding-left:15px;
      font-size:16px;
      font-weight:500;
    }
    .vertical{
      padding:6px;
      color:#ccc;
    }
    .icon {
      font-size:16px;
    }
    input{
      text-indent: 10px;

    }
  `
