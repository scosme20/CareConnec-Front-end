import { useContext } from 'react';
import { HomelessContext } from '../context/homelessContext';

const useHomeless = () => {
  return useContext(HomelessContext);
};

export default useHomeless;
