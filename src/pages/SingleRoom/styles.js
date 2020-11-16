import styled from 'styled-components';
import { shade } from 'polished';

import backgroundImg from '../../assets/backgroundImg.jpg';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  place-content: center;

  width: 100%;
  max-width: 700px;

  h1 {
    color: #F4D2D2;
    font-weight: 500;
    margin: 80px 80px;
    align-items: center;
    justify-items: center;
  }

  h3 {
    padding: 50px 20px;
    margin-top: 50px;
    color: #F4D2D2;
    font-size: 20px;
  }

  span {
    color: #ED6F6F;
  }

  a {
    display: grid;
    grid-template-columns: 30px 1fr;
    align-items: center;
    background: #951919;
    height: 46px;
    border-radius: 15px;
    border: 0;
    text-decoration: none;
    text-align: center;
    width: 40%;
    margin-top: 16px;
    color: #FFF;
    font-size: 18px;
    font-weight: 500;
    transition: background-color 0.2s;
  

    &:hover {
      background: ${shade(0.2, '#951919')};
    }

    svg {
      margin-right: 5px;
    }

    > button {
      background: #FFF;
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center;
  background-size: cover;
`;
