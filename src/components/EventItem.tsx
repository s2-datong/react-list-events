import React from "react"
import {Event} from "../types"
import "../css/filter.css"

export const EventItem: React.FC<{event: Event}> = ({event}) => {

  return <div className="flex-item">
    <p>Name: {event.name}</p>
    <p>Venue Name: {event.venueName}</p>
    <p>City: {event.city}</p>
    <p>Price: {event.price}</p>
  </div>
}