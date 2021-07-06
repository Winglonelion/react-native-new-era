import { useState } from 'react';

const useSettingScreenLogic = () => {
  const [receivePaymentActive, setReceivePaymentActive] = useState(true);
  const [messageActive, setMessageActive] = useState(true);
  const [faceId, setFaceId] = useState(false);

  return {
    receivePaymentActive,
    setReceivePaymentActive,
    messageActive,
    setMessageActive,
    faceId,
    setFaceId,
  };
};

export default useSettingScreenLogic;
