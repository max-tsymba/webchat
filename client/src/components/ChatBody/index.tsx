import React from 'react';
import Message from '../Message';
import styles from './styles.module.scss';

const ChatBody: React.FunctionComponent = (): React.ReactElement => {
  return (
    <div
      className={styles.chat}
      style={{
        backgroundImage: `url(https://wallpaperaccess.com/full/1725723.jpg)`,
      }}
    >
      <Message>This is message</Message>
      <Message>This is message</Message>
      <Message isCurrentUser>This is message</Message>
    </div>
  );
};

export default ChatBody;
