import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Modal from 'react-modal';
import { ClientContext } from '../../providers/ClientProvider';
import { api } from '../../services/api';
import { Container } from './style';

Modal.setAppElement('#root');

interface NewClientModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

interface OnSubmitFormProps {
  car_brand: string;
  car_model: string;
  car_plate: string;
  car_warranty_date: string;
  car_year: string;
  client_email: string;
  client_name: string;
  client_phone: string;
  client_register: string;
  plan_begin_date: string;
  plan_end_date: string;
  plan_product: string;
  plan_type: string;
}

interface handlePlateInputChangeProps {
  target: { value: string };
}

export default function NewClientModal({
  isOpen,
  onRequestClose,
}: NewClientModalProps) {
  const { register, handleSubmit } = useForm();
  const [plateNumber, setPlateNumber] = useState(Number);

  const { clients, setClients } = React.useContext(ClientContext);

  const onSubmit = (data: OnSubmitFormProps) => {
    api
      .post('/subscribers', {
        customer: {
          name: data.client_name,
          phone: data.client_phone,
          cpf: data.client_register,
          email: data.client_email,
        },
        vehicle: {
          description: `${data.car_brand} ${data.car_model}`,
          plate: data.car_plate,
          year: data.car_year,
          warranty_date: new Date(),
        },
        plan: {
          product:
            data.plan_type === 'Plano A'
              ? '43274268472368472'
              : data.plan_type === 'Plano B'
              ? '47237847238472343'
              : '31231231231212315',
          begin_date: data.plan_begin_date,
          end_date: data.plan_end_date,
        },
      })
      .then((response) => {
        const clientData = JSON.parse(response.config.data);
        const newClient = { id: response.data.id, ...clientData };

        setClients([...clients, newClient]);
      });
  };

  const handlePlateInputChange = (e: handlePlateInputChangeProps) => {
    const plate = e.target.value;
    setPlateNumber(parseInt(plate.split('-')[1]));
  };

  return (
    <Container>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="data">
            <p>Cliente</p>
            <hr />

            <input
              ref={register({ required: true })}
              type="text"
              name="client_name"
              placeholder="Nome completo"
            />

            <input
              ref={register({ required: true })}
              type="tel"
              name="client_phone"
              placeholder="Celular ((xx)xxxx-xxxx)"
            />

            <input
              ref={register({ required: true })}
              type="text"
              name="client_register"
              placeholder="CPF (xxxxxxxxxxx)"
            />

            <input
              ref={register({ required: true })}
              type="email"
              name="client_email"
              placeholder="E-mail"
            />
          </div>

          <div className="data">
            <p>Veículo</p>
            <hr />

            <input
              ref={register({ required: true })}
              type="text"
              name="car_brand"
              placeholder="Marca"
            />

            <input
              ref={register({ required: true })}
              type="text"
              name="car_model"
              placeholder="Modelo"
            />

            <input
              ref={register({ required: true })}
              type="text"
              name="car_year"
              placeholder="Ano"
            />

            <input
              ref={register({ required: true })}
              type="text"
              name="car_plate"
              placeholder="Placa (xxx-xxx)"
              onChange={handlePlateInputChange}
            />

            <input
              ref={register({ required: true })}
              type="text"
              onFocus={(e) => {
                e.currentTarget.type = 'date';
              }}
              name="car_warranty_date"
              placeholder="Data de garantia"
            />
          </div>

          <div className="data">
            <p>Plano</p>
            <hr />

            <input
              ref={register({ required: true })}
              type="text"
              onFocus={(e) => {
                e.currentTarget.type = 'date';
              }}
              name="plan_begin_date"
              placeholder="Data de início"
            />

            <input
              ref={register({ required: true })}
              type="text"
              onFocus={(e) => {
                e.currentTarget.type = 'date';
              }}
              name="plan_end_date"
              placeholder="Data final"
            />

            <select ref={register({ required: true })} name="plan_type">
              {plateNumber % 2 === 0 ? (
                <>
                  <option>Plano A</option>
                  <option>Plano C</option>
                </>
              ) : (
                <>
                  <option>Plano B</option>
                  <option>Plano D</option>
                </>
              )}
            </select>

            <input className="submit-button" type="submit" />
          </div>
        </form>
      </Modal>
    </Container>
  );
}
