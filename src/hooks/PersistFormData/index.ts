import { useEffect } from "react";

type typeProps = {
  value: object;
  localStorageKey: string;
};
export const usePersistForm = ({ value, localStorageKey }: typeProps) => {
  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(value));
  }, [value, localStorageKey]);

  return;
};
