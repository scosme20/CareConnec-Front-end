import React from 'react';
import { Login } from './login/login';
import { Register } from './register/register';
import { HomeContainer, AuthContainer } from '../../styles/HomeStyles';

export const Home = () => {
  return (
    <HomeContainer>
      <h1>Entre para essa Causa</h1>
      <AuthContainer>
        <Login />
        <Register />
      </AuthContainer>
    </HomeContainer>
  );
};

