import React, { useState } from 'react';
import Button from '../common/Button';
import Image from 'next/image';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import useVariables from '@/hooks/useVariables';

interface Props {
  item: string;
}

export default function FeaturedItem(props: Props) {
  const [iscopySuccess, setIsCopySuccess] = useState(false);
  const { item } = props;
  const { addDoc } = useVariables({ selectVariable: item });

  const copyTextHandler = () => {
    navigator.clipboard.writeText(`const ${item}`);
    setIsCopySuccess(true);
    toast.success('클립보드에 복사 되었습니다.');

    addDoc();
  };

  return (
    <Container>
      <span>const</span> {item}
      <Button onClick={copyTextHandler}>
        <Image
          src={`/images/${iscopySuccess ? 'check-mark-icon.png' : 'copy-icon.png'}`}
          alt="복사 버튼"
          width={24}
          height={24}
        />
      </Button>
    </Container>
  );
}

const Container = styled.li`
  padding: 16px;
  font-size: 24px;
  background-color: #575356;
  margin-bottom: 20px;
  border-radius: 5px;
  color: #4fc2ff;
  display: flex;
  align-items: center;

  > span {
    color: #569cd6;
    margin-right: 4px;
  }

  button {
    margin-left: auto;
    width: 42px;
    height: 42px;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      filter: invert(100%) sepia(35%) saturate(1180%) hue-rotate(186deg) brightness(107%)
        contrast(107%);
    }
  }
`;
