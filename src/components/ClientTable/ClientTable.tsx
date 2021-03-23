import React from 'react';
import { Container } from './style';
import ClientRegister from '../ClientRegister';
import { ClientContext } from '../../providers/ClientProvider';
import { FilterContext } from '../../providers/FilterProvider';

export default function ClientTable() {
  const { clients } = React.useContext(ClientContext);
  const { filter } = React.useContext(FilterContext);

  const filteredClients =
    filter !== ' ' && filter !== ''
      ? clients.filter((client) => {
          return (
            client.customer.name.toLowerCase().includes(filter.toLowerCase()) ||
            client.vehicle.plate.toLowerCase().includes(filter.toLowerCase())
          );
        })
      : clients;

  return (
    <Container>
      <table>
        <thead>
          <th>Cadastro</th>
          <th>Cliente</th>
          <th>Placa</th>
          <th>Marca</th>
          <th>Modelo</th>
          <th>Status</th>
          <th>Data início</th>
          <th>Data final</th>
          <th>Plano</th>
          <th></th>
        </thead>

        <tbody>
          {filteredClients.map((client) => {
            return (
              <ClientRegister
                key={client.id}
                id={client.id}
                client={client.customer.name}
                plate={client.vehicle.plate}
                beginDate={client.plan.begin_date}
                endDate={client.plan.end_date}
                carBrand={client.vehicle.description.split(' ')[0]}
                model={client.vehicle.description.split(' ')[1]}
                plan={client.plan.product}
              />
            );
          })}
        </tbody>
      </table>
    </Container>
  );
}
