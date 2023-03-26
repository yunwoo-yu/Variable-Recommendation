import { instance, model } from './baseInstance';

const zz = 'Please recommend three variable names for ${messages} enclosed in brackets.';

export const createVariable = async (messages: string) => {
  const response = await instance.post('v1/chat/completions', {
    model,
    messages: [
      {
        role: 'system',
        content: 'You are a proficient developer who recommends programming variables.',
      },
      {
        role: 'user',
        content: `Please suggest three variable names in square brackets that convey the meaning of ${messages}.`,
      },
    ],
    max_tokens: 170,
  });

  return response.data;
};
