import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import movieApi from '../../apis/MovieApi';
import { APIKey } from '../../apis/MovieApiKey';

export const fetchAsyncMovies = createAsyncThunk(
  'movies/fetchAsyncMovies',
  async (term = 'Cars') => {
    const response = await movieApi.get(
      `?apikey=${APIKey}&s=${term}&type=movie`
    );
    return response.data;
  }
);

export const fetchAsyncShows = createAsyncThunk(
  'movies/fetchAsyncShows',
  async (term = 'Cars') => {
    const response = await movieApi.get(
      `?apikey=${APIKey}&s=${term}&type=series`
    );
    return response.data;
  }
);

export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
  'movies/fetchAsyncMovieOrShowDetail',
  async (id) => {
    const response = await movieApi.get(`?apikey=${APIKey}&i=${id}&Plot=full`);
    return response.data;
  }
);

const initialState = {
  movies: {},
  shows: {},
  selectedMovieOrShow: {},
};

export const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    // addMovies: (state, { payload }) => {
    //   state.movies = payload;
    // },
    removeSelectedMovieOrShow: (state) => {
      state.selectedMovieOrShow = {};
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log('pending');
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log('fetched successfully');
      return { ...state, movies: payload };
    },
    [fetchAsyncMovies.rejected]: (state, { payload }) => {
      console.log('Rejected');
    },
    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
      return { ...state, shows: payload };
    },
    [fetchAsyncMovieOrShowDetail.fulfilled]: (state, { payload }) => {
      return { ...state, selectedMovieOrShow: payload };
    },
  },
});

// export const { addMovies } = movieSlice.actions;
export const { removeSelectedMovieOrShow } = movieSlice.actions;
export const getAllShows = (state) => state.movies.shows;
export const getSelectedMovieOrShow = (state) =>
  state.movies.selectedMovieOrShow;
export const getAllMovies = (state) => state.movies.movies;
export default movieSlice.reducer;
