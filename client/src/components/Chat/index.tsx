import classNames from 'classnames';
import React from 'react';
import ChatBody from '../ChatBody';
import ChatHeader from '../ChatHeader';
import MessageInput from '../MessageInput';
import styles from './styles.module.scss';

export interface IChatProps {
  className?: string;
}

const Chat: React.FunctionComponent<IChatProps> = ({
  className,
}): React.ReactElement => {
  const chatClasses: string = classNames([styles.chat, className]);
  return (
    <div className={chatClasses}>
      <div className={styles.chat__header}>
        <ChatHeader />
      </div>
      <ChatBody />
      <MessageInput />
    </div>
  );
};

export default Chat;
