import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1rem 2rem;
  border-bottom: 1px solid black;
  background: white;

  p {
    font-weight: 600;
    font-size: 2rem;
  }

  button {
    font-size: 1rem;
    color: #ffffff;

    background: var(--blue);
    border: 0;
    padding: 0 2rem;

    border-radius: 0.25rem;

    height: 3rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
