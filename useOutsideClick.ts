import { useEffect } from 'react';

const useOutsideClick = (elemRef: React.RefObject<HTMLElement>, callback: () => void): void => {
  useEffect(() => {
    const handler = (evt: Event): void => {
      if (elemRef.current && !elemRef.current.contains(evt.target as Node)) {
        callback();
      }
    };
    document.addEventListener('mousedown', handler);
    document.addEventListener('touchstart', handler);
    return () => {
      document.removeEventListener('mousedown', handler);
      document.removeEventListener('touchstart', handler);
    };
  }, [elemRef, callback]);
};

export default useOutsideClick;
