import Image from 'next/image';
import styled from 'styled-components';

export default function Footer() {
  return (
    <Container>
      <address>
        <ul>
          <li>
            <a href="https://github.com/yunwoo-yu" target="_blank">
              <Image src={`/images/github-icon.svg`} width={48} height={48} alt="깃허브 아이콘" />
            </a>
          </li>
          <li>
            <a href="mailto:skypnal12@gmail.com?subject=안녕하세요." target="_blank">
              <Image src={`/images/mail-icon.svg`} width={48} height={48} alt="메일 아이콘" />
            </a>
          </li>
          <li>
            <a href="https://frontend-development.tistory.com/" target="_blank">
              <Image src={`/images/blog-icon.png`} width={48} height={48} alt="블로그 아이콘" />
            </a>
          </li>
        </ul>
      </address>
      <small>© 2023 YunCow All rights reserved.</small>
    </Container>
  );
}

const Container = styled.footer`
  width: 100%;
  text-align: center;
  background-color: #569cd6;
  padding: 40px 0;

  ul {
    display: flex;
    justify-content: center;
    gap: 24px;
    margin-bottom: 24px;

    li {
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        filter: invert(100%) sepia(35%) saturate(1180%) hue-rotate(186deg) brightness(107%)
          contrast(107%);
      }
    }
  }

  small {
    color: #fff;
  }
`;
