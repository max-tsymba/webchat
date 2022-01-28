import React from 'react';
import styles from './styles.module.scss';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const FormHeader: React.FunctionComponent = (): React.ReactElement => {
  return (
    <div className={styles.main}>
      <div className={styles.title}>Webchat</div>
      <button className={styles.nextBtn}>
        Next
        <NavigateNextIcon />
      </button>
    </div>
  );
};

export default FormHeader;
