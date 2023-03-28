import { useCreateVariableMutation } from '@/hooks/useCreateVariableMutation';

import Button from '../common/Button';
import FeaturedList from '../FeaturedList/FeaturedList';
import QuestionFormWrapper from './styled';

export default function QuestionForm() {
  const { setQuestion, onSubmitHandler, question, questionRef, isLoading } =
    useCreateVariableMutation();

  return (
    <>
      <QuestionFormWrapper onSubmit={onSubmitHandler}>
        <input
          type="text"
          value={question}
          ref={questionRef}
          onChange={(e) => setQuestion(e.target.value)}
          maxLength={12}
        />
        <Button>추천받기</Button>
      </QuestionFormWrapper>
      <FeaturedList isLoading={isLoading} />
    </>
  );
}
