import React, { useState } from 'react';
import Button from '../common/Button';
import FeaturedItemWrapper from './styled';
import CopyIcon from '../../lib/assets/copy-icon.png';
import SuccessIcon from '../../lib/assets/check-mark-icon.png';
import Image from 'next/image';
import { toast } from 'react-toastify';

interface Props {
  item: string;
}

export default function FeaturedItem(props: Props) {
  const [iscopySuccess, setIsCopySuccess] = useState(false);
  const { item } = props;

  const copyTextHandler = (text: string) => {
    navigator.clipboard.writeText(`const ${text}`);
    setIsCopySuccess(true);
    toast.success('클립보드에 복사 되었습니다.');
  };

  return (
    <FeaturedItemWrapper>
      <span>const</span> {item}
      <Button onClick={() => copyTextHandler(item)}>
        <Image
          src={iscopySuccess ? SuccessIcon : CopyIcon}
          alt="복사 버튼"
          width={24}
          height={24}
        />
      </Button>
    </FeaturedItemWrapper>
  );
}
