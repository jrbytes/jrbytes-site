import { BsPuzzleFill, BsTerminalFill } from 'react-icons/bs'

import Title from './Title'

import {
  SkillsCSS,
  Container,
  ContainerSkills,
  SoftSkills,
  HardSkills,
} from '../../styles/components/skills'

const Skills: React.FC = () => {
  return (
    <SkillsCSS>
      <Container>
        <Title title="habilidades" />

        <ContainerSkills>
          <SoftSkills>
            <BsPuzzleFill fontSize="32px" color="#303244" />
            <h2>Pessoais</h2>
            <p>Comunicação</p>
            <p>Trabalho em equipe</p>
            <p>Motivação</p>
          </SoftSkills>

          <HardSkills>
            <BsTerminalFill fontSize="32px" color="#303244" />
            <h2>Profissionais</h2>
            <p>HTML5 & CSS3</p>
            <p>Back-end</p>
            <p>Front-end</p>
          </HardSkills>
        </ContainerSkills>
      </Container>
    </SkillsCSS>
  )
}

export default Skills
