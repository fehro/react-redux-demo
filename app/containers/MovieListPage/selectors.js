// @flow

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectMoviesListPageDomain = state =>
  state.get('moviesList', initialState);

const makeSelectLoading = () =>
  createSelector(selectMoviesListPageDomain, substate =>
    substate.get('loading'),
  );

const makeSelectError = () =>
  createSelector(selectMoviesListPageDomain, substate => substate.get('error'));

const makeSelectMovies = () =>
  createSelector(selectMoviesListPageDomain, substate =>
    substate.get('movies'),
  );

export { makeSelectLoading, makeSelectError, makeSelectMovies };
