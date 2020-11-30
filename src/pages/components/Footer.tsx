import { IoLogoGithub } from 'react-icons/io'
import { FaDev, FaLinkedin, FaInstagramSquare } from 'react-icons/fa'

import {
  FooterCSS,
  Container,
  Logo,
  ContactMe,
  FollowMe,
  Copyright,
} from '../../styles/components/footer'

import LogoBinary from '../../assets/images/logo-binary.svg'

const Footer: React.FC = () => {
  return (
    <FooterCSS>
      <Container>
        <Logo>
          <LogoBinary />
        </Logo>
        <ContactMe>
          <p>
            E-mail: <a href="mailto:bytesjr@gmail.com">bytesjr@gmail.com</a>
          </p>
          <p>
            Whatsapp:{' '}
            <a href="https://wa.me/5573981860633" target="_blank">
              (73) 98186 0633
            </a>
          </p>
        </ContactMe>
        <FollowMe>
          <a href="https://github.com/jrbytes" target="_blank">
            <IoLogoGithub fontSize="30px" />
            <p>jrbytes</p>
          </a>

          <a
            href="https://www.linkedin.com/in/itamar-santos-monteiro-junior-706045150/"
            target="_blank"
          >
            <FaLinkedin fontSize="30px" />
            <p>{`{name}-{number}`}</p>
          </a>

          <a href="https://dev.to/jrbytes" target="_blank">
            <FaDev fontSize="30px" />
            <p>jrbytes</p>
          </a>

          <a href="https://www.instagram.com/jrbytes/" target="_blank">
            <FaInstagramSquare fontSize="30px" />
            <p>jrbytes</p>
          </a>
        </FollowMe>
      </Container>
      <Copyright>
        Copyright © 2020 | Jr Bytes | Live long and proper. 🖖🏻
      </Copyright>
    </FooterCSS>
  )
}

export default Footer
