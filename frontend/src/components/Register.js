/* eslint-disable no-unused-expressions */
import { useState } from 'react';
import useRegister from '../customHooks/useRegister';
import RegisterFormComponents from '../styled/Register.styled';

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
  RegisterWrapper,
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

  // const check = () => {
  //   if (name.length >= 2) {
  //     document.querySelector('#phone').innerHTML = '';
  //   }
  //   if (password.length >= 7) {
  //     document.querySelector('#password').innerHTML = '';
  //   }
  // };

  return (
    <RegisterWrapper>
      <CommonContainer>
        <H2>Register in WeFeed</H2>
        <RFormContainer onSubmit={handleSubmit}>
          <Input
            placeholder='Name'
            value={name}
            type='text'
            onChange={e => {
              setName(e.target.value);
            }}
          />
          <Error id='name'>{error.name}</Error>
          <Input
            placeholder='Email'
            value={email}
            type='email'
            onChange={e => setEmail(e.target.value)}
          />
          <Input
            placeholder='Password'
            type='password'
            onChange={e => {
              setPassword(e.target.value);
            }}
          />
          <Error id='password'>{error.password}</Error>
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
    </RegisterWrapper>
  );
}

export default Register;
