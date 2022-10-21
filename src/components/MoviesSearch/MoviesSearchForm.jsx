import { useState } from 'react';
import { CiSearch  } from "react-icons/ci";
import css from './MoviesSearchForm.module.css';

export default function MoviesSearchForm({ onSubmit }) {
  const [search, setSearch] = useState('');

  const handleChange = ({ target: { value } }) => {
    setSearch(value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (search.trim() === '') {
      return alert('Enter movie for search.');
    }

    onSubmit(search);
    setSearch('');
  };

  return (
    <form className={css.formSearch} onSubmit={handleSubmit}>
      <input
        className={css.searchInput}
        type="text"
        value={search}
        name="search"
        placeholder="Search movies"
        onChange={handleChange}
      />
      <button className={css.searchButton} type="submit">
              <CiSearch className={css.icon } />
      </button>
    </form>
  );
}
