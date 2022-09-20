import { render, screen } from "@testing-library/react";
import { EventItem } from "./EventItem";

describe('Event Item', () => {
  it('should render item', async () => {
    const event = {
      "id": 4422829,
      "name": "Backstreet Boys",
      "venueName": "Freedom Mortgage Pavilion",
      "city": "Camden",
      "price": 23,
      "distanceFromVenue": 121162.390908814,
      "date": "Jul 16 2020"
    }
    render( <EventItem event={event}/> )
    expect(await screen.findByText("Name: Backstreet Boys")).toBeVisible()
    expect(await screen.findByText("Venue Name: Freedom Mortgage Pavilion")).toBeVisible()
  })
})