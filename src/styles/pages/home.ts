import styled from 'styled-components'
import banner from '../../assets/images/banner.jpg'

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

export const Banner = styled.div`
  width: 100%;
  height: 500px;
  background: no-repeat center;
  background-image: url(${banner});

  div {
    max-width: 980px;
    height: 100%;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    h2 {
      color: var(--primary-color);
      font-weight: bold;
      font-size: 32px;
    }

    p {
      padding: 13px 30px;
      background-color: rgba(48, 50, 68, 0.5);
      border-radius: var(--border-radius);
      margin-top: 33px;

      font-size: 18px;
      color: var(--primary-color);

      span {
        margin: 0 10px;
        color: var(--secondary-color);
      }
    }

    button {
      font-weight: bold;
      background-color: var(--secondary-color);
      cursor: pointer;

      margin-top: 33px;
    }
  }
`
