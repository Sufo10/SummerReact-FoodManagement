import styled from 'styled-components';
import FormComponents from './Form.styled';

const { CommonContainer, FormContainer, Heading2, Input, Button, P, A, Error } =
  FormComponents;

const RFormContainer = styled(FormContainer)`
  margin-top: 25px;
`;

const H2 = styled(Heading2)`
  top: 5px;
`;

const Paragraph = styled(P)`
  bottom: 2%;
`;

const Btn = styled(Button)`
  margin-top: 10px;
`;

const Message = styled.p`
  font-family: 'Poppins', sans-serif;
  font-size: 0.75em;
  color: red;
  margin-bottom: -2px;
  margin-top: 2px;
`;

const RegisterWrapper = styled.div`
  margin: 0;
  background-color: lightgray;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default {
  CommonContainer,
  RFormContainer,
  H2,
  Paragraph,
  Btn,
  Message,
  Input,
  A,
  Error,
  RegisterWrapper,
};
