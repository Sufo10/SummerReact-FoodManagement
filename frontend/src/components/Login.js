/* eslint-disable no-unused-vars */
import { useState } from 'react';
import FormComponents from '../styled/Form.styled';

const {
  CommonContainer,
  FormContainer,
  Heading2,
  Input,
  Button,
  P,
  A,
  LoginWrapper,
  Error,
} = FormComponents;

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
  };
  return (
    <LoginWrapper>
      <CommonContainer>
        <Heading2>Login to WeFeed</Heading2>
        <FormContainer onSubmit={handleSubmit}>
          <Input
            placeholder='Email'
            type='email'
            onChange={e => setEmail(e.target.value)}
          />
          <Input
            placeholder='Password'
            type='password'
            onChange={e => setPassword(e.target.value)}
          />
          <Error></Error>
          <Button>Login</Button>
        </FormContainer>
        <P>
          Havenot Registered Yet! <A to='/register'>Register Now!</A>
        </P>
      </CommonContainer>
    </LoginWrapper>
  );
}

export default Login;
