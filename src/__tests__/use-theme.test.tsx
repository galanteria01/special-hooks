
import { renderHook, act } from '@testing-library/react';
import { useTheme } from '../';


describe("useTheme", () => {
  test("initial theme should be light", async () => {
    const { result } = renderHook(() => useTheme())
    expect(result.current.theme).toEqual("light")
  })

  test("toggled theme should be dark", async () => {
    const { result } = renderHook(() => useTheme())
    act(() => {
      result.current.toggleTheme();
    })
    expect(result.current.theme).toEqual("dark")
  })
})