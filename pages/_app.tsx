import GlobalStyle from '@/styles/Globalstyle';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import '../styles/index.css';
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <Component {...pageProps} />
    </RecoilRoot>
  );
}
