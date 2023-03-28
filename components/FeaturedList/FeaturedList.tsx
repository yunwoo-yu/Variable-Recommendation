import { useRecoilValue } from 'recoil';
import { recommendedVariableResultAtom } from '../../recoil/atom';
import FeaturedListWrapper from './styled';
import FeaturedItem from '../FeaturedItem/FeaturedItem';

export default function FeaturedList({ isLoading }: { isLoading: boolean }) {
  const recommendedVariableResult = useRecoilValue(recommendedVariableResultAtom);

  return (
    <FeaturedListWrapper>
      {!isLoading &&
        recommendedVariableResult.result.map((item, idx) => (
          <FeaturedItem key={item + idx} item={item} />
        ))}
      {isLoading && <p>Loading...</p>}
    </FeaturedListWrapper>
  );
}
