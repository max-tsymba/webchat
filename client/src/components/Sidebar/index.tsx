import React from 'react';
import Searchbar from '../Searchbar';
import styles from './styles.module.scss';

const Sidebar: React.FunctionComponent = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar__header}>
        <Searchbar />
      </div>
    </div>
  );
};

export default Sidebar;
