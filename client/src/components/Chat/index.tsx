import classNames from 'classnames';
import React from 'react';
import styles from './styles.module.scss';

export interface IChatProps {
  className?: string;
}

const Chat: React.FunctionComponent<IChatProps> = ({ className }) => {
  const chatClasses = classNames([styles.chat, className]);
  return <div className={chatClasses}>Chat</div>;
};

export default Chat;
