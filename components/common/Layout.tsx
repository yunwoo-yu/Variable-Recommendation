import useModal from '@/hooks/useModal';
import { ReactNode } from 'react';
import { ToastContainer } from 'react-toastify';
import styled from 'styled-components';
import Footer from './Footer';
import Header from './Header';
import Modal from './Modal';

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  const { isShowModal } = useModal();

  return (
    <>
      <Header />
      <Container>{children}</Container>
      <Footer />
      {isShowModal && <Modal />}
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
  margin: 0 auto;
`;
