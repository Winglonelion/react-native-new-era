import { useState, useCallback } from 'react';
import { LayoutAnimation } from 'react-native';

const usePaidDetailScreenLogic = () => {
  const [expandGross, setExpandGross] = useState(false);
  const toggleExpandGross = useCallback(() => {
    // afterInteract().then(() => {
    LayoutAnimation.configureNext({
      duration: 250,
      create: LayoutAnimation.create(200, 'easeInEaseOut', 'scaleY'),
      update: LayoutAnimation.create(200, 'easeInEaseOut', 'scaleY'),
      delete: LayoutAnimation.create(200, 'easeInEaseOut', 'scaleY'),
    });
    // LayoutAnimation.create(200, "easeInEaseOut","scaleY");
    setExpandGross(oldValue => !oldValue);
    // });
  }, []);

  return {
    expandGross,
    toggleExpandGross,
  };
};

export default usePaidDetailScreenLogic;
