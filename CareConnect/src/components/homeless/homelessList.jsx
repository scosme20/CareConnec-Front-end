import React, { useContext } from 'react';
import { HomelessContext } from '../../context/homelessContext';
import { HomelessItem, HomelessDetails, Button } from '../../styles/homelessStyle';
import { Trash, PencilSimple } from "@phosphor-icons/react";



const HomelessList = () => {
  const { homelessList, deleteHomeless, selectHomeless } = useContext(HomelessContext);

  return (
   
    <div>
      {homelessList.map((homeless) => (
        <HomelessItem key={homeless._id}>
          <HomelessDetails>
            <h3>{homeless.nome}</h3>
            <p>Idade: {homeless.idade}</p>
            <p>Histórico: {homeless.historico}</p>
          </HomelessDetails>
          <Button onClick={() => selectHomeless(homeless)}>
            <PencilSimple size={32} />
          </Button>
          <Button onClick={() => deleteHomeless(homeless._id)}>
            <Trash size={32} />
          </Button>
        </HomelessItem>
      ))}
    </div>

  );
};

export default HomelessList;
