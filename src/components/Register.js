import styled from 'styled-components';
import FormComponents from '../styled/Form.styled';

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

function Register() {
  return (
    <CommonContainer>
      <H2>Register in WeFeed</H2>
      <RFormContainer>
        <Input placeholder='Name' type='text' />
        <Input placeholder='Email' type='email' />
        <Input placeholder='Password' type='password' />
        <Input placeholder='Confirm Password' type='password' />
        <Btn>Register</Btn>
      </RFormContainer>
      <Paragraph>
        Already Registered! <A href='#'>Log In!</A>
      </Paragraph>
    </CommonContainer>
  );
}

export default Register;
