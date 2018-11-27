// @flow

import {
  put,
  all,
  call,
  takeLatest,
  Generator,
  Yield,
  Return,
  Next,
} from 'redux-saga/effects';

import { LOAD_MOVIES } from './constants';

import { loadMoviesSuccessAction, loadMoviesErrorAction } from './actions';

function* loadMoviesSaga({ api }): Generator<void, void, void> {
  const response = yield call(api.loadMovies);
  if (response.error) {
    yield put(loadMoviesErrorAction(response.error));
    return;
  }
  yield put(loadMoviesSuccessAction(response.data.movies));
}

export default function* moviesListSaga(): Generator<Yield, Return, Next> {
  yield all([takeLatest(LOAD_MOVIES, loadMoviesSaga)]);
}
