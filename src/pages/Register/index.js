import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import { Container, Content, Background } from './styles';

const Register = () => {
  return (
    <Container>
      <Background />

      <Content>
        <div>
          <p>Add Foto</p>
        </div>

        <form>
          <input type="text" placeholder="Nome" ></input>
          <input type="email" placeholder="E-mail"></input>
          <input type="password" placeholder="Senha"></input>

          <button>Cadastrar</button>
        </form>

        <Link to="/">
          <FiArrowLeft size={16} />
          Voltar
        </Link>
      </Content>
    </Container>
  )
};

export default Register;