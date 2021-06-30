import { useCallback } from 'react';

const useLogic = () => {
  const onPressLogin = useCallback(() => {}, []);

  return {
    onPressLogin,
  };
};

export default useLogic;
