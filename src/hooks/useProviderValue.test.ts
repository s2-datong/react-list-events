import { renderHook } from "@testing-library/react";
import { useProviderValue } from "./useProviderValue";

describe('Provider Value', () => {
  it('should return expected props', () => {
    const {result} = renderHook(() => useProviderValue())
    expect(result.current.events.length).toBe(9)
    expect(result.current.filteredEvents.length).toBe(9)
  })
})