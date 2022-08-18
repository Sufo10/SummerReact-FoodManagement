import styled from 'styled-components';
import FormComponents from './Form.styled';

const { CommonContainer, FormContainer, Heading2, Input, Button, P, A } =
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
  font-size: 0.8em;
  color: red;
  margin-bottom: -2px;
  margin-top: 2px;
`;

const Error = styled.div`
  align-items: center;
  font-size: 0.75em;
  color: red;
  margin-bottom: 4px;
  padding-bottom: 2px;
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
};
