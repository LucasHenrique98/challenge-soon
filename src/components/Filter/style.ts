import styled from 'styled-components';

export const Container = styled.div`
  padding: 1rem 2rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  font-size: 1.2rem;
  font-weight: 400;

  input {
    padding: 0 5px;

    width: 20rem;
    height: 2.5rem;
    outline: none;

    box-shadow: 1px 1px 1px black;
    border: none;

    &:hover {
      box-shadow: 1px 1px 5px black;
    }
  }

  button {
    font-size: 1rem;
    color: #ffffff;

    background: var(--blue);
    border: 0;

    padding: 0 2rem;
    margin-left: 1rem;

    border-radius: 0.25rem;

    height: 2.5rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
