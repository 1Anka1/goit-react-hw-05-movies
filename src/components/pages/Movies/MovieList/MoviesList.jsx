import React from 'react'
import PropTypes from 'prop-types'
import { Link, useLocation } from 'react-router-dom';

export default function MoviesList({items}) {

  const location = useLocation()

    const movies = items.map(({ id, title, name, release_date }) => {
      const releaseDate = release_date ? release_date?.split('-')[0] : ' ';
        return (
          <li key={id} >
            <Link state = {{from: location}} to={`/movies/${id}`}>
              {title || name} ({releaseDate})
            </Link>
          </li>
        );
      });
      return <ul>{movies}</ul>;
}

MoviesList.propTypes = {
  items: PropTypes.array,
  id: PropTypes.number,
  title: PropTypes.string,
  name: PropTypes.string,
  release_date: PropTypes.string,
}