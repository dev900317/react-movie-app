import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import avatar from '../../images/avatar.png';
import { HiSearch } from 'react-icons/hi';
import { useDispatch } from 'react-redux';

import './Header.scss';
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from '../../features/movies/movieSlice';

const Header = () => {
  const [term, setTerm] = useState('');
  const dispatch = useDispatch();

  //<<<<<<<< ACTIVE SEARCH AFTER INPUT VALUE CHANGE >>>>>>>
  // useEffect(() => {
  //   dispatch(fetchAsyncMovies(term));
  //   dispatch(fetchAsyncShows(term));
  // }, [term]);

  const submitHandler = (e) => {
    if (term === '') {
      return alert('Please type correct movie title');
    }
    e.preventDefault();
    dispatch(fetchAsyncMovies(term));
    dispatch(fetchAsyncShows(term));
    setTerm('');
  };

  return (
    <div className="header">
      <div className="header__logo">
        <Link to="/">Movie App</Link>
      </div>
      <div className="search-bar">
        <form onSubmit={submitHandler}>
          <input
            type="text"
            value={term}
            placeholder="Type movie or show..."
            onChange={(e) => {
              setTerm(e.target.value);
            }}
          />
          <button type="submit">
            <HiSearch className="search-icon"></HiSearch>
          </button>
        </form>
      </div>
      <div className="header__user-img">
        <img src={avatar} alt="user" />
      </div>
    </div>
  );
};

export default Header;
