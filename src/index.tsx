import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Model, Server } from 'miragejs';

new Server({
  seeds(server) {
    server.db.loadData({
      subscribers: [
        {
          customer: {
            name: 'joao',
            phone: '313333-3333',
            cpf: '313333-3333',
            email: 'joao@gmail.com',
          },
          vehicle: {
            description: 'fiat uno',
            plate: 'xxx-3333',
            year: 2020,
            warranty_date: '2020-01-15T00:00:00.000Z',
          },
          plan: {
            product: '312312312312',
            begin_date: '2020-01-15',
            end_date: '2021-01-15',
          },
        },
        {
          customer: {
            name: 'lucas henrique',
            phone: '1191234-1234',
            cpf: '859326-3636',
            email: 'henrique.lucas30@gmail.com',
          },
          vehicle: {
            description: 'toyota corola',
            plate: 'abc-3333',
            year: 2020,
            warranty_date: '2020-01-15T00:00:00.000Z',
          },
          plan: {
            product: '312312312312',
            begin_date: '2021-03-23',
            end_date: '2022-01-15',
          },
        },
        {
          customer: {
            name: 'fulano de tal',
            phone: '119999-9999',
            cpf: '333333-3333',
            email: 'fulano@gmail.com',
          },
          vehicle: {
            description: 'toyota hilux',
            plate: 'aaa-7777',
            year: 2020,
            warranty_date: '2020-01-15T00:00:00.000Z',
          },
          plan: {
            product: '312312312312',
            begin_date: '2021-03-23',
            end_date: '2022-01-15',
          },
        },
      ],
    });
  },

  models: {
    subscribers: Model,
  },

  routes() {
    this.namespace = 'api';

    this.get('/plans', () => {
      return [
        {
          name: 'Plan A',
          id: '43274268472368472',
        },
        {
          name: 'Plan B',
          id: '47237847238472343',
        },
        {
          name: 'Plan C',
          id: '31231231231212315',
        },
      ];
    });

    this.post('/subscribers', (schema, request) => {
      const newSubscriber = JSON.parse(request.requestBody).data;

      return schema.db.subscribers.insert(newSubscriber);
    });

    this.get('/subscribers', (schema) => {
      return schema.db.subscribers;
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
