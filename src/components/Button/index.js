import React from 'react';

import { Container } from './styles';

const Button = (props) => {
  return (
    <Container>
      { props.name || 'Clique aqui' }
    </Container>
  );
};

export default Button;
