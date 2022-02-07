import React from 'react';
import styles from './styles.module.scss';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export interface IFormHeaderProps {
  onSubmit?: () => void;
}

const FormHeader: React.FunctionComponent<IFormHeaderProps> = ({
  onSubmit,
}): React.ReactElement => {
  return (
    <div className={styles.main}>
      <div className={styles.title}>Webchat</div>
      <button className={styles.nextBtn} onClick={onSubmit}>
        Next
        <NavigateNextIcon />
      </button>
    </div>
  );
};

export default FormHeader;
