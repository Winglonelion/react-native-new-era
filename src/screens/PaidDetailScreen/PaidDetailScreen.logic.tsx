import { useState, useCallback } from 'react';
import { LayoutAnimation } from 'react-native';
import { afterInteract } from 'utils/frames';

const usePaidDetailScreenLogic = () => {
  const [expandGross, setExpandGross] = useState(false);
  const toggleExpandGross = useCallback(() => {
    afterInteract().then(() => {
      LayoutAnimation.easeInEaseOut();
      setExpandGross(oldValue => !oldValue);
    });
  }, []);

  return {
    expandGross,
    toggleExpandGross,
  };
};

export default usePaidDetailScreenLogic;
