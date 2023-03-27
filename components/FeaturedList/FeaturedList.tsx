import { useRecoilValue } from 'recoil';
import { recommendedVariableResultAtom } from '../../recoil/atom';
import FeaturedListWrapper from './styled';
import FeaturedItem from '../FeaturedItem/FeaturedItem';

export default function FeaturedList() {
  const recommendedVariableResult = useRecoilValue(recommendedVariableResultAtom);

  return (
    <FeaturedListWrapper>
      {recommendedVariableResult.result.map((item, idx) => (
        <FeaturedItem key={item + idx} item={item} />
      ))}
    </FeaturedListWrapper>
  );
}
