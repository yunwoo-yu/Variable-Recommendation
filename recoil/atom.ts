import { atom } from 'recoil';

interface RecommendedVariableResult {
  result: string[];
}

export const recommendedVariableResultAtom = atom<RecommendedVariableResult>({
  key: 'recommendedVariable',
  default: {
    result: [],
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

export const questionTextAtom = atom<string>({
  key: 'questionText',
  default: '',
});
