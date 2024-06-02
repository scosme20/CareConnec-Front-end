import styled from 'styled-components';

export const BackgroundColor = styled.div`
  background-color: #E8EDDF; 
`

export const HostelContainer = styled.div`
  width: 100%;
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  background-color: #E8EDDF;
  height: 100vh;

  input {
    padding: 9px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-right: 10px;
  }

  @media (max-width: 768px) {
    padding: 10px;
    height: 100vh; input {
      margin-right: 5px;
    }
  }

  @media (max-width: 480px) {
    padding: 2px;
    
    input {
      
      margin-right: 2;
      margin-bottom: 10px;
    }
  }
`;

export const HostelTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

export const HostelSection = styled.div`
  margin-bottom: 20px;
`;

export const HostelSectionTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const HostelFormWrapper = styled.div`
  margin-bottom: 20px;
`;

export const HostelListWrapper = styled.div`
  display: grid;
  grid-gap: 20px;

  @media (max-width: 768px) {
    grid-gap: 10px;
  }

  @media (max-width: 480px) {
    grid-gap: 5px;
  }
`;

export const Button = styled.button`
  position: absolute;
  background-color: #E8EDDF;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 10px;

  &:hover {
    background-color: #45a049;
  }

  @media (max-width: 768px) {
    margin-left: 5px;
    padding: 8px 16px;
  }

  @media (max-width: 480px) {
    padding: 6px 12px;
    font-size: 0.8em;
    position: relative;
  }
`;