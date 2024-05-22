import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { logger } from '../../../logs/logger';
import { FormContainer } from '../../../styles/LoginStyles';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    try {
      console.log('Login', { email, password });

      navigate('/overview');
      logger.log('User logged in successfully.');
    } catch (error) {
      logger.error(`Login failed: ${error}`);
    }
  };

  return (
    <FormContainer onSubmit={handleLogin}>
      <h2>Login</h2>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Log In</button>
    </FormContainer>
  );
};


