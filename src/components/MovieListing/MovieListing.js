import React from 'react';
import { getAllMovies } from '../../features/movies/movieSlice';
import { useSelector } from 'react-redux';
import MovieCard from '../MovieCard/MovieCard';
import './MovieListing.scss';
import { motion, AnimatePresence } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const listItem = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const MovieListing = () => {
  const movies = useSelector(getAllMovies);

  let renderMovies = '';

  renderMovies =
    movies.Response === 'True' ? (
      movies.Search.map((movie, index) => (
        <motion.div variants={listItem} initial="hidden" animate="show">
          <MovieCard key={index} data={movie} />
        </motion.div>
      ))
    ) : (
      <div className="movies-error">
        <h3>{movies.Error}</h3>
      </div>
    );

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <AnimatePresence>
          <motion.div
            exit={{ opacity: 0 }}
            variants={container}
            initial="hidden"
            animate="show"
            className="movie-container"
          >
            {renderMovies}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
export default MovieListing;
