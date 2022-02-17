import React from 'react';
import { getAllMovies, getAllShows } from '../../features/movies/movieSlice';
import { useSelector } from 'react-redux';
import MovieCard from '../MovieCard/MovieCard';
import './MovieListing.scss';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import settings from '../../apis/settings';

const container = {
  hidden: {
    opacity: 0,
    y: 80,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
    },
  },
};

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);

  let renderMovies,
    renderShows = '';

  renderMovies =
    movies.Response === 'True' ? (
      movies.Search.map((movie, index) => (
        <MovieCard key={index} data={movie} />
      ))
    ) : (
      <div className="movies-error">
        <h3>{movies.Error}</h3>
      </div>
    );

  renderShows =
    shows.Response === 'True' ? (
      shows.Search.map((show, index) => <MovieCard key={index} data={show} />)
    ) : (
      <div className="movies-error">
        <h3>{shows.Error}</h3>
      </div>
    );

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <motion.div
          exit={{ opacity: 0 }}
          variants={container}
          initial="hidden"
          animate="show"
          className="movie-container"
        >
          <Slider {...settings}>{renderMovies}</Slider>
        </motion.div>
      </div>
      <div className="movie-list">
        <h2>Shows</h2>
        <motion.div
          exit={{ opacity: 0 }}
          variants={container}
          initial="hidden"
          animate="show"
          className="movie-container"
        >
          <Slider {...settings}>{renderShows}</Slider>
        </motion.div>
      </div>
    </div>
  );
};
export default MovieListing;
