import { render, screen } from "@testing-library/react";
import { EventContextProvider } from "../context/EventsContext";
import { useProviderValue } from "../hooks/useProviderValue";
import { EventList } from "./EventList";

describe('Event List', () => {
  it('should render events within Provider', async () => {
    const Wrapper = () => {
      const providerValue = useProviderValue()
      return <EventContextProvider value={providerValue}>
        <EventList />
      </EventContextProvider>
    }
    
    render(<Wrapper /> )

    expect((await screen.findAllByText("Name: Backstreet Boys")).length).toBe(3)
  })
})