import React from 'react';
import styles from './styles.module.scss';
import Sign from '../Sign';
import Login from '../Login';

export interface IFormWrapperProps {
  children?: React.ReactNode | string;
}

class FormWrapper extends React.Component<IFormWrapperProps> {
  public static Sign = Sign;
  public static Login = Login;

  render(): React.ReactNode {
    return <div className={styles.body}>{this.props.children}</div>;
  }
}

export default FormWrapper;
