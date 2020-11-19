import { Menu, Banner } from '../styles/pages/home'

import Logo from '../assets/images/logo.svg'
import ToggleMenu from '../assets/images/toggle-menu.svg'

const Home: React.FC = () => {
  return (
    <>
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

          <button type="submit">Contrate-me</button>
        </div>
      </Banner>
    </>
  )
}

export default Home
