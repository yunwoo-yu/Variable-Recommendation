import React from 'react';
import FooterWrapper from './styled';
import GithubIcon from '../../lib/assets/github-icon.svg';
import MailIcon from '../../lib/assets/mail-icon.svg';
import BlogIcon from '../../lib/assets/blog-icon.png';
import Image from 'next/image';

export default function Footer() {
  return (
    <FooterWrapper>
      <address>
        <ul>
          <li>
            <a href="https://github.com/yunwoo-yu" target="_blank">
              <Image src={GithubIcon} width={48} alt="깃허브 아이콘" />
            </a>
          </li>
          <li>
            <a href="mailto:skypnal12@gmail.com?subject=안녕하세요." target="_blank">
              <Image src={MailIcon} width={48} alt="메일 아이콘" />
            </a>
          </li>
          <li>
            <a href="https://frontend-development.tistory.com/" target="_blank">
              <Image src={BlogIcon} width={48} alt="블로그 아이콘" />
            </a>
          </li>
        </ul>
      </address>
      <small>© 2023 YunCow All rights reserved.</small>
    </FooterWrapper>
  );
}
