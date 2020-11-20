import styled from 'styled-components'

export const AboutMeCSS = styled.div`
  width: 100%;
  margin-top: 107px;
`

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  display: flex;
  flex-direction: row;

  img {
    width: 386px;
    height: 486px;
    border-radius: 10px;
    border-top: 3px solid var(--secondary-color);
    border-left: 3px solid var(--secondary-color);

    padding-top: 20px;
    padding-left: 20px;

    margin-top: -20px;
    margin-left: -20px;

    margin-right: 52px;
  }
`

export const Article = styled.article`
  width: 643px;

  p {
    font-size: 16px;
    color: var(--primary-color-light);

    margin-top: 30px;
  }
`

export const Subtitle = styled.div`
  display: flex;
  flex-direction: column !important;

  h3 {
    width: 453px;
    font-size: 26px;
    font-weight: 500;
    color: var(--text-color-base);

    margin-top: 42px;
  }

  div.subtitle-element-bottom {
    width: 90px;
    height: 4px;
    background-color: var(--secondary-color);

    margin: 20px 0 0 0;
  }
`

export const PersonalInformation = styled.div`
  background-color: var(--primary-color-light);
  border-radius: var(--border-radius);
  margin-top: 30px;
  padding: 17px 30px;

  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  height: 60px;
  align-content: space-between;

  p {
    font-size: 18px;
    font-weight: 500;
    line-height: 30px;
    color: var(--text-color-base);
    margin: 0;

    span {
      color: var(--secondary-color);
    }
  }
`

export const Button = styled.button`
  margin-top: 17px;
`
