import React from 'react';
import Searchbar from '../Searchbar';
import SidebarChat from '../SidebarChat';
import styles from './styles.module.scss';

const Sidebar: React.FunctionComponent = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar__header}>
        <Searchbar />
      </div>

      <div className={styles.sidebar__content}>
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
  );
};

export default Sidebar;
