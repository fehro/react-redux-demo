// @flow

import React from 'react';

import type { Movie as MovieType } from 'types/movie.d';

import * as Styles from './styled';

type Props = {
  movie: MovieType,
};

function Movie({ movie }: Props) {
  return (
    <Styles.MovieWrapper>
      <div>
        <Styles.Title>{movie.title}</Styles.Title>
        <Styles.ReleaseYear>Released {movie.releaseYear}</Styles.ReleaseYear>
      </div>
    </Styles.MovieWrapper>
  );
}

export default Movie;
