// src/styles/volunteer.Style.jsx

import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const Title = styled.h1`
  font-size: 2em;
  margin-bottom: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  padding: 10px;
  margin: 5px 0;
  width: 300px;
  font-size: 1em;
`;

export const Button = styled.button`
  padding: 10px 20px;
  margin: 5px;
  font-size: 1em;
  cursor: pointer;

  &:first-of-type {
    background-color: #4CAF50;
    color: white;
  }

  &:last-of-type {
    background-color: #f44336;
    color: white;
  }
`;

