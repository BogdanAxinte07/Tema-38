import { useState, useEffect } from 'react';

export function useLocalStorage(key, initialValue) {
  // Inițializăm starea doar la prima renderizare
  const [storedState, setStoredState] = useState(() => {
    try {
      // Verificăm dacă există deja o valoare în localStorage
      const storedValue = localStorage.getItem(key);

      // Dacă există, o parsem și o returnăm, altfel returnăm valoarea implicită
      return storedValue ? JSON.parse(storedValue) : initialValue;
    } catch (error) {
      console.error("Error reading localStorage", error);
      return initialValue; // Dacă apare o eroare, folosim valoarea implicită
    }
  });

  // Funcția pentru a actualiza starea și localStorage
  const setValue = (newValue) => {
    try {
      setStoredState(newValue);
      localStorage.setItem(key, JSON.stringify(newValue)); // Salvăm în localStorage
    } catch (error) {
      console.error("Error writing to localStorage", error);
    }
  };

  return [storedState, setValue]; // Returnăm starea și setValue
}
