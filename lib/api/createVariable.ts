import { instance } from './baseInstance';

export const createVariable = async (message: string) => {
  const response = await instance.post('/api/question', {
    message,
  });

  return response.data;
};
