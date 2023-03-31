import FeaturedList from '@/components/FeaturedList/FeaturedList';
import Footer from '@/components/Footer/Footer';
import QuestionForm from '@/components/QuestionForm/QuestionForm';
import Head from 'next/head';
import { ToastContainer } from 'react-toastify';

export default function Home() {
  return (
    <>
      <Head>
        <title>변수명을 부탁해</title>
      </Head>
      <QuestionForm />
    </>
  );
}
