/* eslint-disable no-unused-vars */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavigationBar';
import MainContainerC from './components/Body';
import AppContainer from './styled/App.styled';
import Forms from './components/index.components';

const { Login, Register } = Forms;

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <AppContainer>
        <Routes>
          {/* <Route path='/home' element={<Login/>}/> */}
          <Route path='/food' element={<MainContainerC />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;
