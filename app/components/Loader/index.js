// @flow

import * as React from 'react';

import * as Styles from './styled';

type Props = {
  children: React.Node,
};

function Error({ children }: Props) {
  return <Styles.Loader>{children}</Styles.Loader>;
}

export default Error;
