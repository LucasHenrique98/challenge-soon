import styled from 'styled-components';

export const Container = styled.div`
  padding: 3rem 2rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;
  }

  th {
    font-weight: 600;
    padding: 1rem 2rem;
    text-align: left;
    line-height: 1.5rem;
  }

  td {
    padding: 1rem 2rem;
    font-size: 0.8rem;

    &:last-child {
      padding: 1rem 0rem;
    }
  }

  tr {
    background: #ffffff;
  }

  thead {
    background: #ffffff;
    font-size: 1rem;
  }

  button {
    font-size: 1rem;
    color: #ffffff;

    background: var(--blue);

    border: 0;
    padding: 0 0.5rem;

    border-radius: 0.25rem;

    height: 1.5rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
