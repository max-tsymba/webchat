import classNames from 'classnames';
import React from 'react';
import ChatHeader from '../ChatHeader';
import styles from './styles.module.scss';

export interface IChatProps {
  className?: string;
}

const Chat: React.FunctionComponent<IChatProps> = ({ className }) => {
  const chatClasses: string = classNames([styles.chat, className]);
  return (
    <div className={chatClasses}>
      <div className={styles.chat__header}>
        <ChatHeader />
      </div>
      <div className={styles.chat__content}>Chat Cotent</div>
      <div className={styles.chat__area}>Chat Text Area</div>
    </div>
  );
};

export default Chat;
