import React, { SetStateAction, useState } from 'react';
import styles from './styles.module.scss';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import RegistrationForm from '../Forms/FormRegistration';
import LoginForm from '../Forms/FormLogin';

export interface IAuthBodyProps {
  refForm?: React.RefObject<HTMLFormElement>;
}

const AuthBody: React.FunctionComponent<IAuthBodyProps> = ({
  refForm,
}): React.ReactElement => {
  const [tabValue, setTabValue]: [
    number,
    React.Dispatch<SetStateAction<number>>,
  ] = useState<number>(1);

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

      {tabValue === 1 && <RegistrationForm refForm={refForm} />}
      {tabValue === 2 && <LoginForm refForm={refForm} />}
    </div>
  );
};

export default AuthBody;
