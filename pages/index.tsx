import FeaturedList from '@/components/FeaturedList/FeaturedList';
import QuestionForm from '@/components/QuestionForm/QuestionForm';
import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
  const [result, setResult] = useState<string[]>([]);

  return (
    <>
      <Head>
        <meta title='' />
      </Head>
      <div>
        <QuestionForm />
        <FeaturedList />
      </div>
    </>
  );
}
