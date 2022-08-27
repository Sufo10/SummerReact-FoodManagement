import styled from 'styled-components';
import img from '../assets/img/wefeed_background.jpg';

const Title = styled.h1`
  width: 100%;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 4em;
  text-align: center;
  color: rgb(47, 79, 79);
`;

const HomeContainer = styled.div`
  margin: 0;
  background-image: url(${img});
  background-size: contain;
  background-repeat: no-repeat;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
`;

const Input = styled.input.attrs(props => ({
  type: 'text',
  size: props.size || '1em',
}))`
  background: white;
  color: rgb(47, 79, 79);
  font-size: 1em;
  margin: 1em 0em 1em 1em;
  padding: 0.25em 1em;
  border: 2px solid gray;
  border-radius: 3px;
`;
const Button = styled.button`
  background: rgb(47, 79, 79);
  color: white;
  font-size: 1em;
  margin: 1em 1em 1 0em;
  padding: 0.25em 1em;
  border: 2px solid gray;
  border-radius: 3px;
`;

const Paragraph = styled.p`
  width: 50%;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 25px;
  padding-left: 115px;
  color: rgb(47, 79, 79);
`;

const DescriptionWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
`;

export default {
  Title,
  Paragraph,
  HomeContainer,
  DescriptionWrapper,
  Button,
  Input,
};
