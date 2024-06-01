import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { logger } from '../../../logs/logger';
import { FormContainer } from '../../../styles/RegisterStyles';
import api from '../../../services/apiService';

export const Register = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState(''); 
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      logger.log('Registration failed: passwords do not match.');
      return;
    }

    try {
      const response = await api.post('/auth/register', { username, email, password }); 
      console.log('Register', response.data);
      navigate('/overview');
      logger.log('User registered successfully.');
    } catch (error) {
      logger.error(`Registration failed: ${error}`);
    }
  };

  return (
    <FormContainer onSubmit={handleRegister}>
      <h2>Register</h2>
      <div>
        <label>Username:</label> 
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
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
      <div>
        <label>Confirm Password:</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Register</button>
    </FormContainer>
  );
};


