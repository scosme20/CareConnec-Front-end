// Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { logger } from '../../../logs/logger';
import { FormContainer } from '../../../styles/LoginStyles';
import api from '../../../services/apiService'; 

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post('/auth/login', { email, password }); 
      console.log('Login', response.data);
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



