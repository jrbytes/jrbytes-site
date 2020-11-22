import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    --primary-color: #303244;
    --primary-color-light: #3C3F51;
    --primary-color-lighter: #686d82;
    --primary-color-lighter-transparent: rgba(104,109,130,.5);
    --secondary-color: #2DEFCE;
    --text-color-primary: #303244;
    --text-color-secondary: #2DEFCE;
    --text-color-base: #FFFFFF;
    --border-radius: 5px;
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

  body, input, select, button, textarea {
    font: 400 16px 'Fira Code';
    color: var(--text-color-base);
  }

  button {
    background-color: var(--secondary-color);
    outline: none;
    border: none;
    padding: 12px 34px;
    border-radius: var(--border-radius);
    font-size: 20px;
    font-weight: 500;
    color: var(--primary-color);
    cursor: pointer;
  }
`
