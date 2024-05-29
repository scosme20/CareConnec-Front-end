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

  input{
    padding: 9px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-right: 10px;
   
  }
`;

export const HostelTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const HostelSection = styled.div`
  margin-bottom: 20px;
`;

export const HostelSectionTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
`;

export const HostelFormWrapper = styled.div`
  margin-bottom: 20px;
`;

export const HostelListWrapper = styled.div`
  display: grid;
  grid-gap: 20px;
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
`