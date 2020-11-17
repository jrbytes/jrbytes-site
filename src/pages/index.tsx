import { Menu } from '../styles/pages/home'

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
    </>
  )
}

export default Home
