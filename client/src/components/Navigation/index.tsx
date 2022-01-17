import React from 'react';
import styles from './styles.module.scss';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export interface INavigationProps {
  onShowDashboard?: any;
}

const Navigation: React.FunctionComponent<INavigationProps> = ({
  onShowDashboard,
}) => {
  return (
    <div className={styles.navigation}>
      <div className={styles.navigation__button}>
        <IconButton onClick={() => onShowDashboard(true)}>
          <MenuIcon />
        </IconButton>
      </div>
      <div className={styles.navigation__button}>
        <IconButton>
          <ChatBubbleOutlineIcon />
          <span className={styles.navigation__button_info}>All сhats</span>
        </IconButton>
      </div>
    </div>
  );
};

export default Navigation;
