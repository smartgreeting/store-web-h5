/*
 * @Author: lihuan
 * @Date: 2021-12-30 21:06:50
 * @LastEditors: lihuan
 * @LastEditTime: 2022-01-01 22:03:35
 * @Email: 17719495105@163.com
 */
import styled from "styled-components";

export const TransitionWrapper = styled.div`
  .fade-enter{
    opacity: 0.1;
  }
  .fade-exit{
    opacity: .6;
  }
  .fade-enter-active{
    opacity: .3;
  }
  .fade-exit-active{
    opacity: 0.1;
  }
  .fade-enter-active,
  .fade-exit-active{
    transition: opacity 200ms;
  }

`
