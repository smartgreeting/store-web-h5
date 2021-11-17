/*
 * @Author: lihuan
 * @Date: 2021-11-17 21:46:07
 * @LastEditors: lihuan
 * @LastEditTime: 2021-11-17 22:47:55
 * @Email: 17719495105@163.com
 */
import { FC, memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppStore } from '@/store/reducer';
import { getCaptuhaActions } from '@/views/login/store/actionCreaters';

const Login: FC = () => {
  const { code, msg, loading } = useSelector((state: AppStore) => ({
    ...state.login,
  }));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCaptuhaActions('1771949510'));
  }, [dispatch]);
  console.log(code, msg, loading, 11111);
  return (
    <>
      <div>Login</div>
    </>
  );
};

export default memo(Login);
