import React from 'react';
import styles from './styles.module.scss';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { IconButton } from '@mui/material';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import SendIcon from '@mui/icons-material/Send';

const MessageInput = () => {
  return (
    <div className={styles.wrapper}>
      <IconButton>
        <AttachFileIcon className={styles.attachFile__svg} />
      </IconButton>
      <textarea className={styles.textarea} />
      <IconButton>
        <SentimentSatisfiedAltIcon />
      </IconButton>

      <IconButton>
        <SendIcon />
      </IconButton>
    </div>
  );
};

export default MessageInput;
