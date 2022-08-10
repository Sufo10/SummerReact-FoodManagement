import FormComponents from '../styled/Form.styled';

const { CommonContainer, FormContainer, Heading2, Input, Button, P, A } =
  FormComponents;

function Login() {
  return (
    <CommonContainer>
      <Heading2>Login to WeFeed</Heading2>
      <FormContainer>
        <Input placeholder='Email' type='email' />
        <Input placeholder='Password' type='password' />
        <Button>Login</Button>
      </FormContainer>
      <P>
        Havenot Registered Yet! <A href='#'>Register Now!</A>
      </P>
    </CommonContainer>
  );
}

export default Login;
