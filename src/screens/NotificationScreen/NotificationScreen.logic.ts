import notificationScreenStore, {
  SELECT_MODE,
} from './NotificationScreen.store';
import { useEffect, useCallback } from 'react';

const useNotificationScreenLogic = () => {
  const onRefresh = useCallback(() => {
    notificationScreenStore.refresh();
  }, []);

  const onFetchNext = useCallback(() => {
    notificationScreenStore.fetchNext();
  }, []);

  useEffect(() => {
    notificationScreenStore.fetchNew();
  }, []);

  const toggleSelectMode = useCallback(() => {
    const mode = notificationScreenStore.selectMode;

    if (mode === SELECT_MODE.IDLE || mode === SELECT_MODE.SELECT) {
      notificationScreenStore.selectAll();
    } else {
      notificationScreenStore.deselectAll();
    }
  }, []);

  return {
    toggleSelectMode,
    refresh: onRefresh,
    fetchNext: onFetchNext,
    list: notificationScreenStore.list,
    selectMode: notificationScreenStore.selectMode,
    fetchStatus: notificationScreenStore.fetchStatus,
  };
};

export default useNotificationScreenLogic;
