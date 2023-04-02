import useModal from '@/hooks/useModal';
import Image from 'next/image';
import styled, { keyframes } from 'styled-components';
import Button from './Button';
import CloseIcon from '/public/images/close-icon.svg';

export default function Modal() {
  const { onClickIsToggleModal, isAnimation } = useModal();

  return (
    <Container className={isAnimation ? 'active' : ''}>
      <button type="button" onClick={onClickIsToggleModal}>
        <Image src={CloseIcon} alt="닫기 버튼" />
      </button>
      <strong>❗️ 필독사항</strong>
      <ul>
        <li>
          해당 API는 무료가 아닙니다. 무료지급 크레딧이 끝나면 서비스가 중지될 수 있습니다.
          <br />
          (주니어로 취업하면 서비스를 사비로 이어나갈 예정입니다. <span>저를 채용하세요🥹</span>)
        </li>
        <li>
          악용될 우려가 있기에 너무 긴 문장이 요구되는 경우 요청이 실패할 수 있습니다. <br />
          (입력제한 12자)
        </li>
        <li>아직 미완성의 프로젝트로 MVP 단계입니다. 😅</li>
        <li>피드백이 있으신 경우 하단의 메일을 통해 보내주세요 언제든 환영입니다 :)</li>
      </ul>
      <strong>💁🏻‍♂️ 서비스 이용법</strong>
      <ul>
        <li>궁금한 변수명에 대한 정보를 입력하고 기다리시면 3가지의 변수명을 추천해줍니다! wow</li>
        <li>원하시는 변수명을 복사하여 사용하시면 됩니다 😎</li>
        <li>다른 개발자들의 선택이 궁금하시다면, 검색페이지를 이용해보세요! (미구현)</li>
      </ul>
    </Container>
  );
}

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translate(-50%,-50%);
  }
  100% {
    opacity: 1;
    transform: translate(-50%,-55%);
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
    transform: translate(-50%,-55%);
  }
  100% {
    opacity: 0;
    transform: translate(-50%,-50%);
  }
`;

const Container = styled.article`
  width: 600px;
  padding: 34px;
  position: absolute;
  border-radius: 10px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--main-color);
  color: #ffffff;
  animation: ${fadeIn} 0.25s ease-out forwards;
  border: 2px solid #22679e;

  &.active {
    animation: ${fadeOut} 0.25s ease-out forwards;
  }

  ul {
    list-style-type: disc;
    padding-left: 14px;
    font-size: 14px;
    li {
      margin-bottom: 14px;
      line-height: 18px;

      &:last-child {
        margin-bottom: 0;
      }
      span {
        text-decoration: line-through;
      }
    }
  }

  strong {
    display: block;
    font-weight: bold;
    font-size: 18px;
    margin: 20px 0;

    &:first-of-type {
      margin: 0 0 20px;
    }
  }

  > button {
    position: absolute;
    width: 24px;
    height: 24px;
    right: 10px;
    top: 10px;
    padding: 0;
    margin: 0;
    border-radius: 50%;
    border: none;
    background-color: transparent;
    cursor: pointer;

    &:hover {
      background: #339af0;
    }

    > img {
      filter: invert(100%) sepia(35%) saturate(1180%) hue-rotate(186deg) brightness(107%)
        contrast(107%);
    }
  }
`;
