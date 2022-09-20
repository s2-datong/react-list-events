import { createContext, useContext } from "react";
import { StateData, Event } from "../types";

const defaultValue = {
  events: [], 
  filteredEvents: [],
  updateFilteredEvents: (events: Event[]) => null
}
const EventContext = createContext<StateData>(defaultValue)
export const useEventContext = () => useContext(EventContext)
export const EventContextProvider = EventContext.Provider