// @flow

import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import MovieListPage from 'containers/MovieListPage/Loadable';

import GlobalStyle from '../../global-styles';

import * as Styles from './styled';

export default function App() {
  return (
    <Styles.AppWrapper>
      <Switch>
        <Route exact path="/Movies" component={MovieListPage} />
        <Redirect from="/" to="/Movies" />
      </Switch>
      <GlobalStyle />
    </Styles.AppWrapper>
  );
}
