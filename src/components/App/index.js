import React from 'react';

import { Table } from '../Table';

import { StyledWrapper, GlobalStyle } from './styled';

const App = () => {
  return (
    <StyledWrapper>
      <GlobalStyle />
      <Table />
    </StyledWrapper>
  );
};

export { App };
