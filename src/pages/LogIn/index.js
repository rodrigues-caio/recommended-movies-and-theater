import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { RiMovie2Line, RiLiveLine, RiFilmLine } from 'react-icons/ri';


import { Container, Content, Background } from './styles';

const LogIn = () => {
  return (
    <Container>
      <Background />

      <Content>
        <div>
        <RiFilmLine size={60} />
        <RiLiveLine size={60}/>
        <RiMovie2Line size={60}/>
        </div>
        <form>
          <input type="text" placeholder="E-mail"/>
          <input type="password" placeholder="Senha" />

          <button type="button">Entrar</button>
        </form>

        <Link to="/">
          <FiArrowLeft size={16} />
          Voltar
        </Link>
      </Content>

    </Container>
  )
};

export default LogIn;