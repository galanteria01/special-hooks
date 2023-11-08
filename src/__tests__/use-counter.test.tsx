
import { renderHook, act } from '@testing-library/react';
import { useCounter } from '../';


describe("useCounter", () => {
  test("initial value should be 0", async () => {
    const { result } = renderHook(() => useCounter(0))
    expect(result.current.count).toEqual(0)
  })

  test("increment value should be 1", async () => {
    const { result } = renderHook(() => useCounter(0))
    const { count, increment, decrement } = result.current
    act(() => {
      result.current.increment()
    })
    expect(result.current.count).toEqual(1)
  })

  test("increment value should be -1", async () => {
    const { result } = renderHook(() => useCounter(0))
    const { count, increment, decrement } = result.current
    act(() => {
      result.current.decrement()
    })
    expect(result.current.count).toEqual(-1)
  })
})