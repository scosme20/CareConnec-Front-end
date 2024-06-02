import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../store/actions/authActions';
import { register } from '../../store/actions/authActions';
import { FormContainer } from '../../styles/formContsiner';
import { HomeContainer } from '../../styles/formContsiner'; 
import { AuthContainer } from '../../styles/formContsiner'; 
import { motion } from 'framer-motion'

export const Login = ({ switchToRegister }) => { 
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
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }} 
      transition={{ duration: 0.5 }}
    >
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
        <p onClick={switchToRegister}>Create an Account</p> {}
      </FormContainer>
    </motion.div>
  );
};

export const Register = ({ switchToLogin }) => { 
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
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }} 
      transition={{ duration: 0.5 }}
    >
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
        <p onClick={switchToLogin}>Already have an account? Log in</p> {}
      </FormContainer>
    </motion.div>
  );
};

export const Home = () => {
  const [showLogin, setShowLogin] = useState(true); 

  const switchToRegister = () => setShowLogin(false); 
  const switchToLogin = () => setShowLogin(true); 

  return (
    <HomeContainer>
      <h1>Entre para essa Causa</h1>
      <AuthContainer>
        {showLogin ? <Login switchToRegister={switchToRegister} /> : <Register switchToLogin={switchToLogin} />} {}
      </AuthContainer>
    </HomeContainer>
  );
};



