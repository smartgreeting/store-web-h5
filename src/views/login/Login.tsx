/*
 * @Author: lihuan
 * @Date: 2021-11-17 21:46:07
 * @LastEditors: lihuan
 * @LastEditTime: 2022-01-01 16:52:04
 * @Email: 17719495105@163.com
 */
import { FC, Fragment, memo, useCallback, useEffect } from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { useNavigate, useParams, useSearchParams, useLocation } from 'react-router-dom';
import { useTheme } from 'styled-components';

import { Button, Form, Input, NavBar, Toast } from 'antd-mobile';

import type { AppStore } from '@/store/reducer';
import { LoginWarpper, LoginForm } from './style';
import { isPhone } from '@/utils/is';

const Login: FC = () => {
  // router
  const navigate = useNavigate();
  const location = useLocation();
  // theme
  const theme = useTheme();
  // form
  const [form] = Form.useForm<{ phone: string; password: string }>();

  // 获取状态
  const {} = useSelector(
    (state: AppStore) => ({
      ...state.login,
    }),
    shallowEqual
  );

  // 返回
  const back = () => console.log('go back');

  // 提交
  const onFinish = useCallback(() => {
    const { phone, password = '' } = form.getFieldsValue();

    if (!isPhone(phone)) {
      Toast.show('手机号码格式不正确');
      return false;
    }
    if (password === '') {
      Toast.show('请输入密码');
      return false;
    }

    console.log(phone, password);
  }, [form]);
  useEffect(() => {
    if (location.state) {
      form.setFieldsValue({ phone: location.state as string });
    }
  }, [location, form]);
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
        </Form>
      </LoginForm>
    </LoginWarpper>
  );
};

export default memo(Login);
