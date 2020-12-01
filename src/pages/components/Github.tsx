import Title from './Title'

import {
  GithubCSS,
  Container,
  ContainerGithub,
} from '../../styles/components/github'

import Vscode from '../../assets/images/vscode.png'

const Github: React.FC = () => {
  return (
    <GithubCSS>
      <Container>
        <Title title="github" />

        <ContainerGithub>
          <img
            src="https://octodex.github.com/images/Fintechtocat.png"
            alt="the Fintechtocat"
          />

          <p>
            <strong>Nick</strong>: <br />
            <strong>Bio</strong>: <br />
            <strong>Repositórios Públicos</strong>: <br />
            <strong>Followers</strong>: <br />
            <strong>Following</strong>: <br />
            <strong>Blog</strong>:
          </p>

          <img src={Vscode} alt="Banner Visual Studio Code" />
        </ContainerGithub>
      </Container>
    </GithubCSS>
  )
}

export default Github
