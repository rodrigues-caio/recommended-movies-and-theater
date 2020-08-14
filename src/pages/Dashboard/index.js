import React from 'react';

import Button from '../../components/Button';
import Card from '../../components/Card';

import { Container, Header, Content, Cards } from './styles';

const Dashboard = () => {

  return (
    <Container>

      <Header>
        <h1>Olá, Caio</h1>

        <Button></Button>

      </Header>

      <Content>

        <Cards>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Cards>

      </Content>
      
    </Container>
  );
};

export default Dashboard;