import React from 'react';
import AuthForm from '../components/AuthForm';
import LoginHeader from '../components/LoginHeader';

const Login: React.FunctionComponent = (): React.ReactElement => {
  return (
    <div className="login">
      <LoginHeader />
      <div className="login__body"></div>
      <AuthForm />
    </div>
  );
};

export default Login;
