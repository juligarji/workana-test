import { renderHook, act } from "@testing-library/react-hooks";
import useCounter from "./useCounter";

describe("useCounter Hook", () => {
  it("should initialize counter with 0", () => {
    const { result } = renderHook(() => useCounter());

    expect(result.current.counter).toBe(0);
  });

  it("should increment counter correctly", () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.plusCounter();
    });

    expect(result.current.counter).toBe(1);
  });

  it("should reset counter correctly", () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.plusCounter(); // Increment counter to 1
      result.current.resetCounter();
    });

    expect(result.current.counter).toBe(0);
  });
});
