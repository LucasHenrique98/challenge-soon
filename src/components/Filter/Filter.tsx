import React from 'react';
import { FilterContext } from '../../providers/FilterProvider';
import { Container } from './style';

interface OnHandleInputChangeProps {
  target: { value: string };
}

export default function Filter() {
  const { setFilter } = React.useContext(FilterContext);

  const onHandleInputChange = (e: OnHandleInputChangeProps) => {
    setFilter(e.target.value);
  };

  return (
    <Container>
      <p>Filtro</p>
      <div>
        <input
          type="text"
          placeholder="Procure pelo nome do cliente ou pela placa"
          onChange={onHandleInputChange}
        />
      </div>
    </Container>
  );
}
