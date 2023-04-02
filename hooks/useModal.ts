import { isShowModalAtom } from '@/recoil/atom';
import { useState } from 'react';
import { useRecoilState } from 'recoil';

const useModal = () => {
  const [isShowModal, setIsShowModal] = useRecoilState(isShowModalAtom);
  const [isAnimation, setIsAnimation] = useState(false);

  const onClickIsToggleModal = () => {
    if (isShowModal) {
      setIsAnimation((prev) => !prev);
      setTimeout(() => {
        setIsShowModal((prev) => !prev);
      }, 250);
      return;
    }
    setIsAnimation((prev) => !prev);
    setIsShowModal((prev) => !prev);
  };

  return {
    isAnimation,
    isShowModal,
    onClickIsToggleModal,
  };
};

export default useModal;
