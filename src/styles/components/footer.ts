import styled from 'styled-components'

export const FooterCSS = styled.div`
  width: 100%;
  padding: 35px 0 30px 0;
`

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
`

export const Logo = styled.div`
  width: 100%;
`

export const ContactMe = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  p {
    font-size: 16px;
    color: var(--secondary-color);

    a {
      text-decoration: none;
      color: var(--text-color-base);
    }
  }
`

export const FollowMe = styled.div`
  width: 100%;
`
