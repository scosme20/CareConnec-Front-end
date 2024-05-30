import React from 'react';
import { useHostelContext } from '../../context/hostelContext';
import { ListContainer, Item } from '../../styles/style';
import { Trash, PencilSimple } from "@phosphor-icons/react";
import { BackgroundColor } from '../../styles/hostel.styles';


const HostelList = () => {
  const { hostels, deleteHostel, selectHostel, edit } = useHostelContext(); 

  if (!hostels || hostels.length === 0) {
    return <p>Não há albergues disponíveis.</p>;
  }

  return (
    <div>
    <BackgroundColor/>
    <ListContainer>
      <h2>Lista de Albergues</h2>
      {hostels.map(hostel => (
        <Item key={hostel._id}>
          <h3>{hostel.nome}</h3>
          <p>Localização: {hostel.localizacao}</p>
          <p>Capacidade: {hostel.capacidade}</p>
          <p>Serviços: {hostel.servicos}</p>
          <button onClick={() => deleteHostel(hostel._id)}>
            <Trash size={32} />
          </button>
          <button onClick={() => edit(hostel)}>
            <PencilSimple size={32} />
          </button>
        </Item>
      ))}
    </ListContainer>
    </div>
    
  );
};

export default HostelList;







