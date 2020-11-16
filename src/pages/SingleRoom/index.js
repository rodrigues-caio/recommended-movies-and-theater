import React from 'react';
import { FiLogIn, FiUserPlus } from 'react-icons/fi';

import { Container, Content, Background } from './styles';
import { Link } from 'react-router-dom';

const SingleRoom = () => {
  return (
    <Container>
      <Content>
        <h1>
          Seja bem vindo(a) ao <span>Theater&Movie</span>, compartilhe suas
          experiências com <span>filmes</span> e <span>peças de Teatro</span>{' '}
          que você já assistiu!
        </h1>

        <Link to="register">{<FiUserPlus size={16} />} Cadastrar</Link>

        <Link to="/logon">{<FiLogIn size={16} color={'#000'} />} Entrar</Link>

        <h3>Aproveite e confira outras recomendações.</h3>
      </Content>

      <Background />
    </Container>
  );
};

export default SingleRoom;
