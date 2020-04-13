import React from 'react';

import { Row } from '../Row';

import { StyledTable } from './styled';

const Table = () => {
  return (
    <StyledTable>
      <Row
        data={{
          infinitive: 'come',
          simple: 'came',
          participle: 'came',
          translation: 'приходить',
        }}
      />
      <Row
        data={{
          infinitive: 'arise',
          simple: 'arose',
          participle: 'arisen',
          translation: 'возникать',
        }}
      />
    </StyledTable>
  );
};

export { Table };
