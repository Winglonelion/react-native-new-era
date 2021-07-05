import { useCallback, useEffect } from 'react';
import homeScreenStore from './HomeScreen.store';

const useHomeScreenLogic = () => {
  const reloadHomeData = useCallback(() => {
    homeScreenStore.fetchPaidHistoryOverview();
    homeScreenStore.fetchPaidOverview();
  }, []);

  useEffect(() => {
    reloadHomeData();
  }, [reloadHomeData]);

  return { reloadHomeData };
};

export default useHomeScreenLogic;
