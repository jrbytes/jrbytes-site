import { BsPersonLinesFill } from 'react-icons/bs'
import {
  AboutMeCSS,
  Container,
  Article,
  Subtitle,
  PersonalInformation,
  Button,
} from '../../styles/components/aboutme'

import Title from './Title'

import imgPerfil from '../../assets/images/perfil.jpg'

const AboutMe: React.FC = () => {
  return (
    <AboutMeCSS>
      <Container>
        <img src={imgPerfil} alt="Jr Bytes" />

        <Article>
          <Title title="SOBRE MIM" />

          <Subtitle>
            <h3>Eu sou Júnior, apaixonado por programação e formado em ADS</h3>
            <div className="subtitle-element-bottom" />
          </Subtitle>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusm tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi sed do
            eiusm tempor incididunt ut labore et dolore magna.
          </p>

          <PersonalInformation>
            <p>
              <span>Nome:</span> I S M Junior
            </p>
            <p>
              <span>Fone:</span> (73) 98186-0633
            </p>
            <p>
              <span>Idade:</span> 28
            </p>
            <p>
              <span>Endereço:</span> Bahia, Brazil
            </p>

            <BsPersonLinesFill color="#303244" fontSize="35px" />
          </PersonalInformation>

          <Button>Download CV</Button>
        </Article>
      </Container>
    </AboutMeCSS>
  )
}

export default AboutMe
