import { useRecoilValue } from 'recoil';
import { recommendedVariableResultAtom } from '../../recoil/atom';
import FeaturedListWrapper from './styled';

export default function FeaturedList() {
  const recommendedVariableResult = useRecoilValue(recommendedVariableResultAtom);

  return (
    <FeaturedListWrapper>
      {recommendedVariableResult.result.map((el, idx) => (
        <li key={el + idx}>{el}</li>
      ))}
    </FeaturedListWrapper>
  );
}
