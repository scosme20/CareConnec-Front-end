import styled from 'styled-components';

export const HomelessContainer = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 8px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 5px;
  }
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 300px;
  height: 20px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 8px;
  }

  @media (max-width: 480px) {
    width: 95%;
    padding: 6px;
  }
`;

export const Button = styled.button`
  background-color: #E8EDDF;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  padding: 10px;

  &:not(:last-child) {
    margin-right: 10px;
  }

  @media (max-width: 768px) {
    padding: 8px;
  }

  @media (max-width: 480px) {
    padding: 6px;
    font-size: 0.8em;
  }
`;

export const HomelessItem = styled.div`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    padding: 8px;
  }

  @media (max-width: 480px) {
    padding: 6px;
  }
`;

export const HomelessDetails = styled.div`
  margin-bottom: 10px;

  @media (max-width: 768px) {
    margin-bottom: 8px;
  }

  @media (max-width: 480px) {
    margin-bottom: 6px;
  }
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 768px) {
    gap: 8px;
  }

  @media (max-width: 480px) {
    gap: 5px;
  }
`;

export const ListItem = styled.div`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;

  @media (max-width: 768px) {
    padding: 8px;
  }

  @media (max-width: 480px) {
    padding: 6px;
  }
`;
