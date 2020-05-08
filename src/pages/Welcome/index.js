import React from 'react';
import { FiLogIn, FiUserPlus } from 'react-icons/fi';

import { Container, Content, Background } from './styles';
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <Container>
      <Content>
        <h1>Seja bem vindo(a) ao ***, compartilhe suas experiências com <span>Filmes</span> e <span>peças de Teatro</span> que você já assistiu!</h1>
      
        <Link to='register'>
          {<FiUserPlus size={16}/>}  Cadastrar
        </Link>

        <Link to='/logon'>
          {<FiLogIn size={16} />} Entrar
        </Link>

        <h3>Aproveite e confira outras recomendações.</h3>

      </Content>

      <Background />
    </Container>
  )
};

export default Welcome;