import { useFilter } from "./useFilter";
import { renderHook } from "@testing-library/react"
import { useEventContext } from "../context/EventsContext";

describe('Test useFilter', () => {
  it('should return 0 events outside provider', () => {
    const useTestHook = () => {
      const {filteredEvents} = useEventContext()
      useFilter()
      expect(filteredEvents.length).toBe(0)
    }
    renderHook(() => useTestHook())
  })
})