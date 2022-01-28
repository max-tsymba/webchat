import React from 'react';
import styles from './styles.module.scss';
import { IconButton } from '@mui/material';

export interface IDashboardLinkProps {
  children?: React.ReactNode;
  text: string;
}

const DashboardLink: React.FunctionComponent<IDashboardLinkProps> = ({
  children,
  text,
}): React.ReactElement => {
  return (
    <div className={styles.link}>
      <IconButton>
        {children}
        <span className={styles.link__text}>{text}</span>
      </IconButton>
    </div>
  );
};

export default DashboardLink;
