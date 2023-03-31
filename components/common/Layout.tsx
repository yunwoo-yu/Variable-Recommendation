import { ReactNode } from 'react';
import { ToastContainer } from 'react-toastify';
import styled from 'styled-components';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <Container>{children}</Container>
      <Footer />
      <ToastContainer
        position="top-center"
        theme="light"
        autoClose={1000}
        pauseOnFocusLoss={false}
        limit={1}
      />
    </>
  );
}

const Container = styled.main`
  max-width: 800px;
  margin: 42px auto;
`;
