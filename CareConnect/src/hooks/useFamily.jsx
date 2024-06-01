import { useContext } from 'react';
import { FamilyContext } from '../context/familyContext';

const useFamilies = () => {
  return useContext(FamilyContext);
};

export default useFamilies;
