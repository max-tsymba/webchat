import React from 'react';
import Auth from '../components/Auth';

const Login: React.FunctionComponent = (): React.ReactElement => {
  return (
    <Auth.Body>
      <Auth.Form />
    </Auth.Body>
  );
};

export default Login;
