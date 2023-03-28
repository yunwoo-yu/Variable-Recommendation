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

export const questionValueAtom = atom<string>({
  key: 'question',
  default: '',
});
