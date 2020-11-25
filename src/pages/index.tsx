import Head from 'next/head'

import { Menu } from '../styles/pages/home'

import Banner from './components/Banner'
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

      <Banner />

      <AboutMe />

      <Skills />
    </>
  )
}

export default Home
