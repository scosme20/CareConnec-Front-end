import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  width: 100%;
  background-color: #333533;
`;

export const Title = styled.h1`
  font-family: "Mohave", sans-serif;
  font-optical-sizing: auto;
  font-weight: weight;
  font-style: normal;
  font-size: 30px;
  color: #F5CB5C;
  text-shadow: 1px 1px 8px #E8EDDF90;
  font-size: 70px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  padding: 10px;
  margin: 10px 0;
  width: 300px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-family: "Kanit", sans-serif;
  font-weight: 300;
  font-style: normal;
  font-size: 14px;
  background-color: #E8EDDF;
`;

export const Button = styled.button`
  padding: 10px;
  padding-left: 30px;
  padding-right: 30px;
  background-color: #CFDBD5;
  color: #333533;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  font-family: "Kanit", sans-serif;
  font-weight: 300;
  font-style: normal;
  font-size: 16px;

  &:first-of-type {
    background-color: #333533;
    color: #CFDBD5;
  }

  &:last-of-type {
    background-color: #CFDBD5;
    color: #333533;
  }
`;

