import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`

  ${reset}
  body{
    width: 100%;
    height: 100vh;
  }

  #__next{
    height: 100%;
  }

  *{
    box-sizing: border-box;
  }

  main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 800px;
  height: 100%;
  margin: 0 auto;

  >h1{
    font-size: 38px;
    margin-bottom: 3rem;
  }
}


`;

export default GlobalStyle;
