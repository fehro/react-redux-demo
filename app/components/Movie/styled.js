// @flow

import styled from 'styled-components';

export const MovieWrapper = styled.div`
  width: 50%;
  display: inline-block;
  padding: 10px;

  @media (max-width: 900px) {
    width: 100%;
  }

  > div {
    background: white;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);
    border-radius: 4px;
  }
`;

export const Title = styled.h1`
  color: #232323;
  margin: 0;
  flex: 1;
`;

export const ReleaseYear = styled.span`
  width: 120px;
  text-align: right;
  color: #232323;
`;
