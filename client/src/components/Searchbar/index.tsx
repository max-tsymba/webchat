import React from 'react';
import styles from './styles.module.scss';
import SearchIcon from '@mui/icons-material/Search';

const Searchbar: React.FunctionComponent = () => {
  return (
    <div className={styles.search}>
      <SearchIcon />
      <input
        className={styles.search__input}
        type="text"
        placeholder="Search"
      />
    </div>
  );
};

export default Searchbar;
