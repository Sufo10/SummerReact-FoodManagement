const validate = values => {
  const error = {};
  if (!values.name) {
    error.name = 'Name is required!';
  }
  if (!values.email) {
    error.email = 'Email is required!';
  }
  if (!values.password) {
    error.pass = 'Password is required!';
  }
  if (!values.conPass) {
    error.conP = 'Confirm Password is required!';
  }
  return error;
};

export default validate;
