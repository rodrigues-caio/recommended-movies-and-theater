import styled from 'styled-components';

import BackgroundRegister from '../../assets/backgroundSignUp01.jpg';

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
    display: flex;
    border: 1px solid #FFF;
    border-radius: 50%;
    border-color: #695555;
    padding: 40px 20px;
    color: #951919;
    margin-bottom: 50px;
  }

  form {
    display: flex;
    flex-direction: column;

    input {
    margin-top: 16px;
    width: 100%;
    padding: 10px 50px;
    background: transparent;
    border-color: #695555;
    border-radius: 15px;
    border-top: none;
    border-right: none;
    border-left: none;
    color: #FFF;


    &::placeholder {
      color: #951919;
    }
  }

  button {
      width: 100%;
      padding: 10px 50px;
      margin-top: 20px;
      border-radius: 15px;
      color: #FFF;
      font-weight: 500;
      font-size: 20px;
      background: #951919;
      border: none;
      box-shadow: 5px 10px #000a;
    }
}

  a {
    margin-top: 40px;
    text-decoration: none;
    color: #FFF;
    font-size: 18px;

    svg {
      margin-right: 5px;
    }
  }
  
`;

export const Background = styled.div`
  flex: 1;
  background: url(${BackgroundRegister}) no-repeat center;
  background-size: cover;
`;
