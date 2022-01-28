import React, { SetStateAction, useState } from 'react';
import styles from './styles.module.scss';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';

const Searchbar: React.FunctionComponent = (): React.ReactElement => {
  const [value, setValue]: [string, React.Dispatch<SetStateAction<string>>] =
    useState('');
  return (
    <div className={styles.search}>
      <SearchIcon />
      <input
        className={styles.search__input}
        type="text"
        value={value}
        onChange={(e: any) => setValue(e.target.value)}
        placeholder="Search"
        required={true}
        pattern="\S+.*"
      />
      <IconButton onClick={() => setValue('')}>
        <CloseIcon />
      </IconButton>
    </div>
  );
};

export default Searchbar;
