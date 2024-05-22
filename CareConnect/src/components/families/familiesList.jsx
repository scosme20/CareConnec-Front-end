import React, { useContext } from 'react';
import { FamilyContext } from '../../context/familyContext';
import { FamilyItem, FamilyDetails, Button } from '../../styles/Families.styles';

const FamiliesList = () => {
  const { families, deleteFamily, selectFamily } = useContext(FamilyContext);

  return (
    <div>
      {families.map((family) => (
        <FamilyItem key={family._id}>
          <FamilyDetails>
            <h3>{family.name}</h3>
            <p>Registro: {family.register}</p>
            <p>Doação: {family.donation}</p>
            <p>Acompanhamento: {family.followUp}</p>
          </FamilyDetails>
          <Button onClick={() => selectFamily(family)}>Editar</Button>
          <Button onClick={() => deleteFamily(family._id)}>Deletar</Button>
        </FamilyItem>
      ))}
    </div>
  );
};

export default FamiliesList;




