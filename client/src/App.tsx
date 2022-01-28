import React, { SetStateAction, useEffect, useState } from 'react';
import './App.scss';
import Navigation from './components/Navigation';
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import Pusher, { Channel } from 'pusher-js';
import axios from './API/base.api';
import { AxiosResponse } from 'axios';

const App = (): React.ReactElement => {
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

  console.log(messages);
  return (
    <div className="app">
      <Dashboard onShow={showDashboard} onShowDashboard={setShowDashboard} />
      <Navigation onShowDashboard={setShowDashboard} />
      <Sidebar />
      <Chat className="chat" />
    </div>
  );
};

export default App;
