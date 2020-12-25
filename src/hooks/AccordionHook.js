import { useContext } from "react";
import { ToggleContext, ToggleUpdateContent } from "../context";

// wraps ToggleCpntext & useContext into its own custom hook
export function useToggleBody() {
  return useContext(ToggleContext);
}

export function useToggleBodyUpdate() {
  return useContext(ToggleUpdateContent);
}
