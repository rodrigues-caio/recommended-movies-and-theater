import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 100vh;

  margin: 0 auto;
  background-color: #F0F8FF	;

  display: flex;
  flex-direction: column;

  border-left: 1px solid #EEE8AA	;
  border-right: 1px solid #EEE8AA	;
`;

export const Header = styled.header`
  width: 100%;
  height: 60px;

  margin: 0 auto;

  border-bottom: 1px solid #6B8E23;

  display: flex;
  align-items: center;
  justify-content: space-around;

  h1 {
    color: #6B8E23;
  }
`;

export const Content = styled.div`
  width: 100%;
  min-height: 80vh;

  margin: 0 auto;
  padding: 32px;

  display: flex;
`;

export const Cards = styled.section`
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  grid-gap: 20px;

  border: 1px solid #6B8E23;
  border-radius: 8px;

  padding: 32px;
`;