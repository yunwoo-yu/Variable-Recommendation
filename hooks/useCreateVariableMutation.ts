import { instance } from '@/lib/axios/baseInstance';
import { questionValueAtom, recommendedVariableResultAtom } from '@/recoil/atom';
import { FormEvent, useRef } from 'react';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import { useRecoilState, useSetRecoilState } from 'recoil';

// 변수명 추천 요청
export const createVariable = async (message: string) => {
  const response = await instance.post('/api/question', {
    message,
  });

  return response.data;
};

export const useCreateVariableMutation = () => {
  const questionRef = useRef<HTMLInputElement>(null);

  const [question, setQuestion] = useRecoilState(questionValueAtom);
  const setRecommendedVariableResult = useSetRecoilState(recommendedVariableResultAtom);

  const createVariableMutation = useMutation(createVariable, {
    onSuccess(data) {
      const filteringResult = Array.from(
        data.result.matchAll('\\[(.*?)\\]'),
        (match: string) => `${match[0].replace(/[\[\]']+/g, '')}`
      );

      setRecommendedVariableResult({ result: filteringResult, id: data.id });
      setQuestion('');
      if (questionRef.current) questionRef.current.focus();
    },
  });

  const onSubmitHandler = (e: FormEvent) => {
    e.preventDefault();

    if (!question) return toast.error('추천 받고싶은 변수명을 입력해주세요!');

    createVariableMutation.mutate(question);
  };

  return {
    onSubmitHandler,
    setQuestion,
    questionRef,
    question,
    createVariableMutation,
    isLoading: createVariableMutation.isLoading,
  };
};
