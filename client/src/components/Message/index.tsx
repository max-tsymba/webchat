import classNames from 'classnames';
import React from 'react';
import styles from './styles.module.scss';

const defaultProps: IMessageProps = {
  isCurrentUser: false,
};

export interface IMessageProps {
  children?: React.ReactNode | string;
  isCurrentUser?: boolean;
}

const Message: React.FunctionComponent<IMessageProps> = ({
  children,
  isCurrentUser,
}) => {
  const messageClasses: string = classNames([
    styles.chat__message,
    isCurrentUser && styles.chat__reciever,
  ]);
  return (
    <p className={messageClasses}>
      {children}
      <span className={styles.chat__timestamp}>{new Date().toUTCString()}</span>
    </p>
  );
};

Message.defaultProps = defaultProps;

export default Message;
