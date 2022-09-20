import React from "react"
import { useEventContext } from "../context/EventsContext"
import { EventItem } from "./EventItem"

export const EventList: React.FC = () => {
  const {filteredEvents} = useEventContext()
  
  return <div className="event-list">
      {filteredEvents.map(event => <EventItem key={event.id} event={event} /> )}
    </div>
  
}