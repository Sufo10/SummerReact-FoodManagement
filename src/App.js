import NavBar from './components/NavigationBar';
import MainContainerC from './components/Body';
import { AppContainer } from './styled/App.styles';
// import { Heding } from './styled-components/Navigation.style';

function App() {
  return (
    <AppContainer>
      <NavBar />
      <MainContainerC></MainContainerC>
    </AppContainer>
  );
}

export default App;
