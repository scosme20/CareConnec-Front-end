import styled from "styled-components";

export const BackgroundOverview = styled.img`
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
z-index: -1;
object-fit: cover;
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* ajuste a cor e a opacidade conforme necessário */
  z-index: 0;
`;

export const Container = styled.div`
color: #333533;
  width: 500px;
  height: 300px;
  background-color: #CFDBD5;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  padding: 1px 30px 20px ;
  font-family: "Kanit", sans-serif;
  font-weight: 300;
  font-size: 19.5px;
  align-items: flex-start;
  justify-content: space-evenly;
  position: fixed;
  top: 60%;
  left: 70%;
  transform: translate(-50%, -50%);
  z-index: 1;

  @media (max-width: 1200px) {
    width: 50%;
    font-size: 18px;
    padding: 20px;
    border-radius: 20px;
  }

  @media (max-width: 992px) {
    width: 50%;
    font-size: 16px;
    padding: 15px;
    border-radius: 15px;
    height: 200px;
    top: 50%;
    position: absolute;
  }

  @media (max-width: 768px) {
    width: 50%;
    font-size: 14px;
    padding: 10px;
    border-radius: 10px;
    height: 200px;
  }

  @media (max-width: 576px) {
    left: 50%;
    width: 90%;
    font-size: 12px;
    padding: 10px;
    border-radius: 10px;
    height: 250px;
  }
`
export const Title = styled.h1`
color: #333533;
  font-family: "Mohave", sans-serif;
  font-weight: bold;
  font-size: 80px;
  height: 20px;

  &:hover {
    color: #E8EDDF;
    text-shadow: 2px 2px 8px #242423;
  }


  span {
    color: #F5CB5C;
    text-shadow: 2px 2px 8px #E8EDDF;
    
  }

  

  @media (max-width: 576px) {
    font-size: 55px;
    
  }
`
export const Button = styled.button`
background-color: #242423;
  border: none;
  color: #FDFFFC;
  width: 180px;
  height: 40px;
  border-radius: 30px;
  box-shadow: 4px 4px 5px #E8EDDF;
  font-size: 17px;


  &:hover {
    background-color: #F5CB5C;
    color: #242423;
    box-shadow: 2px 2px 8px #242423;
  }
`



