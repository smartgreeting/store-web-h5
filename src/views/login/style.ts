/*
 * @Author: lihuan
 * @Date: 2021-11-18 22:02:49
 * @LastEditors: lihuan
 * @LastEditTime: 2021-12-29 20:16:34
 * @Email: 17719495105@163.com
 */

import styled from 'styled-components';

export const LoginWarpper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  .navbar{
    margin-top: 10px;
  }
`;

export const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 90vh;
  .login{
    margin-top:50px;
  }
`;


export const RegisterWrapper = styled.div`
display: flex;
flex-direction: column;
height: 100vh;
`
export const RegisterForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 90vh;
  .register{
    margin-top:50px;
  }
`;
