// @flow

import React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import type { Movie } from 'types/movie.d';

import Loader from 'components/Loader';
import Centered from 'components/Centered';
import Error from 'components/Error';
import MoviesList from 'components/MoviesList';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import {
  makeSelectMovies,
  makeSelectLoading,
  makeSelectError,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import { loadMoviesAction } from './actions';

import * as Styles from './styled';

type Props = {
  loading: boolean,
  error: string,
  movies: Array<Movie>,
  loadMovies: () => {},
};

/* eslint-disable react/prefer-stateless-function */
export class MoviesListPage extends React.Component<Props> {
  componentDidMount() {
    const { loadMovies } = this.props;
    loadMovies();
  }

  renderMoviesSection() {
    const { movies, loadMovies, loading, error } = this.props;

    if (loading) return <Loader>Loading Movies - Please Wait</Loader>;

    if (error) return <Error>{error.message}</Error>;

    return movies && <MoviesList movies={movies} onRefresh={loadMovies} />;
  }

  renderControlsSection() {
    const { loadMovies } = this.props;
    return (
      <Styles.ControlSection>
        <Styles.RefreshButton onClick={loadMovies}>
          Refresh
        </Styles.RefreshButton>
      </Styles.ControlSection>
    );
  }

  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>Movies List</title>
        </Helmet>
        <Centered>
          {this.renderControlsSection()}
          {this.renderMoviesSection()}
        </Centered>
      </React.Fragment>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  movies: makeSelectMovies(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

function mapDispatchToProps(dispatch) {
  return {
    loadMovies: () => dispatch(loadMoviesAction()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'moviesList', reducer });
const withSaga = injectSaga({ key: 'moviesList', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(MoviesListPage);
