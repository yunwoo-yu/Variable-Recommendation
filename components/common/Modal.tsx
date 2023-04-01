import styled from 'styled-components';

export default function Modal() {
  return <Container>Modalzzzzzzzzzzzzz</Container>;
}

const Container = styled.article`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--main-color);
`;
