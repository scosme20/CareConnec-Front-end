import styled from 'styled-components';

export const HomeContainer = styled.div`
  text-align: center;
  padding: 20px;

  h1 {
    color: #fff;
    position: relative;
    z-index: 1;
    letter-spacing: 2px;
  }
`;

export const AuthContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;

  
`;

export const BackgroundImage = styled.img`
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
