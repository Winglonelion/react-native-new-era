import userProfileStore, {
  MaritalStatusTypes,
} from 'data/user/UserProfileStore';
import { useCallback, useState } from 'react';
import { frame } from 'utils/frames';

const usePersonalInfoScreenLogic = () => {
  const [isModalMartialStatusVisible, setIsModalMartialStatusVisible] =
    useState(false);

  const updateNickname = useCallback((text: string) => {
    console.log('set nickname', text);
    userProfileStore.updateUserData({ nickname: text });
  }, []);

  const updateMaritalStatus = useCallback(async (text: MaritalStatusTypes) => {
    userProfileStore.updateUserData({ marital_status: text });
    await frame();
    setIsModalMartialStatusVisible(false);
  }, []);

  const nickNameValidator = useCallback((text: string) => {
    if (text.trim() === '') {
      return { error: new Error('Nickname can not be Empty!') };
    }
    return {};
  }, []);

  const openModalMartialStatus = useCallback(() => {
    setIsModalMartialStatusVisible(true);
  }, []);

  const closeModalMartialStatus = useCallback(() => {
    setIsModalMartialStatusVisible(false);
  }, []);

  return {
    personalInfo: userProfileStore.personalInfo,
    updateNickname,
    nickNameValidator,
    updateMaritalStatus,
    isModalMartialStatusVisible,
    openModalMartialStatus,
    closeModalMartialStatus,
  };
};

export default usePersonalInfoScreenLogic;
