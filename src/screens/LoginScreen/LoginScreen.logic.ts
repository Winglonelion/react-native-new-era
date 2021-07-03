import { SESSION_STATUS } from 'constants/session';
import sessionStore from 'data/session/SessionStore';
import { useCallback } from 'react';

const useLogic = () => {
  const loading = sessionStore.session_status === SESSION_STATUS.AUTHORIZING;
  const onPressLogin = useCallback(() => {
    // TODO: because we just mock login here, so dont have any params pass into login
    sessionStore.login();
  }, []);

  return {
    onPressLogin,
    loading,
  };
};

export default useLogic;
