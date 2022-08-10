<<<<<<< HEAD
import NavBar from './components/NavigationBar';
import MainContainerC from './components/Body';
import { AppContainer } from './styled/App.styles';
// import { Heding } from './styled-components/Navigation.style';
=======
/* eslint-disable no-unused-vars */
import AppContainers from './styled/App.styled';
import Forms from './components/index.components';

const { Login, Register } = Forms;
>>>>>>> 830b12df08e63ab0fbf3a9ec207e0f2bd21d84a7

function App() {
  return (
    <AppContainers>
<<<<<<< HEAD
      <NavBar />
      <MainContainerC></MainContainerC>
=======
      <Login />
      {/* <Register /> */}
>>>>>>> 830b12df08e63ab0fbf3a9ec207e0f2bd21d84a7
    </AppContainers>
  );
}

export default App;
