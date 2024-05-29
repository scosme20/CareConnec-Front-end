import React from 'react';
import { Login } from './login/login';
import { Register } from './register/register';
import { HomeContainer, AuthContainer, BackgroundImage, Overlay } from '../../styles/HomeStyles';
import backgroundImage from '../../assets/backgroundImage.jpg';


export const Home = () => {
  return (
    <HomeContainer>
      <BackgroundImage src={backgroundImage} />
      <Overlay />
      <h1>Entre para essa Causa</h1>
      <AuthContainer>
        <Login />
        <Register />
      </AuthContainer>
    </HomeContainer>
  );
};

