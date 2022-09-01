import styled from 'styled-components';
import img from '../img/wefeed_background.jpg';

const Title = styled.h1`
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 5em;
  text-align: left;
  padding-left: 100px;
  color: rgb(47, 79, 79);

  @media (max-width: 425px) {
    padding-left: 10px;
    font-size: 3em;
  }
`;

const HomeContainer = styled.div`
  background-image: url(${img});
  background-size: contain;
  background-repeat: no-repeat;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 600px) {
    background-image: none;
    background-color: lightgray;
  }
`;

const Paragraph = styled.p`
  width: 85%;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 28px;
  padding-left: 100px;
  color: rgb(47, 79, 79);
  text-align: left;

  @media (max-width: 600px) {
    font-size: 20px;
    padding-left: 10px;
  }
`;

const RightColmn = styled.div`
  padding-left: 350px;

  @media (min-width: 1300px) {
    padding-left: 450px;
  }

  @media (max-width: 600px) {
    padding-left: 10px;
  }
`;

export default {
  Title,
  Paragraph,
  HomeContainer,
  RightColmn,
};
