import React from 'react';
import { useHostelContext } from '../../context/hostelContext';
import { ListContainer, Item } from '../../styles/style';

const HostelList = () => {
  const { hostels, deleteHostel, selectHostel, edit } = useHostelContext(); 

  if (!hostels || hostels.length === 0) {
    return <p>Não há albergues disponíveis.</p>;
  }

  return (
    <ListContainer>
      <h2>Lista de Albergues</h2>
      {hostels.map(hostel => (
        <Item key={hostel._id}>
          <h3>{hostel.nome}</h3>
          <p>Localização: {hostel.localizacao}</p>
          <p>Capacidade: {hostel.capacidade}</p>
          <p>Serviços: {hostel.servicos}</p>
          <button onClick={() => deleteHostel(hostel._id)}>Excluir</button>
          <button onClick={() => edit(hostel)}>Editar</button>
        </Item>
      ))}
    </ListContainer>
  );
};

export default HostelList;







