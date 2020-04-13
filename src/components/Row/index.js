import React from 'react';

import { StyledRow, StyledColumn } from './styled';

const Row = (props) => {
  const { data, head = false } = props;
  const { infinitive, simple, participle, translation } = data;

  return (
    <StyledRow>
      <StyledColumn head={head}>{infinitive}</StyledColumn>
      <StyledColumn head={head}>{simple}</StyledColumn>
      <StyledColumn head={head}>{participle}</StyledColumn>
      <StyledColumn head={head}>{translation}</StyledColumn>
    </StyledRow>
  );
};

export { Row };
