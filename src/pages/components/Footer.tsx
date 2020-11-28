import {
  FooterCSS,
  Container,
  Logo,
  ContactMe,
  FollowMe,
} from '../../styles/components/footer'

import Hi from '../../assets/images/logo-binary.svg'

const Footer: React.FC = () => {
  return (
    <FooterCSS>
      <Container>
        <Logo>
          <Hi />
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
        <FollowMe>Siga-me</FollowMe>
      </Container>
    </FooterCSS>
  )
}

export default Footer
