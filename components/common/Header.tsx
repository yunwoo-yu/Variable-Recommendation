import styled from 'styled-components';

export default function Header() {
  return (
    <Container>
      <HeaderWrapper>
        <h1>변수명을 부탁해</h1>
      </HeaderWrapper>
    </Container>
  );
}

const Container = styled.header`
  background-color: #228be6;

  h1 {
    font-size: 32px;
    color: #ffffff;
  }
`;

const HeaderWrapper = styled.div`
  padding: 24px 0;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;
