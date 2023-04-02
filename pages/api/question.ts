import { NextApiRequest, NextApiResponse } from 'next';
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!configuration.apiKey) {
    res.status(500).json({
      error: {
        message: 'api key가 올바르지 않습니다.',
      },
    });

    return;
  }

  if (req.method === 'POST') {
    const { message } = req.body;

    if (!message.trim() || message.trim().length > 12) {
      res.status(422).json({ message: '입력값을 확인해주세요.' });
      return;
    }

    try {
      const completion = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        max_tokens: 150,
        messages: [
          {
            role: 'system',
            content: 'You are a proficient developer who recommends programming variables.',
          },
          {
            role: 'user',
            content: `Suggest three variable names in square brackets conveying the meaning of ${message} in camel case in English.`,
          },
        ],
      });

      const text = completion.data.choices[0].message?.content;

      res.status(200).json({ result: text });

      return;
    } catch (err) {
      res.status(422).json({ error: err });
      return;
    }
  }
}

export default handler;
