/* eslint-disable no-unused-vars */
import AppContainer from './styled/App.styled';
import Forms from './components/index.components';

const { Login, Register } = Forms;

function App() {
  return (
    <AppContainer>
      <Login />
      {/* <Register /> */}
    </AppContainer>
  );
}

export default App;
