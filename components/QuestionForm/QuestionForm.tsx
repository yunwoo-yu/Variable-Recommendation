import { createVariable } from '@/lib/api/createVariable';
import { recommendedVariableResultAtom } from '@/recoil/atom';
import React, { FormEvent, useRef, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import Button from '../common/Button';
import QuestionFormWrapper from './styled';

export default function QuestionForm() {
  const questionRef = useRef<HTMLInputElement>(null);
  const [question, setQuestion] = useState('');
  const setRecommendedVariableResult = useSetRecoilState(recommendedVariableResultAtom);

  const onSubmitHandler = (e: FormEvent) => {
    e.preventDefault();

    if (!question) return alert('추천 받고싶은 변수명을 입력해주세요!');

    createVariable(question).then((data) => {
      const filteringResult = Array.from(
        data.result.matchAll('\\[(.*?)\\]'),
        (match: string) => `${match[0].replace(/[\[\]']+/g, '')}`
      );

      setRecommendedVariableResult({ result: filteringResult });
    });

    if (questionRef.current) questionRef.current.focus();
    setQuestion('');
  };

  return (
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
  );
}
