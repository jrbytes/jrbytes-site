import {
  FooterCSS,
  Container,
  Logo,
  ContactMe,
  FollowMe,
} from '../../styles/components/footer'

const Footer: React.FC = () => {
  return (
    <FooterCSS>
      <Container>
        <Logo>Logo</Logo>
        <ContactMe>Contato</ContactMe>
        <FollowMe>Siga-me</FollowMe>
      </Container>
    </FooterCSS>
  )
}

export default Footer
