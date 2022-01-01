/*
 * @Author: lihuan
 * @Date: 2021-12-25 16:35:59
 * @LastEditors: lihuan
 * @LastEditTime: 2022-01-01 16:45:59
 * @Email: 17719495105@163.com
 */

import { Fragment, memo, useCallback, useEffect, useRef } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useTheme } from 'styled-components';

import { Button, Form, Input, NavBar, Toast } from 'antd-mobile';

import { RegisterWrapper, RegisterForm } from './style';
import { is, isPhone } from '@/utils/is';
import { sleep } from '@/utils/share';
import { getSmsActions, getRegisterActions } from './store/action';
import CountDown from './CountDown';
import { AppStore } from '@/store/reducer';
interface IRegister {
  phone: string;
  password: string;
  surePassword: string;
  smsCode: string;
}
const Register = () => {
  const isMounted = useRef(false);
  // 获取状态
  const { sms, register } = useSelector(
    (state: AppStore) => ({
      ...state.login,
    }),
    shallowEqual
  );
  const dispatch = useDispatch();
  // router
  const navigate = useNavigate();
  // theme
  const theme = useTheme();
  // form
  const [form] = Form.useForm<IRegister>();
  const back = useCallback(() => navigate(-1), [navigate]);

  const onFinish = useCallback(async () => {
    const { phone, password = '', surePassword, smsCode = '' } = form.getFieldsValue();

    if (!isPhone(phone)) {
      Toast.show('手机号码格式不正确');
      return false;
    }
    if (smsCode.length !== 6) {
      Toast.show('验证码长度不正确');
      return false;
    }
    if (password === '') {
      Toast.show('请输入密码');
      return false;
    }
    if (surePassword !== password) {
      Toast.show('输入的密码不一致');
      return false;
    }
    dispatch(getRegisterActions({ phone, password, smsCode }));
  }, [dispatch, form]);

  // 获取手机验证码
  const getSmsCode = useCallback(() => {
    const { phone } = form.getFieldsValue();

    if (!isPhone(phone)) {
      Toast.show('手机号码格式不正确');
      return false;
    }
    dispatch(getSmsActions({ phone }));
  }, [dispatch, form]);

  console.log(sms, register);
  useEffect(() => {
    isMounted.current = false;
  }, []);
  useEffect(() => {
    if (register.status === 'ok' && isMounted.current) {
      sleep(1000).then(() => {
        navigate('/login', { state: form.getFieldValue('phone') });
      });
    }
    isMounted.current = true;
  }, [register, navigate, form]);
  return (
    <RegisterWrapper>
      <NavBar onBack={back}>注 册</NavBar>
      <RegisterForm>
        <Form
          form={form}
          onFinish={onFinish}
          footer={
            <Fragment>
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <span
                  style={{ color: theme.primary }}
                  onClick={() => {
                    navigate('/login');
                  }}>
                  登 录
                </span>
              </div>
              <div className="register">
                <Button block size="middle" type="submit" color="primary">
                  注 册
                </Button>
              </div>
            </Fragment>
          }>
          <Form.Item name="phone" label="手机号码">
            <Input placeholder="请输入手机号码" />
          </Form.Item>
          <Form.Item name="smsCode" label="短信验证码" extra={<CountDown getSmsCode={getSmsCode} />}>
            <Input placeholder="请输入短信验证码" />
          </Form.Item>
          <Form.Item name="password" label="密码">
            <Input type="password" placeholder="请输入密码" />
          </Form.Item>
          <Form.Item name="surePassword" label="确认密码">
            <Input type="password" placeholder="请再次输入密码" />
          </Form.Item>
        </Form>
      </RegisterForm>
    </RegisterWrapper>
  );
};

export default memo(Register);
