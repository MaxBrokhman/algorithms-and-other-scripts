import { useEffect, useCallback } from 'react';

const useOnDocumentClose = (callback: () => void) => {
  const handler = useCallback(() => {
    if (document?.visibilityState == 'hidden') {
      callback();
    }
  }, [callback]);

  useEffect(() => {
    document?.addEventListener('visibilitychange', handler);
    return () => document?.removeEventListener('visibilitychange', handler);
  }, [handler]);
};

export default useOnDocumentClose;
