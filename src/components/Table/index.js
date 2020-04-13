import React from 'react';

import { Head } from '../Head';
import { Section } from '../Section';
import { Row } from '../Row';

import { StyledTable } from './styled';

const Table = () => {
  return (
    <StyledTable>
      <Head />
      <Section>
        <Row
          data={{
            infinitive: 'arise',
            simple: 'arose',
            participle: 'arisen',
            translation: 'возникать',
          }}
        />
      </Section>
      <Section>
        <Row
          data={{
            infinitive: 'come',
            simple: 'came',
            participle: 'came',
            translation: 'приходить',
          }}
        />
      </Section>
    </StyledTable>
  );
};

export { Table };
