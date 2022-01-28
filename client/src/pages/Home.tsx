import React, { SetStateAction, useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import Dashboard from '../components/Dashboard';
import Sidebar from '../components/Sidebar';
import Chat from '../components/Chat';
import axios, { AxiosResponse } from 'axios';
import Pusher, { Channel } from 'pusher-js';

const Home: React.FunctionComponent = (): React.ReactElement => {
  const [showDashboard, setShowDashboard]: [
    boolean,
    React.Dispatch<SetStateAction<boolean>>,
  ] = useState<boolean>(false);

  const [messages, setMessages]: [
    unknown[],
    React.Dispatch<SetStateAction<unknown[]>>,
  ] = useState<unknown[]>([]);

  useEffect((): void => {
    axios.get('/sync').then((response: AxiosResponse) => {
      setMessages(response.data);
    });
  }, []);

  useEffect((): (() => void) => {
    const pusher: Pusher = new Pusher('07f10888c60edfb865b7', {
      cluster: 'eu',
    });

    const channel: Channel = pusher.subscribe('messages');
    channel.bind('inserted', function (data: unknown): void {
      setMessages([...messages, data]);
    });

    return (): void => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages]);
  return (
    <div className="app">
      <Dashboard onShow={showDashboard} onShowDashboard={setShowDashboard} />
      <Navigation onShowDashboard={setShowDashboard} />
      <Sidebar />
      <Chat className="chat" messages={messages} />
    </div>
  );
};

export default Home;
