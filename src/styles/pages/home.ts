import styled from 'styled-components'

export const Menu = styled.header`
  width: 100%;
  height: 80px;
  background-color: var(--primary-color);

  div {
    max-width: 1120px;
    height: 100%;
    margin: 0 auto;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    svg {
      width: 163.97px;
      height: 34.3px;
    }

    svg:last-child {
      width: 32px;
      height: 20px;
      cursor: pointer;
    }
  }
`
