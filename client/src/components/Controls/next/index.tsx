import classNames from 'classnames';
import React, { FunctionComponent, ReactElement } from 'react';
import { INextButtonProps } from './types';
import styles from './styles.module.scss';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const NextButton: FunctionComponent<INextButtonProps> = ({
  className,
  onClick,
}): ReactElement => {
  const ButtonClasses = classNames([styles.btn, className]);

  return (
    <button className={ButtonClasses} onClick={onClick}>
      Next
      <NavigateNextIcon />
    </button>
  );
};

export default NextButton;
