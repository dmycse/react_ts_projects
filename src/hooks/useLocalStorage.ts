import { useEffect, useState } from "react";

function useLocalStorage<T>(key: string, initialValue: T | (() => T)) {
  
  let [ value, setValue] = useState<T>(() => {
    let jsonValue = localStorage.getItem(key);
    if(jsonValue != null) return JSON.parse(jsonValue);

    if (typeof initialValue === 'function') {
      return (initialValue as () => T)()
    } else {
      return initialValue
    }
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue] as [typeof value, typeof setValue];
}

export default useLocalStorage;