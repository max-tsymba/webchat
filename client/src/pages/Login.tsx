import React from 'react';
import LoginHeader from '../components/LoginHeader';

const Login: React.FunctionComponent = (): React.ReactElement => {
  return (
    <div className="login">
      <LoginHeader />
      <div className="login__body"></div>
    </div>
  );
};

export default Login;
