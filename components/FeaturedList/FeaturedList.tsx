import { useRecoilValue } from 'recoil';
import { recommendedVariableResultAtom } from '../../recoil/atom';
import FeaturedItem from '../FeaturedItem/FeaturedItem';
import styled from 'styled-components';

export default function FeaturedList({ isLoading }: { isLoading: boolean }) {
  const recommendedVariableResult = useRecoilValue(recommendedVariableResultAtom);

  return (
    <Container>
      {!isLoading &&
        recommendedVariableResult.result.map((item, idx) => (
          <FeaturedItem key={item + idx} item={item} />
        ))}
      {isLoading && <p>Loading...</p>}
    </Container>
  );
}

const Container = styled.ul`
  width: 100%;
  border: 2px solid #228be6;
  min-height: 400px;
  border-radius: 10px;
  margin-top: 3rem;
  padding: 20px;
`;
