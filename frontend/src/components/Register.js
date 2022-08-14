/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
import { useState } from 'react';
import RegisterFormComponents from '../styled/Register.styled';
import useRegister from '../customHooks/useRegister';

const {
  CommonContainer,
  H2,
  RFormContainer,
  Input,
  Message,
  Btn,
  Paragraph,
  A,
  Error,
} = RegisterFormComponents;

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [conPass, setConPass] = useState('');
  const [message, setMessage] = useState('');
  const { register, error } = useRegister();

  const handleSubmit = async e => {
    e.preventDefault();
    password === conPass
      ? setMessage('')
      : setMessage('Confirm password must be same as password');

    const user = { name, email, password };
    await register(user);
  };

  return (
    <CommonContainer>
      <H2>Register in WeFeed</H2>
      <RFormContainer onSubmit={handleSubmit}>
        <Input
          placeholder='Name'
          type='text'
          onChange={e => setName(e.target.value)}
        />
        {error.name && <Error>{error.name}</Error>}
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
        {error.password && <Error>{error.password}</Error>}
        <Input
          placeholder='Confirm Password'
          type='password'
          onChange={e => setConPass(e.target.value)}
        />
        <Message>{message}</Message>
        <Btn>Register</Btn>
      </RFormContainer>
      <Paragraph>
        Already Registered! <A to='/login'>Log In!</A>
      </Paragraph>
    </CommonContainer>
  );
}

export default Register;
