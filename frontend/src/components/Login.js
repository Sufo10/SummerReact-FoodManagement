/* eslint-disable no-unused-vars */
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import useLogin from '../customHooks/useLogin';
import FormComponents from '../styled/Form.styled';
import validate from '../helpers/validateInput';
import { UserContext } from '../context/UserContext';

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
  const [message, setMessage] = useState({ email: '', pass: '' });
  const [disable, setDisable] = useState(false);
  const { login, error } = useLogin();
  const navigate = useNavigate();
  const { dispatch } = useContext(UserContext);

  const handleSubmit = async e => {
    e.preventDefault();
    const validation = validate({ email, password });
    if (
      Object.keys(validation) === ['email', 'pass'] &&
      Object.keys(validation).length !== 0
    ) {
      setMessage(validation);
      return;
    }
    const user = { email, password };
    const { data, status } = await login(user);
    console.log(data);
    if (data && status === 200) {
      dispatch({
        type: 'ADD_USER',
        payload: data.token,
      });
      localStorage.setItem('token', JSON.stringify(data.token));
      navigate('/food');
    }
  };

  const checkPassword = e => {
    const pass = e.target.value;
    setPassword(e.target.value);
    if (pass.length < 8) {
      setDisable(true);
      setMessage({ pass: 'Password should be at least 8 characters' });
    } else {
      setDisable(false);
      setMessage({});
    }
  };

  return (
    <LoginWrapper>
      <CommonContainer>
        <Heading2>Login to WeFeed</Heading2>
        <FormContainer onSubmit={handleSubmit}>
          <Input
            placeholder='Email'
            type='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          {message.email ? (
            <Error>{message.email}</Error>
          ) : (
            <Error>{error.email}</Error>
          )}
          <Input
            placeholder='Password'
            type='password'
            value={password}
            onChange={checkPassword}
          />
          {message.pass ? (
            <Error>{message.pass}</Error>
          ) : (
            <Error>{error.password}</Error>
          )}
          <Button disabled={disable}>Login</Button>
        </FormContainer>
        <P>
          Havenot Registered Yet! <A to='/register'>Register Now!</A>
        </P>
      </CommonContainer>
    </LoginWrapper>
  );
}

export default Login;
