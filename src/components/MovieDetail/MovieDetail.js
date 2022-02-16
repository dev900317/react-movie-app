import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  fetchAsyncMovieOrShowDetail,
  getSelectedMovieOrShow,
} from '../../features/movies/movieSlice';
import { HiStar, HiCalendar, HiClock, HiThumbUp } from 'react-icons/hi';
import './MovieDetail.scss';

const MovieDetail = () => {
  const { imdbID } = useParams();
  const dispatch = useDispatch();

  const data = useSelector(getSelectedMovieOrShow);

  useEffect(() => {
    dispatch(fetchAsyncMovieOrShowDetail(imdbID));
  }, [dispatch, imdbID]);

  return (
    <div className="movie-section">
      <div className="section-left">
        <div className="movie-title">{data.Title}</div>
        <div className="movie-rating">
          <span>
            IMDB Rating <HiStar /> : {data.imdbRating}
          </span>
          <span>
            IMDB Votes <HiThumbUp className="icon" /> : {data.imdbVotes}
          </span>
          <span>
            Runtime <HiClock className="icon" /> : {data.Runtime}
          </span>
          <span>
            Year <HiCalendar className="icon" /> : {data.Year}
          </span>
        </div>
        <div className="movie-plot">{data.Plot}</div>
        <div className="movie-info">
          <div>
            <span>Director</span>
            <span>{data.Director}</span>
          </div>
          <div>
            <span>Stars</span>
            <span>{data.Actors}</span>
          </div>
          <div>
            <span>Genres</span>
            <span>{data.Genre}</span>
          </div>
          <div>
            <span>Director</span>
            <span>{data.Language}</span>
          </div>
          <div>
            <span>Awards</span>
            <span>{data.Awards}</span>
          </div>
        </div>
      </div>
      <div className="section-right">
        <img src={data.Poster} alt="data.Title" />
      </div>
    </div>
  );
};

export default MovieDetail;
