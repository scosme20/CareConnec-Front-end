// hooks/useDonation.js
import { useContext } from 'react';
import { DonationContext } from '../contexts/DonationContext';

const useDonation = () => {
  return useContext(DonationContext);
};

export default useDonation;
