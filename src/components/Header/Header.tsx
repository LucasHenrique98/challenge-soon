import { Container } from './style';

interface HeaderProps {
  onHandleButtonClick: () => void;
}

export default function Header({ onHandleButtonClick }: HeaderProps) {
  return (
    <Container>
      <p>Clientes</p>
      <button type="button" onClick={onHandleButtonClick}>
        + Novo cliente
      </button>
    </Container>
  );
}
