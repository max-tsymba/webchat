import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
} from '@mui/material';
import classNames from 'classnames';
import React, { SetStateAction, useState } from 'react';
import { countryData, ICountryData } from './data';
import styles from './styles.module.scss';

export interface ISignProps {
  children?: React.ReactNode | string;
  className?: string;
}

const Sign: React.FunctionComponent<ISignProps> = ({
  children,
  className,
}): React.ReactElement => {
  const bindClasses: string = classNames([className, styles.form]);
  const [codeValue, setCodeValue]: [
    string,
    React.Dispatch<SetStateAction<string>>,
  ] = useState('');
  return (
    <form className={bindClasses}>
      <h3 className={styles.heading}>Sign up</h3>
      <p className={styles.par}>
        Please choose your country and enter your full phone number.
      </p>
      <FormControl variant="standard" className={styles.select}>
        <InputLabel id="demo-simple-select-standard-label">Country</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          label="Country"
          defaultValue={''}
        >
          {countryData.map((data: ICountryData, index: number) => (
            <MenuItem
              value={index + 1}
              key={data.code}
              className={styles.select__item}
              onClick={() => setCodeValue(data.code)}
            >
              <span>{data.country}</span>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <div className={styles.textFields}>
        <TextField
          id="standard-basic"
          label="Code"
          variant="standard"
          value={codeValue}
          className={styles.codefield}
        />

        <TextField
          id="standard-basic"
          label="Phone number"
          variant="standard"
          className={styles.phonefield}
        />
      </div>

      <TextField
        id="standard-basic"
        label="Password"
        variant="standard"
        className={styles.password}
      />
      {children}
    </form>
  );
};

export default Sign;
