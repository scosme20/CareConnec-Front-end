// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { FormContainer } from '../../../styles/LoginStyles';
import GlobalStyles from '../../../styles/Global.styles';





export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await dispatch(login(email, password));
      navigate('/overview');
      logger.log('User logged in successfully.');
    } catch (error) {
      logger.error(`Login failed: ${error}`);
    }
  };

  return (
    
    <FormContainer onSubmit={handleLogin}>
      <GlobalStyles />
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




