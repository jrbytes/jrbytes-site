import Head from 'next/head'

import { Menu, Banner } from '../styles/pages/home'

import AboutMe from './components/AboutMe'
import Skills from './components/Skills'

import useAnimeScroll from './hooks/AnimeScroll'

import Logo from '../assets/images/logo.svg'
import ToggleMenu from '../assets/images/toggle-menu.svg'

const Home: React.FC = () => {
  useAnimeScroll()

  return (
    <>
      <Head>
        <title>Portfólio | Jr Bytes</title>
      </Head>

      <Menu>
        <div>
          <Logo />

          <ToggleMenu />
        </div>
      </Menu>

      <Banner>
        <div>
          <h2>Olá, eu sou Junior Bytes</h2>

          <p>
            Back-end developer
            <span>/</span>
            Front-end developer
            <span>/</span>
            Design & Web
          </p>

          <button type="submit" data-anime="left">
            Contrate-me
          </button>
        </div>
      </Banner>

      <AboutMe />

      <Skills />
    </>
  )
}

export default Home
