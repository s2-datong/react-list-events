import React from 'react';
import { EventList } from './components/EventList';
import { Filter } from './components/Filter';
import { EventContextProvider } from './context/EventsContext';
import { useProviderValue } from './hooks/useProviderValue';

function App() {
  const providerValue = useProviderValue()
  return (
    <EventContextProvider value={providerValue}>
      <Filter />
      <EventList />
    </EventContextProvider>
  );
}

export default App;
