import React from 'react';
import { Component, ReactNode } from 'react';
import AuthBody from './Body';
import AuthForm from './Form';
import AuthHeader from './Header';

class Auth extends Component {
  public static Header = AuthHeader;
  public static Body = AuthBody;
  public static Form = AuthForm;

  render(): ReactNode {
    return <>{this.props.children}</>;
  }
}

export default Auth;
