import { atom } from 'recoil';

interface RecommendedVariableResult {
  result: string[];
  id: string;
}

export const recommendedVariableResultAtom = atom<RecommendedVariableResult>({
  key: 'recommendedVariable',
  default: {
    result: [],
    id: '',
  },
});

export const isShowModalAtom = atom({
  key: 'isModal',
  default: false,
});

export const questionValueAtom = atom<string>({
  key: 'question',
  default: '',
});
