import classNames from 'classnames';
import React from 'react';
import styles from './styles.module.scss';

const ChatBody: React.FunctionComponent = () => {
  const messageClasses: string = classNames([
    styles.chat__message,
    styles.chat__reciever,
  ]);
  return (
    <div
      className={styles.chat}
      style={{
        backgroundImage: `url(https://wallpaperaccess.com/full/1725723.jpg)`,
      }}
    >
      <p className={styles.chat__message}>
        this is message
        <span className={styles.chat__timestamp}>
          {new Date().toUTCString()}
        </span>
      </p>

      <p className={styles.chat__message}>
        this is message
        <span className={styles.chat__timestamp}>
          {new Date().toUTCString()}
        </span>
      </p>

      <p className={messageClasses}>
        this is message
        <span className={styles.chat__timestamp}>
          {new Date().toUTCString()}
        </span>
      </p>

      <p className={styles.chat__message}>
        this is message
        <span className={styles.chat__timestamp}>
          {new Date().toUTCString()}
        </span>
      </p>

      <p className={styles.chat__message}>
        this is message
        <span className={styles.chat__timestamp}>
          {new Date().toUTCString()}
        </span>
      </p>

      <p className={messageClasses}>
        this is message
        <span className={styles.chat__timestamp}>
          {new Date().toUTCString()}
        </span>
      </p>
    </div>
  );
};

export default ChatBody;
