import { Avatar } from '@mui/material';
import React, { SetStateAction } from 'react';
import styles from './styles.module.scss';
import { IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import classNames from 'classnames';

export interface IDasboardProps {
  onShow?: boolean;
  className?: string;
  onShowDashboard?: React.Dispatch<SetStateAction<boolean>>;
}

const Dashboard: React.FunctionComponent<IDasboardProps> = ({
  onShow = false,
  className,
  onShowDashboard,
}) => {
  const dashboardClasses: string = classNames([
    styles.overlay,
    onShow && styles.active,
    className,
  ]);

  const handleCloseDashboard = (e: any) => {
    e.preventDefault();
    if (e.target.className === dashboardClasses) {
      if (onShowDashboard) onShowDashboard(false);
    }
  };
  return (
    <div
      className={dashboardClasses}
      onClick={(e: any) => handleCloseDashboard(e)}
    >
      <div className={styles.dashboard}>
        <div className={styles.dashboard__nav}>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className={styles.dashboard__header}>
          <div className={styles.dashboard__avatar}>
            <Avatar
              src="https://lh3.googleusercontent.com/h3h6Np5TdIiOmA0qcT-zi3bmirYmqc9O4TRuvW6UdS3mN2Fkwyal-VGzfTePV95PtA=w512"
              sx={{ width: 120, height: 120 }}
            />
          </div>
          <div className={styles.dashboard__name}>Username</div>
          <div className={styles.dashboard__phone}>+380 00 000 00 00</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
