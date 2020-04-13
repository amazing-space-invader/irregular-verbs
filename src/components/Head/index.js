import React from 'react';

import { Row } from '../Row';

const Head = () => {
  return (
    <div>
      <Row
        head
        data={{
          infinitive: 'infinitive',
          simple: 'simple past',
          participle: 'past participle',
          translation: 'перевод',
        }}
      />
    </div>
  );
};

export { Head };
