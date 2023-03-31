import Link from 'next/link';
import styled from 'styled-components';

export default function Header() {
  return (
    <Container>
      <HeaderWrapper>
        <h1>변수명을 부탁해</h1>
        <nav>
          <ul>
            <li>
              <Link href="/">홈</Link>
            </li>
            <li>
              <Link href="/feedback">피드백</Link>
            </li>
          </ul>
        </nav>
      </HeaderWrapper>
    </Container>
  );
}

const Container = styled.header`
  background-color: #228be6;
  color: #ffffff;
  padding: 12px 0;

  h1 {
    font-size: 32px;
  }

  nav {
    ul {
      display: flex;
      gap: 24px;
      align-items: center;

      li {
        a {
          color: inherit;
        }
      }
    }
  }
`;

const HeaderWrapper = styled.div`
  padding: 12px 0;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
