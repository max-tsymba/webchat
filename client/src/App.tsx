import React, { SetStateAction, useState } from 'react';
import './App.scss';
import Navigation from './components/Navigation';
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';

const App = () => {
  const [showDashboard, setShowDashboard]: [
    boolean,
    React.Dispatch<SetStateAction<boolean>>,
  ] = useState<boolean>(false);

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
