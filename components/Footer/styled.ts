import styled from 'styled-components';

const FooterWrapper = styled.footer`
  width: 100%;
  max-width: 800px;
  margin: 24px auto 24px;
  text-align: center;

  ul {
    display: flex;
    justify-content: center;
    gap: 24px;
    margin-bottom: 24px;

    li {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  small {
  }
`;

export default FooterWrapper;
