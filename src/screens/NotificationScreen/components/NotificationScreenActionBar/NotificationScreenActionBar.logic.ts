import { useCallback } from 'react';
import notificationScreenStore, {
  SELECT_MODE,
} from 'screens/NotificationScreen/NotificationScreen.store';

const useNotificationScreenActionBarLogic = () => {
  //

  const toggleSelectMode = useCallback(() => {
    const mode = notificationScreenStore.selectMode;

    if (mode === SELECT_MODE.IDLE || mode === SELECT_MODE.SELECT) {
      notificationScreenStore.selectAll();
    } else {
      notificationScreenStore.deselectAll();
    }
  }, []);

  const markAsRead = () => {
    notificationScreenStore.markAsRead();
  };
  return {
    markAsRead,
    toggleSelectMode,
    selectMode: notificationScreenStore.selectMode,
  };
};

export default useNotificationScreenActionBarLogic;
