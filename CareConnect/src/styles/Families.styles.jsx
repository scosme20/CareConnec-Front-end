import styled from 'styled-components';

export const FamiliesContainer = styled.div`
  padding: 30px;
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  font-family: "Mohave", sans-serif;
  font-optical-sizing: auto;
  font-weight: weight;
  font-style: normal;
  font-size: 40px;
  color: #F5CB5C;
  text-shadow: 2px 2px 8px #FFFFFF;
  background-color: #E8EDDF;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-family: "Kanit", sans-serif;
  font-weight: 300;
  font-style: normal;
  font-size: 14px;
  background-color: #FFFFFF;
`;

export const Button = styled.button`
  padding: 10px;
  background-color: #F5CB5C;
  color: #FDFFFC;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  font-family: "Kanit", sans-serif;
  font-weight: 300;
  font-style: normal;
  font-size: 17px;

  &:not(:last-child) {
    margin-right: 10px;
  }
`;

export const FamilyItem = styled.div`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
`;

export const FamilyDetails = styled.div`
  margin-bottom: 10px;
`;
