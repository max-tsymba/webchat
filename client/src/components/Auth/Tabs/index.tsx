import React, { SetStateAction, useState } from 'react';
import styles from './styles.module.scss';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import RegistrationForm from '../../Forms/FormRegistration';
import LoginForm from '../../Forms/FormLogin';
import { IAuthTabsProps } from './types';

const AuthTabs: React.FunctionComponent<IAuthTabsProps> = ({
  reference,
}): React.ReactElement => {
  const [tabValue, setTabValue]: [
    number,
    React.Dispatch<SetStateAction<number>>,
  ] = useState(1);

  return (
    <div className={styles.form}>
      <Tabs className={styles.tabs} value={tabValue}>
        <Tab
          className={styles.tab}
          value={1}
          onClick={() => setTabValue(1)}
          label="Sign up"
        />
        <Tab
          className={styles.tab}
          value={2}
          onClick={() => setTabValue(2)}
          label="Log in"
        />
      </Tabs>

      {tabValue === 1 && <RegistrationForm refForm={reference} />}
      {tabValue === 2 && <LoginForm refForm={reference} />}
    </div>
  );
};

export default AuthTabs;
