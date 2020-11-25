import { MenuCSS } from '../../styles/components/menu'

import Logo from '../../assets/images/logo.svg'
import ToggleMenu from '../../assets/images/toggle-menu.svg'

const Menu: React.FC = () => {
  return (
    <MenuCSS>
      <div>
        <Logo />

        <ToggleMenu />
      </div>
    </MenuCSS>
  )
}

export default Menu
