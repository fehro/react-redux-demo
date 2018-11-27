// @flow

import type { Movie } from 'types/movie.d';

import {
  LOAD_MOVIES,
  LOAD_MOVIES_SUCCESS,
  LOAD_MOVIES_ERROR,
} from './constants';

export function loadMoviesAction() {
  return {
    type: LOAD_MOVIES,
  };
}

export function loadMoviesSuccessAction(movies: Array<Movie>) {
  return {
    type: LOAD_MOVIES_SUCCESS,
    movies,
  };
}

export function loadMoviesErrorAction(error: string) {
  return {
    type: LOAD_MOVIES_ERROR,
    error,
  };
}
