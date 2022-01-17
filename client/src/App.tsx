import React from 'react';
import './App.scss';
import Navigation from 'components/Navigation';
// import Dashboard from 'components/Dashboard';
import Sidebar from 'components/Sidebar';
import Chat from 'components/Chat';

const App = () => {
  return <div className='app'>

    {/* <Dashboard /> */}
    <Navigation />
    <Sidebar />
    <Chat />
      
  </div>;
};

export default App;
