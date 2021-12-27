/*
 * @Author: lihuan
 * @Date: 2021-11-17 21:46:07
 * @LastEditors: lihuan
 * @LastEditTime: 2021-12-27 22:30:52
 * @Email: 17719495105@163.com
 */
import { FC, Fragment, memo, useCallback } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Button, Form, Input, NavBar, Toast } from 'antd-mobile';
import { useTheme } from 'styled-components';

import type { AppStore } from '@/store/reducer';
import { getSmsActions } from '@/views/login/store/action';
import { LoginWarpper, LoginForm } from './style';
import CountDown from './CountDown';
import { isPhone } from '@/utils/is';

const Login: FC = () => {
  // router
  const navigate = useNavigate();
  // theme
  const theme = useTheme();
  // form
  const [form] = Form.useForm<{ phone: string; smsCode: string }>();

  // 获取状态
  const { smsCode, pending, msg } = useSelector(
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

    if (!isPhone(phone)) {
      Toast.show('手机号码格式不正确');
      return false;
    }
    if (smsCode === '') {
      Toast.show('请先输入短信验证码');
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

    if (!isPhone(phone)) {
      Toast.show('手机号码格式不正确');
      return false;
    }

    dispatch(getSmsActions({ phone }));
  }, [dispatch, form]);

  console.log(smsCode, pending, msg, 11111);
  return (
    <LoginWarpper>
      <NavBar className="navbar" backArrow={false} onBack={back}>
        登 录
      </NavBar>
      <LoginForm>
        <Form
          form={form}
          onFinish={onFinish}
          footer={
            <Fragment>
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <span
                  style={{ color: theme.primary }}
                  onClick={() => {
                    navigate('/register');
                  }}>
                  注 册
                </span>
              </div>
              <div className="login">
                <Button block size="middle" type="submit" color="primary">
                  登 录
                </Button>
              </div>
            </Fragment>
          }>
          <Form.Item name="phone" label="手机号码">
            <Input placeholder="请输入手机号码" />
          </Form.Item>
          <Form.Item name="password" label="密码">
            <Input type="password" placeholder="请输入密码" />
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
