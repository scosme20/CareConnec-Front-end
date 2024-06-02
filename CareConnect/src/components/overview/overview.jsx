import React from 'react';
import overview from '../../assets/overview.jpg'
import { BackgroundOverview, Overlay, Container, Title, Button} from '../../styles/Overview.styles';
import { Link } from 'react-router-dom';

function Overview() {
  return (
    <div>
      <BackgroundOverview src={overview} />
      <Overlay />
      <Container>
        <Title>Care<span>Connect</span></Title>
        <p>Junte-se ao CareConnect para transformar o mundo em um lugar melhor</p>
        <Link to="/volunteer">
            <Button>Seja um voluntário</Button>
          </Link>
      </Container>
      
    </div>
  );
}

export default Overview;