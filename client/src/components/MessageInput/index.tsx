import React, { useEffect, useRef } from 'react';
import styles from './styles.module.scss';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { IconButton } from '@mui/material';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import SendIcon from '@mui/icons-material/Send';
import autosize from 'autosize';

const MessageInput = () => {
  const refTextarea: React.RefObject<HTMLTextAreaElement> =
    useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
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
        defaultValue={''}
        ref={refTextarea}
      />
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
