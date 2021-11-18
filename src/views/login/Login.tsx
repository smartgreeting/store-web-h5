/*
 * @Author: lihuan
 * @Date: 2021-11-17 21:46:07
 * @LastEditors: lihuan
 * @LastEditTime: 2021-11-18 23:43:52
 * @Email: 17719495105@163.com
 */
import { FC, memo, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button, Form, Input, NavBar, Space } from 'antd-mobile';
import type { AppStore } from '@/store/reducer';
import { getCaptuhaActions } from '@/views/login/store/action';
import { LoginWarpper, LoginForm } from './style';
import { FormInstance } from 'antd-mobile/es/components/form';

const Login: FC = () => {
  // 获取dom
  const formRef = useRef<FormInstance>(null);
  // 获取状态
  const { code, pending, msg } = useSelector((state: AppStore) => ({
    ...state.login,
  }));

  const dispatch = useDispatch();
  // 执行副作用
  useEffect(() => {
    // dispatch(getCaptuhaActions({ phone: '1771949511' }));
  }, [dispatch]);
  // 返回
  const back = () => console.log('go back');
  // 提交
  const onFinish = (values: any) => {
    console.log(values);
    dispatch(getCaptuhaActions({ phone: values.phone }));
    formRef.current?.resetFields();
  };
  console.log(code, pending, msg, 11111);
  return (
    <LoginWarpper>
      <NavBar onBack={back}>登 录</NavBar>
      <LoginForm>
        <Form
          ref={formRef}
          onFinish={onFinish}
          footer={
            <div style={{ marginTop: 50 }}>
              <Button block type="submit" color="primary">
                提交
              </Button>
            </div>
          }>
          <Form.Item
            name="phone"
            label="手机号码"
            rules={[
              { required: true, message: '手机号码不能为空' },
              { pattern: /^1[3-9]\d{9}$/, message: '手机号码不正确 ' },
            ]}>
            <Input placeholder="请输入手机号码" />
          </Form.Item>
          <Form.Item
            name="smsCode"
            label="短信验证码"
            rules={[{ required: true, message: '短信验证码不能为空' }]}
            extra={<span style={{ color: '#3875f6' }}>发送验证码</span>}>
            <Input placeholder="请输入短信验证码" />
          </Form.Item>
        </Form>
      </LoginForm>
    </LoginWarpper>
  );
};

export default memo(Login);
