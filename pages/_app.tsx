import GlobalStyle from '@/lib/styles/Globalstyle';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import '../lib/styles/index.css';
import 'react-toastify/dist/ReactToastify.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import Layout from '@/components/common/Layout';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <Layout>
          <GlobalStyle />
          <Component {...pageProps} />
        </Layout>
      </RecoilRoot>
    </QueryClientProvider>
  );
}
