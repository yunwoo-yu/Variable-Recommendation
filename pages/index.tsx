import FeaturedList from '@/components/FeaturedList/FeaturedList';
import QuestionForm from '@/components/QuestionForm/QuestionForm';
import Head from 'next/head';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';

export default function Home() {
  const [result, setResult] = useState<string[]>([]);

  return (
    <>
      <Head>
        <title>변수명을 부탁해</title>
      </Head>
      <main>
        <h1>변수명을 부탁해</h1>
        <QuestionForm />
        <FeaturedList />
      </main>
      <ToastContainer
        position="top-center"
        theme="light"
        autoClose={1500}
        pauseOnFocusLoss={false}
        limit={1}
      />
    </>
  );
}
