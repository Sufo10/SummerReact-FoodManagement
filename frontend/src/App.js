/* eslint-disable no-unused-vars */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppContainer from './styled/App.styled';
import Forms from './components/index.components';
import Homepage from './pages/homepage';

const { Login, Register, NavBar, MainContainerC } = Forms;

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <AppContainer>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/food' element={<MainContainerC />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;
