import React, { useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './Login.scss';
import { signIn as signInAction, validateToken as validateTokenAction } from '../../redux/modules/auth';
import AuthUserItem from '../../components/AuthUserItem';
import Loader from '../../components/Loader';
import logo from '../../images/logo.png';

const Login = ({ signIn, auth, validateToken }) => {
  const { isAuthenticated, isAuthenticating, user } = auth;

  useEffect(() => {
    validateToken();
  }, [validateToken]);

  const onSubmit = ({ username, password }) => {
    signIn({ username, password });
  }

  return (
    <div className="Login">
      <div className="Login__logo">
        <img src={logo} alt="logo" />
      </div>
      <Form className="Login__form" name="login" onFinish={onSubmit}>
        <Loader loading={isAuthenticating}>
          {isAuthenticated
            ? (
              <>
                <h3 className="Login__title">Оберіть користувача</h3>
                <div className="Login__col">
                  <div className="Login__col-title">Студент</div>
                  {user.as_student.map(item => (
                    <AuthUserItem
                      key={item.id}
                      firstName={user.name}
                      lastName={user.surname}
                      course={item.course}
                      educationForm={item.education_form}
                      educationProgramm={item.educational_programme}
                    />
                  ))}
                </div>
                <div className="Login__col">
                  <div className="Login__col-title">Выкладач</div>
                  {user.as_teacher.map(item => (
                    <AuthUserItem
                      key={item.id}
                      firstName={user.name}
                      lastName={user.surname}
                      role={item.role}
                      department={item.department}
                      isTeacher
                    />
                  ))}
                </div>
              </>
            )
            : (
              <>
                <Form.Item
                  label="Логiн"
                  name="username"
                  rules={[{ required: true, message: 'Введіть логін!' }]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Пароль"
                  name="password"
                  rules={[{ required: true, message: 'Введіть пароль!' }]}
                >
                  <Input.Password />
                </Form.Item>
                <Form.Item>
                  <Button type="primary" htmlType="submit">Надіслати</Button>
                </Form.Item>
              </>
            )
          }
        </Loader>
      </Form>
    </div>
  );
}

Login.propTypes = {
  signIn: PropTypes.func.isRequired,
  auth: PropTypes.object,
};

export default connect(
  ({ auth }) => ({ auth }),
  {
    signIn: signInAction,
    validateToken: validateTokenAction,
  }
)(Login);