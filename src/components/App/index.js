import React from 'react';

import { Title } from '../Title';
import { Table } from '../Table';

import { StyledWrapper, GlobalStyle } from './styled';

const App = () => {
  return (
    <StyledWrapper>
      <GlobalStyle />
      <Title />
      <Table />
    </StyledWrapper>
  );
};

export { App };
