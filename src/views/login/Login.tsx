/*
 * @Author: lihuan
 * @Date: 2021-11-17 21:46:07
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-11-18 17:15:28
 * @Email: 17719495105@163.com
 */
import { FC, memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppStore } from '@/store/reducer';
import { getCaptuhaActions } from '@/views/login/store/action';

const Login: FC = () => {
  // 获取状态
  const { code, pending, msg } = useSelector((state: AppStore) => ({
    ...state.login,
  }));

  const dispatch = useDispatch();
  // 执行副作用
  useEffect(() => {
    dispatch(getCaptuhaActions({ phone: '17719495111' }));
    setTimeout(() => {
      dispatch(getCaptuhaActions({ phone: '1771949511' }));
    }, 1000);
    setTimeout(() => {
      dispatch(getCaptuhaActions({ phone: '17719495132' }));
    }, 2000);
  }, [dispatch]);

  console.log(code, pending, msg, 11111);
  return (
    <>
      <div>Login</div>
    </>
  );
};

export default memo(Login);
