import { useState } from 'react';

const useLogic = () => {
  const [index, setIndex] = useState(0);

  return { index, setIndex };
};

export default useLogic;
