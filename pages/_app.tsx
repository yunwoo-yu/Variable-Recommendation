import GlobalStyle from '@/lib/styles/Globalstyle';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import '../lib/styles/index.css';
import 'react-toastify/dist/ReactToastify.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import Layout from '@/components/common/Layout';
import Head from 'next/head';

const metaData = {
  title: '변수명을 부탁해 - 변수명 추천 사이트',
  description: '입력받은 텍스트의 변수명을 추천해주는 사이트입니다.',
  image: '/images/thumbnail.png',
  width: '1200',
  height: '630',
  keyword: '변수, 개발자, 변수명, 추천, 생성',
};

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>변수명을 부탁해</title>
        <meta name="description" content={metaData.description} />
        <meta name="keywords" content={metaData.keyword} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://variable-recommendation.vercel.app/" />
        <meta property="og:title" content={metaData.title} />
        <meta property="og:description" content={metaData.description} />
        <meta property="og:image" content={metaData.image} />
        <meta property="og:image:alt" content={metaData.title} />
        <meta property="og:image:width" content={metaData.width} />
        <meta property="og:image:height" content={metaData.height} />
        <meta property="og:site_name" content={metaData.title} />
        <meta property="og:locale" content="ko_KR" />
        <meta
          name="google-site-verification"
          content="KFtgGC_BCD7osA7pSUH0OqT5LReFtrUOUhNNn_CvF7U"
        />
        <meta name="naver-site-verification" content="4d356cf99752ec8d5c3ce92e9f11945bdcb7d1e9" />
      </Head>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <Layout>
            <GlobalStyle />
            <Component {...pageProps} />
          </Layout>
        </RecoilRoot>
      </QueryClientProvider>
    </>
  );
}
