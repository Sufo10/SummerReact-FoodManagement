/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    if (password === conPass) {
      setMessage('');
    } else {
      setMessage('Confirm password must be same as password');
      return;
    };
    const user = { name, email, password };
    const res = await register(user);
    console.log(res);
    if (res.status === 200) navigate('/login');
  };

<<<<<<< HEAD
  // const check = () => {
  //   if (name.length >= 2) {
  //     document.querySelector('#phone').innerHTML = '';
  //   }
  //   if (password.length >= 7) {
  //     document.querySelector('#password').innerHTML = '';
  //   }
  // };
=======
  const check = () => {
    if (name.length >= 2) {
      error.name = '';
    }
    if (password.length >= 7) {
      error.password = '';
    }
    if (conPass.length === (password.length - 1)) {
      setMessage('');
    }
  };
>>>>>>> 662c4b2565efcfa1bcb128a66f04c27587bcc115

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
<<<<<<< HEAD
          <Error id='name'>{error.name}</Error>
=======
          <Error>{error.name}</Error>
>>>>>>> 662c4b2565efcfa1bcb128a66f04c27587bcc115
          <Input
            placeholder='Email'
            value={email}
            type='email'
            onChange={e => setEmail(e.target.value)}
          />
          {error.email && <Error>{error.email}</Error>}
          <Input
            placeholder='Password'
            type='password'
            onChange={e => {
              setPassword(e.target.value);
            }}
          />
<<<<<<< HEAD
          <Error id='password'>{error.password}</Error>
=======
          <Error>{error.password}</Error>
>>>>>>> 662c4b2565efcfa1bcb128a66f04c27587bcc115
          <Input
            placeholder='Confirm Password'
            type='password'
            onChange={e => {
              setConPass(e.target.value);
              check();
            }}
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
