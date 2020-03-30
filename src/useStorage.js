import { useEffect } from "react";

const key = "bingo";

export function useStorageReducer([state, dispatch]) {
  useEffect(() => localStorage.setItem(key, JSON.stringify(state)), [state]);
  return [state, dispatch];
}

export function useSavedState(store) {
  const savedState = localStorage.getItem(key);
  return savedState ? JSON.parse(savedState) : store;
}
