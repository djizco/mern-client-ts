import { useEffect } from 'react';

export default function useKeyPress(key: string, callback: () => void, active: boolean = true) {
  useEffect(() => {
    const keypress = (e: KeyboardEvent) => {
      if (e.key === key) {
        callback();
      }
    };

    if (active) {
      window.addEventListener('keypress', keypress);
    }

    return () => {
      if (active) {
        window.removeEventListener('keypress', keypress);
      }
    };
  }, [key, callback, active]);
}
