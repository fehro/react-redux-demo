// @flow

import apisauce from 'apisauce';

const create = () => {
  const api = apisauce.create({});

  api.addResponseTransform(response => {
    let error: Error;
    if (response.status === 400) {
      error = response.data;
    } else if (response.problem !== null) {
      error = {
        message: response.problem,
        original: response.data && response.data.message,
      };
    }
    response.error = error;
  });

  const loadMovies = () =>
    api.get('https://facebook.github.io/react-native/movies.json');

  return { loadMovies };
};

export default {
  create,
};
