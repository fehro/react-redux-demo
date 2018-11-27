// @flow

import React from 'react';

import Movie from 'components/Movie';

import type { Movie as MovieType } from 'types/movie.d';

type Props = {
  movies: Array<MovieType>,
};

function MoviesList({ movies }: Props) {
  return movies.map(m => <Movie key={m.id} movie={m} />);
}

export default MoviesList;
