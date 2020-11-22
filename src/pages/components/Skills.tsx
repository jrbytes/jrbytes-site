import { BsPuzzleFill, BsTerminalFill } from 'react-icons/bs'

import Title from './Title'
import SkillBar from './SkillBar'

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
            <SkillBar name="Comunicação" value={89} />
            <SkillBar name="Trabalho em equipe" value={83} />
            <SkillBar name="Motivação" value={95} />
          </SoftSkills>

          <HardSkills>
            <BsTerminalFill fontSize="32px" color="#303244" />
            <h2>Profissionais</h2>
            <SkillBar name="HTML5 & CSS3" value={95} />
            <SkillBar name="Back-end" value={87} />
            <SkillBar name="Front-end" value={86} />
          </HardSkills>
        </ContainerSkills>
      </Container>
    </SkillsCSS>
  )
}

export default Skills
