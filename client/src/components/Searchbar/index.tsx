import React from 'react';
import styles from './styles.module.scss';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';

const Searchbar: React.FunctionComponent = () => {
  return (
    <div className={styles.search}>
      <SearchIcon />
      <input
        className={styles.search__input}
        type="text"
        placeholder="Search"
        required={true}
        pattern="\S+.*"
      />
      <IconButton>
        <CloseIcon />
      </IconButton>
    </div>
  );
};

export default Searchbar;
