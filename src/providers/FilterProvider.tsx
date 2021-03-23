import React, { useState } from 'react';

interface FilterProviderProps {
  children: React.ReactNode;
}

interface FilterContextData {
  filter: string;
  setFilter: any;
}

export const FilterContext = React.createContext<FilterContextData>(
  {} as FilterContextData
);

export const FilterProvider = (props: FilterProviderProps) => {
  const [filter, setFilter] = useState('');

  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      {props.children}
    </FilterContext.Provider>
  );
};
