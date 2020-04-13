import React from 'react';

import { Title } from '../Title';
import { Table } from '../Table';

import { StyledWrapper, GlobalStyle } from './styled';

const App = (props) => {
  const { verbs } = props;

  return (
    <StyledWrapper>
      <GlobalStyle />
      <Title />
      <Table verbs={verbs} />
    </StyledWrapper>
  );
};

export { App };
