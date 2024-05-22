import { useContext } from 'react';
import { FamilyContext } from '../context/FamilyContext';

const useFamilies = () => {
  return useContext(FamilyContext);
};

export default useFamilies;
