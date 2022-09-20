export type Event = {
  id: number;
  name: string;
  venueName: string;
  city: string;
  price: number;
  distanceFromVenue: number;
  date: string;
}

export type StateData = {
  events: Event[],
  filteredEvents: Event[],
  updateFilteredEvents: (events: Event[]) => void
}