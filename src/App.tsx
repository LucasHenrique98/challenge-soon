import React, { useState } from 'react';
import ClientTable from './components/ClientTable/ClientTable';
import Filter from './components/Filter/Filter';
import Header from './components/Header/Header';
import { GlobalStyles } from './styles/globalStyles';
import NewClientModal from './components/NewClientModal/NewClientModal';
import { ClientProvider } from './providers/ClientProvider';
import { FilterProvider } from './providers/FilterProvider';

function App() {
  const [isNewClientModalOpen, setIsNewClientModalOpen] = useState(false);

  const handleOpenNewClientModal = () => {
    setIsNewClientModalOpen(true);
  };

  const handleCloseNewClientModal = () => {
    setIsNewClientModalOpen(false);
  };

  return (
    <>
      <GlobalStyles />
      <ClientProvider>
        <Header onHandleButtonClick={handleOpenNewClientModal} />
        <FilterProvider>
          <Filter />
          <ClientTable />
        </FilterProvider>
        <NewClientModal
          isOpen={isNewClientModalOpen}
          onRequestClose={handleCloseNewClientModal}
        />
      </ClientProvider>
    </>
  );
}

export default App;
