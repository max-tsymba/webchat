import React from 'react';
import styles from './styles.module.scss';
import { Avatar } from '@mui/material';

const SidebarChat = () => {
  return (
    <div className={styles.chat}>
      <Avatar
        src="https://lh3.googleusercontent.com/h3h6Np5TdIiOmA0qcT-zi3bmirYmqc9O4TRuvW6UdS3mN2Fkwyal-VGzfTePV95PtA=w512"
        sx={{ width: 50, height: 50 }}
      />
      <div className={styles.chat__info}>
        <p className={styles.chat__title}>
          <span className={styles.chat__name}>Its chat title</span>
          <span className={styles.chat__time}>12:31 am</span>
        </p>
        <p className={styles.chat__message}>
          <span className={styles.chat__message_solo}>
            Chat dsfsdfsdfsdfsdfsdfsdf sdfsdfsdfsdfsdfs dfsdfsdfmessage
          </span>
        </p>
      </div>
    </div>
  );
};

export default SidebarChat;
