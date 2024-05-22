import React, { useEffect } from 'react';
import HostelList from './hostelList';
import HostelForm from './hostelForm';
import { useHostelContext } from '../../context/hostelContext';
import { HostelContainer } from '../../styles/hostel.styles';

const Hostel = () => {
  const { fetchHostels } = useHostelContext();

  useEffect(() => {
    fetchHostels();
  }, []);

  return (
    <HostelContainer>
      <h1>Albergues</h1>
      <HostelForm />
      <HostelList />
    </HostelContainer>
  );
};

export default Hostel;







