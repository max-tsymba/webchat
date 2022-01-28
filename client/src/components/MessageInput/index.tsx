import React, { SetStateAction, useEffect, useRef, useState } from 'react';
import styles from './styles.module.scss';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { IconButton } from '@mui/material';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import SendIcon from '@mui/icons-material/Send';
import autosize from 'autosize';
import axios from '../../API/base.api';

const MessageInput = (): React.ReactElement => {
  const refTextarea: React.RefObject<HTMLTextAreaElement> =
    useRef<HTMLTextAreaElement>(null);

  const [value, setValue]: [string, React.Dispatch<SetStateAction<string>>] =
    useState<string>('');

  const sendMessage = (): void => {
    axios.post('/new', {
      message: value,
      username: 'Username',
      received: true,
    });

    setValue('');
  };

  useEffect((): void => {
    if (refTextarea.current) {
      refTextarea.current.focus();
      autosize(refTextarea.current);
    }
  }, [refTextarea]);

  return (
    <div className={styles.wrapper}>
      <IconButton>
        <AttachFileIcon className={styles.attachFile__svg} />
      </IconButton>
      <textarea
        placeholder="Write a message..."
        rows={1}
        className={styles.textarea}
        ref={refTextarea}
        value={value}
        onChange={(e: any): void => {
          setValue(e.target.value);
        }}
      />
      <IconButton>
        <SentimentSatisfiedAltIcon />
      </IconButton>

      <IconButton onClick={sendMessage}>
        <SendIcon />
      </IconButton>
    </div>
  );
};

export default MessageInput;
