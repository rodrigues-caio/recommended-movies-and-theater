import styled from 'styled-components';
import { shade } from 'polished';

import BackgroundLogin from '../../assets/backgroundLogin.jpg';

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

  div {
    svg {
      margin-right: 10px;
    }
  }
  

  form {
    margin: 80px 0px 30px 0px;
    width: 340px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    input {
      background: #951919;
      height: 46px;
      border: 1px solid #695555;
      border-top: none;
      border-left: none;
      border-right: none;
      background: transparent;
      border-radius: 15px;
      text-align: center;
      width: 100%;
      color: #FFF;
      margin-top: 16px;
      opacity: 80%;

      &::placeholder {
        color: #EED9D9;
      }
    }

    button {
      height: 46px;
      margin-top: 16px;
      width: 100%;
      border-radius: 15px;
      background: #951919;
      border: none;
      color: #FFF;
      font-weight: 500;
      transition: background-color 0.2s;

      &:hover {
        background: ${shade(0.2, '#951919')};
      }
    }
  }

  a {
    text-decoration: none;
    color: #FFF;
    font-size: 15px;

    svg {
      margin-right: 5px;
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${BackgroundLogin}) no-repeat center;
  background-size: cover;
`;

