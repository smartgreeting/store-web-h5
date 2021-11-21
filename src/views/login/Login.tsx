/*
 * @Author: lihuan
 * @Date: 2021-11-17 21:46:07
 * @LastEditors: lihuan
 * @LastEditTime: 2021-11-21 20:14:49
 * @Email: 17719495105@163.com
 */
import { FC, memo, useCallback } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { Button, Form, Input, NavBar, Space, Toast } from 'antd-mobile';
import type { AppStore } from '@/store/reducer';
import { getCaptuhaActions } from '@/views/login/store/action';
import { LoginWarpper, LoginForm } from './style';
import CountDown from './countDown';

const Login: FC = () => {
  // form
  const [form] = Form.useForm<{ phone: string; smsCode: string }>();

  // 获取状态
  const { code, pending, msg } = useSelector(
    (state: AppStore) => ({
      ...state.login,
    }),
    shallowEqual
  );

  const dispatch = useDispatch();

  // 返回
  const back = () => console.log('go back');

  // 提交
  const onFinish = useCallback(() => {
    const { phone, smsCode = '' } = form.getFieldsValue();
    const regPhone = /^1[3-9]\d{9}$/;
    if (!regPhone.test(phone)) {
      Toast.show('手机号码格式不正确');
      return false;
    }
    if (smsCode?.length < 4 || smsCode?.length > 6) {
      Toast.show('验证码格式不正确');
      return false;
    }
    console.log(phone, smsCode);
  }, [form]);

  // 获取手机验证码
  const getSmsCode = useCallback(() => {
    const { phone } = form.getFieldsValue();

    const regPhone = /^1[3-9]\d{9}$/;
    if (!regPhone.test(phone)) {
      Toast.show('手机号码格式不正确');
      return false;
    }

    dispatch(getCaptuhaActions({ phone }));
  }, [dispatch, form]);

  console.log(code, pending, msg, 11111);
  return (
    <LoginWarpper>
      <NavBar onBack={back}>登 录</NavBar>
      <LoginForm>
        <Form
          form={form}
          onFinish={onFinish}
          footer={
            <div style={{ marginTop: 50 }}>
              <Button block size="middle" type="submit" color="primary">
                登 录
              </Button>
            </div>
          }>
          <Form.Item name="phone" label="手机号码">
            <Input placeholder="请输入手机号码" />
          </Form.Item>
          <Form.Item name="smsCode" label="短信验证码" extra={<CountDown getSmsCode={getSmsCode} />}>
            <Input placeholder="请输入短信验证码" />
          </Form.Item>
        </Form>
      </LoginForm>
    </LoginWarpper>
  );
};

export default memo(Login);
