import { useState } from "react"
import _events from "../events.json"
import {Event} from "../types"

export const useProviderValue = () => {
  const [events] = useState<Event[]>(_events as unknown as Event[])
  const [filteredEvents, setFilteredEvents] = useState<Event[]>(_events as unknown as Event[])

  return {
    events,
    filteredEvents,
    updateFilteredEvents: setFilteredEvents
  }
}