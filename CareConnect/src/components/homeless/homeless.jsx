import React, { useEffect } from 'react';
import HomelessList from './homelessList';
import HomelessForm from './homelessForm';
import { useHomelessContext } from '../../context/homelessContext';
import { HomelessContainer } from '../../styles/homelessStyle';
import { BackgroundColor } from '../../styles/hostel.styles';

const Homeless = () => {
  const { fetchHomelessList } = useHomelessContext();

  useEffect(() => {
    fetchHomelessList();
  }, [fetchHomelessList]);

  return (
    <BackgroundColor>
    <HomelessContainer>
      <h1>Moradores de Rua</h1>
      <HomelessForm />
      <HomelessList />
    </HomelessContainer>
    </BackgroundColor>
  );
};

export default Homeless;
