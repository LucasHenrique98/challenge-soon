import React from 'react';
import { ClientContext } from '../providers/ClientProvider';

interface ClientRegistrationProps {
  id: number;
  registration?: string;
  client: string;
  plate: string;
  carBrand: string;
  model: string;
  beginDate: string;
  endDate: string;
  plan: string;
}

export default function ClientRegister({
  id,
  client,
  plate,
  carBrand,
  model,
  beginDate,
  endDate,
  plan,
}: ClientRegistrationProps) {
  const registrationDate = new Date();

  const { setClients, clients } = React.useContext(ClientContext);

  const onHandleDeleteClient = () => {
    const newClients = clients.filter((client) => {
      return client.id !== id;
    });

    setClients(newClients);
  };

  return (
    <>
      <tr>
        <td>{`${registrationDate.getDate()}/${
          (registrationDate.getMonth() + 1).toString().length === 1
            ? `0${registrationDate.getMonth() + 1}`
            : registrationDate.getMonth() + 1
        }/${registrationDate.getFullYear()} `}</td>
        <td>
          {client
            .split(' ')
            .map((client) => {
              return (
                client.split('')[0].toUpperCase() +
                client.slice(1, client.length)
              );
            })
            .join(' ')}
        </td>
        <td>
          {plate.split('-')[0].toUpperCase() + plate.slice(3, plate.length)}
        </td>
        <td>
          {carBrand.split('')[0].toUpperCase() +
            carBrand.slice(1, carBrand.length)}
        </td>
        <td>
          {model.split('')[0].toUpperCase() + model.slice(1, model.length)}
        </td>
        <td>Ativo</td>
        <td>{beginDate}</td>
        <td>{endDate}</td>
        <td>{plan}</td>

        <td>
          <button onClick={onHandleDeleteClient}>X</button>
        </td>
      </tr>
    </>
  );
}
