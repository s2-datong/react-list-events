import { useEffect } from "react"
import { useEventContext } from "../context/EventsContext"

export const useFilter = (cityFilter?: string, priceFilter?: number) => {
  const {events, updateFilteredEvents} = useEventContext()
  
  useEffect(() => {
    const cityFiltered = cityFilter ? events.filter(event => event.city.toLowerCase().includes(cityFilter.toLowerCase())) : events
    const priceFiltered = priceFilter ? cityFiltered.filter(event => event.price <= priceFilter) : cityFiltered
    updateFilteredEvents(priceFiltered)
  }, [cityFilter, priceFilter])
}