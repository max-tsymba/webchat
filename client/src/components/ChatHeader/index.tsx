import React from 'react';
import styles from './styles.module.scss';
import { Avatar } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ChatHeader: React.FunctionComponent = () => {
  return (
    <div className={styles.header}>
      <Avatar
        src="https://lh3.googleusercontent.com/h3h6Np5TdIiOmA0qcT-zi3bmirYmqc9O4TRuvW6UdS3mN2Fkwyal-VGzfTePV95PtA=w512"
        sx={{ width: 42, height: 42 }}
      />
      <div className={styles.header__content}>
        <span className={styles.header__content_title}>Chatting</span>
        <span className={styles.header__content_time}>
          last seen 20 minutes ago
        </span>
      </div>

      <div className={styles.header__utils}>
        <IconButton>
          <SearchIcon />
        </IconButton>

        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default ChatHeader;
