
import { useContext } from 'react';
import { HostelContext } from '../context/hostelContext';

const useHostel = () => {
  return useContext(HostelContext);
};

export default useHostel;

