import { isShowModalAtom } from '@/recoil/atom';
import { useRecoilState } from 'recoil';

const useModal = () => {
  const [isShowModal, setIsShowModal] = useRecoilState(isShowModalAtom);

  const onClickIsToggleModal = () => {
    setIsShowModal((prev) => !prev);
  };

  return {
    isShowModal,
    onClickIsToggleModal,
  };
};

export default useModal;
