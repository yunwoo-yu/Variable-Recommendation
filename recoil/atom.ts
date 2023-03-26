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
