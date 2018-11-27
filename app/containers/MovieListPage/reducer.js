// @flow

import { fromJS } from 'immutable';

import {
  LOAD_MOVIES,
  LOAD_MOVIES_SUCCESS,
  LOAD_MOVIES_ERROR,
} from './constants';

export const initialState = fromJS({
  loading: false,
  error: null,
  movies: null,
});

function moviesListReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_MOVIES:
      return state
        .set('loading', true)
        .set('error', null)
        .set('movies', null);
    case LOAD_MOVIES_SUCCESS:
      return state
        .set('loading', false)
        .set('error', null)
        .set('movies', action.movies);
    case LOAD_MOVIES_ERROR:
      return state
        .set('loading', false)
        .set('error', action.error)
        .set('movies', null);
    default:
      return state;
  }
}

export default moviesListReducer;
