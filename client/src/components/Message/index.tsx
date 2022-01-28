import classNames from 'classnames';
import React from 'react';
import styles from './styles.module.scss';

const defaultProps: IMessageProps = {
  isCurrentUser: false,
};

export interface IMessageProps {
  children?: React.ReactNode | string;
  isCurrentUser?: boolean;
  timestamp?: string;
}

const Message: React.FunctionComponent<IMessageProps> = ({
  children,
  isCurrentUser,
  timestamp,
}): React.ReactElement => {
  const messageClasses: string = classNames([
    styles.chat__message,
    isCurrentUser && styles.chat__reciever,
  ]);
  return (
    <p className={messageClasses}>
      {children}
      <span className={styles.chat__timestamp}>{timestamp}</span>
    </p>
  );
};

Message.defaultProps = defaultProps;

export default Message;
