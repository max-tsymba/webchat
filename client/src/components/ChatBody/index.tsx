import React, { useEffect, useRef } from 'react';
import Message from '../Message';
import styles from './styles.module.scss';

export interface IChatBodyProps {
  messages?: any[];
}

const ChatBody: React.FunctionComponent<IChatBodyProps> = ({
  messages,
}): React.ReactElement => {
  const refMessageEnd: React.RefObject<HTMLDivElement> =
    useRef<HTMLDivElement>(null);

  const scrollToBottom = (): void => {
    refMessageEnd.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect((): void => {
    scrollToBottom();
  }, [messages]);

  return (
    <div
      className={styles.chat}
      style={{
        backgroundImage: `url(https://wallpaperaccess.com/full/1725723.jpg)`,
      }}
    >
      {console.log(messages)}
      {messages?.map((data: any) => (
        <Message
          isCurrentUser={data.received}
          timestamp={data.createdAt}
          key={data._id}
        >
          {data.message}
        </Message>
      ))}
      <div ref={refMessageEnd}></div>
    </div>
  );
};

export default ChatBody;
