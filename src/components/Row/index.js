import React from 'react';

import { StyledRow, StyledColumn } from './styled';

const Row = (props) => {
  const { data } = props;
  const { infinitive, simple, participle, translation } = data;

  return (
    <StyledRow>
      <StyledColumn>{infinitive}</StyledColumn>
      <StyledColumn>{simple}</StyledColumn>
      <StyledColumn>{participle}</StyledColumn>
      <StyledColumn>{translation}</StyledColumn>
    </StyledRow>
  );
};

export { Row };
