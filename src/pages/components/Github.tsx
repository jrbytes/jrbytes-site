import { useEffect, useState } from 'react'
import Title from './Title'

import {
  GithubCSS,
  Container,
  ContainerGithub,
} from '../../styles/components/github'

import Vscode from '../../assets/images/vscode.png'

interface IGithubProps {
  login: string
  avatar_url: string
  bio: string
  blog: string
  followers: number
  following: number
  public_repos: number
}

const Github: React.FC = () => {
  const [githubData, setGithubData] = useState({})

  useEffect(() => {
    function loadGithubData() {
      fetch('https://api.github.com/users/jrbytes')
        .then(res => res.json())
        .then(res => setGithubData(res))
    }

    loadGithubData()
  }, [])

  const {
    login,
    avatar_url,
    bio,
    blog,
    followers,
    following,
    public_repos,
  } = githubData as IGithubProps

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
            <strong>Nick</strong>: {login}
            <br />
            <strong>Bio</strong>: {bio}
            <br />
            <strong>Repositórios Públicos</strong>: {public_repos}
            <br />
            <strong>Followers</strong>: {followers}
            <br />
            <strong>Following</strong>: {following}
            <br />
            <strong>Blog</strong>: <a href={`https://${blog}`}>{blog}</a>
          </p>

          <img src={Vscode} alt="Banner Visual Studio Code" />
        </ContainerGithub>
      </Container>
    </GithubCSS>
  )
}

export default Github
