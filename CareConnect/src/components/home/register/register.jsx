import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { FormContainer } from '../../../styles/RegisterStyles';
import { motion } from 'framer-motion'; 

export const Register = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      logger.log('Registration failed: passwords do not match.');
      return;
    }

    try {
      await dispatch(register(username, email, password));
      navigate('/overview');
      logger.log('User registered successfully.');
    } catch (error) {
      logger.error(`Registration failed: ${error}`);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <FormContainer onSubmit={handleRegister}>
        <h2>Register</h2>
        <div>
          <label>Username:</label>
          <motion.input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            whileHover={{ scale: 1.05 }} 
            whileFocus={{ borderColor: '#4CAF50', scale: 1.05 }} 
          />
        </div>
        <div>
          <label>Email:</label>
          <motion.input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            whileHover={{ scale: 1.05 }} 
            whileFocus={{ borderColor: '#4CAF50', scale: 1.05 }} 
          />
        </div>
        <div>
          <label>Password:</label>
          <motion.input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            whileHover={{ scale: 1.05 }} 
            whileFocus={{ borderColor: '#4CAF50', scale: 1.05 }} 
          />
        </div>
        <div>
          <label>Confirm Password:</label>
          <motion.input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            whileHover={{ scale: 1.05 }} 
            whileFocus={{ borderColor: '#4CAF50', scale: 1.05 }} 
          />
        </div>
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }} 
          whileTap={{ scale: 0.95 }} 
        >
          Register
        </motion.button>
      </FormContainer>
    </motion.div>
  );
};




