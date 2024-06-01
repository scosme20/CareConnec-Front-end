import React, { useContext, useEffect } from 'react';
import FamiliesList from './familiesList';
import FamiliesForm from './familiesForm';
import { useFamilyContext } from '../../context/familyContext';
import { FamiliesContainer } from '../../styles/Families.styles';

const Families = () => {
  const { fetchFamilies } = useFamilyContext();

  useEffect(() => {
    fetchFamilies();
  }, [fetchFamilies]);

  return (
    <FamiliesContainer>
      <h1>Famílias</h1>
      <FamiliesForm />
      <FamiliesList />
    </FamiliesContainer>
  );
};

export default Families;






