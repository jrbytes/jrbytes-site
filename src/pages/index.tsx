import Head from 'next/head'

import Menu from './components/Menu'
import Banner from './components/Banner'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Footer from './components/Footer'

import useAnimeScroll from './hooks/AnimeScroll'

import 'animate.css'

const Home: React.FC = () => {
  useAnimeScroll()

  return (
    <>
      <Head>
        <title>Portfólio | Jr Bytes</title>
      </Head>

      <Menu />

      <Banner />

      <AboutMe />

      <Skills />

      <Footer />
    </>
  )
}

export default Home
