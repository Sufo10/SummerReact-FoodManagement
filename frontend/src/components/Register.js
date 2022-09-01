/* eslint-disable no-extra-boolean-cast */
/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-return */
/* eslint-disable no-unused-expressions */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import validate from '../helpers/validateInput';
import useRegister from '../customHooks/useRegister';
import RegisterFormComponents from '../styled/Register.styled';

const {
  CommonContainer,
  H2,
  RFormContainer,
  Input,
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
  const [message, setMessage] = useState({
    name: '',
    email: '',
    pass: '',
    conP: '',
  });
  const [disable, setDisable] = useState(false);
  const { register, error } = useRegister();
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    const validation = validate({ name, email, password, conPass });
    if (Object.keys(validation).length !== 0) {
      setMessage(validation);
      return;
    }
    const user = { name, email, password };
    const { data, status } = await register(user);
    if (data && status === 200) navigate('/login');
  };

  const checkPassword = e => {
    const pass = e.target.value;
    setPassword(e.target.value);
    if (pass.length < 8) {
      setDisable(true);
      setMessage({ pass: 'Password should be at least 8 characters' });
    } else {
      setDisable(false);
      setMessage({ pass: '', conP: '' });
    }
  };

  const checkConPassword = e => {
    const confPass = e.target.value;
    setConPass(e.target.value);
    if (password !== confPass) {
      setDisable(true);
      setMessage({ conP: 'Confirm password must be same as password' });
    } else {
      setDisable(false);
      setMessage({ pass: '', conP: '' });
    }
  };

  return (
    <RegisterWrapper>
      <CommonContainer>
        <H2>Register in WeFeed</H2>
        <RFormContainer onSubmit={handleSubmit}>
          <Input
            placeholder='Name'
            value={name}
            type='text'
            onChange={e => setName(e.target.value)}
          />
          {message.name ? (
            <Error>{message.name}</Error>
          ) : (
            <Error>{error.name}</Error>
          )}

          <Input
            placeholder='Email'
            value={email}
            type='email'
            onChange={e => setEmail(e.target.value)}
          />
          {message.email ? (
            <Error>{message.email}</Error>
          ) : (
            <Error>{error.email}</Error>
          )}

          <Input
            placeholder='Password'
            value={password}
            type='password'
            onChange={checkPassword}
          />
          <Error>{message.pass}</Error>

          <Input
            placeholder='Confirm Password'
            value={conPass}
            type='password'
            onChange={checkConPassword}
          />
          <Error>{message.conP}</Error>

          <Btn disabled={disable}>Register</Btn>
        </RFormContainer>
        <Paragraph>
          Already Registered! <A to='/login'>Log In!</A>
        </Paragraph>
      </CommonContainer>
    </RegisterWrapper>
  );
}

export default Register;
