import React from 'react';

import { Head } from '../Head';
import { Section } from '../Section';
import { Row } from '../Row';

import { StyledTable } from './styled';

const Table = (props) => {
  const { verbs } = props;

  return (
    <StyledTable>
      <Head />
      {verbs.map((verb, index) => (
        <Row key={verb.infinitive || index} {...verb} />
      ))}
      {/* <Section>
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
      </Section> */}
    </StyledTable>
  );
};

export { Table };
