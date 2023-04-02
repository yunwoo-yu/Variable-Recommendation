import QuestionForm from '@/components/QuestionForm/QuestionForm';
import useModal from '@/hooks/useModal';
import Button from '@/components/common/Button';
import styled from 'styled-components';
import Image from 'next/image';
import WarningIcon from '/public/images/warning-icon.svg';

export default function Home() {
  const { onClickIsToggleModal } = useModal();

  return (
    <Container>
      <Button onClick={onClickIsToggleModal}>
        <Image src={WarningIcon} alt="필독사항 버튼" />
        사용 전 읽어주세요
      </Button>
      <QuestionForm />
    </Container>
  );
}

const Container = styled.section`
  margin: 50px 0;

  > button {
    display: flex;
    margin-left: auto;
    margin-bottom: 24px;
    align-items: center;
    line-height: 24px;
    padding: 4px 16px;
    border-radius: 4px;

    > img {
      margin-right: 8px;
      fill: #ffffff;
      filter: invert(100%) sepia(35%) saturate(1180%) hue-rotate(186deg) brightness(107%)
        contrast(107%);
    }
  }
`;
