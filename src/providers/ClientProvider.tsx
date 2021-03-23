import React, { ReactNode, useEffect, useState } from 'react';
import { api } from '../services/api';

interface ClientProviderProps {
  children: ReactNode;
}

interface ClientContextData {
  clients: ClientProps[];
  setClients: any;
}

interface ClientProps {
  id: number;
  customer: {
    name: string;
    phone: string;
    cpf: string;
    email: string;
  };
  vehicle: {
    description: string;
    plate: string;
    year: string;
    warranty_date: string;
  };
  plan: {
    product: string;
    begin_date: string;
    end_date: string;
  };
}

export const ClientContext = React.createContext<ClientContextData>(
  {} as ClientContextData
);

export const ClientProvider = (props: ClientProviderProps) => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    api.get('/subscribers').then((resp) => {
      setClients(resp.data);
    });
  }, []);

  return (
    <ClientContext.Provider value={{ clients, setClients }}>
      {props.children}
    </ClientContext.Provider>
  );
};
