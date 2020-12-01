import styled from 'styled-components'

export const GithubCSS = styled.div`
  width: 100%;

  padding-top: 65px;
  padding-bottom: 80px;

  border-bottom: 1px solid var(--secondary-color);
`

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
`

export const ContainerGithub = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  p {
    margin-left: -50px;
    font-size: 12px;
    line-height: 30px;
    color: var(--secondary-color);
  }

  img:first-child {
    width: 300px;
    height: 300px;
  }

  img:last-child {
    width: 566px;
    height: 365px;
    filter: drop-shadow(20px 0px 40px rgba(0, 0, 0, 0.25));
    transform: perspective(600px) rotateY(-20deg);
  }
`
