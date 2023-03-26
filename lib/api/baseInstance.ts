import axios from 'axios';

export const apiKey = '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';
export const url = 'https://api.openai.com/';
export const model = 'gpt-3.5-turbo';

export const instance = axios.create({
  baseURL: url,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${apiKey}`,
  },
});
