import React from 'react';
import { Login } from './login/login';
import { Register } from './register/register';
import { HomeContainer, AuthContainer } from '../../styles/HomeStyles';

export const Home = () => {
  const [showLogin, setShowLogin] = useState(true); 

  const switchToRegister = () => setShowLogin(false); 
  const switchToLogin = () => setShowLogin(true); 

  return (
    <HomeContainer>
      <BackgroundImage src={backgroundImage} />
      <Overlay />
      <h1>Entre para essa Causa</h1>
      <AuthContainer>
        {showLogin ? <Login switchToRegister={switchToRegister} /> : <Register switchToLogin={switchToLogin} />} {}
      </AuthContainer>
    </HomeContainer>
  );
};



