import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    --primary-color: #303244;
    --secondary-color: #2DEFCE;
    --text-color-primary: #303244;
    --text-color-secondary: #2DEFCE;
    --text-color-base: #FFFFFF;
  }

  * {
    margin: 0;
    padding: 0;
  }

  body {
    background: var(--primary-color);
    color: var(--text-color-base);
    font-family: 'Fira Code', monospace;
  }
`
