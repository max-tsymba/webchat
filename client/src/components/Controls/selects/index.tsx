import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import classNames from 'classnames';
import React, { FunctionComponent, ReactElement } from 'react';
import { ISelectProps } from './types';
import styles from './styles.module.scss';
import { ICountryData } from 'src/components/Sign/data';

const Selector: FunctionComponent<ISelectProps> = ({
  text,
  labelId,
  label,
  id,
  defaultValue,
  className,
  required,
  children,
  listData,
  onClick,
}): ReactElement => {
  const SelectClasses: string = classNames([styles.select, className]);
  return (
    <FormControl variant="standard" className={SelectClasses}>
      <InputLabel id="select-label">{text}</InputLabel>
      <Select
        labelId={labelId}
        label={label}
        id={id}
        defaultValue={defaultValue}
        required={required}
      >
        {listData.map((data: ICountryData, index: number) => (
          <MenuItem
            value={index + 1}
            key={data.code}
            className={styles.select__item}
            onClick={onClick && onClick(data)}
          >
            <span>{data.country}</span>
          </MenuItem>
        ))}
        {children}
      </Select>
    </FormControl>
  );
};

export default Selector;
