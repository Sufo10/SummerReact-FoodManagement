import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CommonContainer = styled.div`
  width: 400px;
  height: 380px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #eee;
  position: relative;
  color: #424341;
  font-family: 'Poppins', sans-serif;
  border-radius: 10px;

  @media (max-width: 425px) {
    width: 345px;
  }
`;

const CardWrapper = styled.div`
  margin: 0;
  background-color: lightgray;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const FormContainer = styled.form`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 425px) {
    width: 95%;
  }
`;

const Input = styled.input`
  width: 100%;
  margin-bottom: 10px;
  padding: 10px;
  font-family: 'Poppins', sans-serif;
  border: 1px solid #eee;
  border-radius: 8px;

  @media (max-width: 425px) {
    width: 95%;
  }
`;

const Button = styled.button`
  width: 40%;
  padding: 8px;
  margin-top: 20px;
  font-family: 'Poppins', sans-serif;
  background: #424341;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background: #620595;
    transform: scale(1.05);
    transition: all 250ms ease-in-out;
  }
`;

const Heading2 = styled.h2`
  font-family: 'Poppins', sans-serif;
  position: absolute;
  top: 25px;
`;

const P = styled.p`
  font-family: 'Poppins', sans-serif;
  position: absolute;
  bottom: 10%;
`;

const A = styled(Link)`
  color: #1d1d1d;

  &:hover {
    color: #620595;
    font-weight: bold;
    transition: all 450ms ease-in-out;
  }
`;

export default {
  CommonContainer,
  FormContainer,
  Heading2,
  Input,
  Button,
  P,
  A,
  CardWrapper,
};
