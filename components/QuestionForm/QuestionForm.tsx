import { useCreateVariableMutation } from '@/hooks/useCreateVariableMutation';
import { questionValueAtom } from '@/recoil/atom';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import Button from '../common/Button';
import FeaturedList from '../FeaturedList/FeaturedList';

export default function QuestionForm() {
  const question = useRecoilValue(questionValueAtom);
  const { onSubmitHandler, onChangeHandler, questionRef, isLoading } = useCreateVariableMutation();

  return (
    <>
      <Container onSubmit={onSubmitHandler}>
        <input
          type="text"
          value={question}
          ref={questionRef}
          onChange={onChangeHandler}
          maxLength={12}
          placeholder="찾고싶은 변수명을 입력하세요! ex) 개인정보, 상품 등"
        />
        <Button>추천받기</Button>
      </Container>
      <FeaturedList isLoading={isLoading} />
    </>
  );
}

const Container = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;

  input {
    flex: 3;
    padding: 10px;
    height: 40px;
    border: 2px solid #228be6;
    border-radius: 5px;
    margin-bottom: 1rem;
  }
`;
