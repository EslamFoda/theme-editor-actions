import { useEffect, useState } from "react";

export function useStickyState(
  defaultValue: string | undefined | any,
  key: string
): [string | undefined, (v: string) => void] {
  const [value, setValue] = useState<string | undefined | any>(defaultValue);

  useEffect(() => {
    const stickyValue = localStorage.getItem(key);
    if (stickyValue !== null) {
      setValue(stickyValue);
    }
  }, [key, setValue]);

  return [
    value,
    (v) => {
      localStorage.setItem(key, v);
      setValue(v);
    },
  ];
}
