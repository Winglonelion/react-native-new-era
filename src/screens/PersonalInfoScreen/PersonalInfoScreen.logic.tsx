import userProfileStore from 'data/user/UserProfileStore';

const usePersonalInfoScreenLogic = () => {
  const personalInfo = userProfileStore.personalInfo;
  return {
    personalInfo,
  };
};

export default usePersonalInfoScreenLogic;
