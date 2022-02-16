import React from 'react';
import './MovieCard.scss';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const container = {
  init: {},
  hover: {
    scale: 1.03,
    transition: {
      duration: 0.7,
      type: 'spring',
      damping: 8,
      stiffness: 100,
    },
  },
};

const MovieCard = ({ data }) => {
  return (
    <motion.div variants={container} whileHover="hover" className="card-item">
      <Link to={`/movie/${data.imdbID}`}>
        <div className="card-inner">
          <div className="card-top">
            <img src={data.Poster} alt={data.Title} />
          </div>
          <div className="card-bottom">
            <div className="card-info">
              <h4>{data.Title}</h4>
              <p>{data.Year}</p>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default MovieCard;
