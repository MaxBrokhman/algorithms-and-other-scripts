import { useRef, useEffect } from 'react';
import { set } from 'lodash';

const useComponentWillUnmount = (cleanUpCallback: () => void) => {
  const ref = useRef<typeof cleanUpCallback>(null);

  useEffect(() => {
    if (cleanUpCallback) {
      set(ref, 'current', cleanUpCallback);
    }
  }, [cleanUpCallback]);

  useEffect(() => () => ref.current?.(), []);
};

export default useComponentWillUnmount;
