import { useState } from 'react'
import { BsPuzzleFill, BsTerminalFill } from 'react-icons/bs'
import { debounce } from 'lodash'

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
  const [skills, setSkills] = useState({ softskills: false, hardskills: false })
  const [cssEffects, setCssEffects] = useState({
    softskills: '',
    hardskills: '',
  })

  function handleSkills(result) {
    setTimeout(() => {
      setCssEffects({
        softskills: '',
        hardskills: '',
      })
    }, 500)

    if (result === 'soft') {
      const toggle = !skills.softskills
      setSkills({ softskills: toggle, hardskills: skills.hardskills })
      setCssEffects({
        softskills: 'animate__animated animate__headShake',
        hardskills: cssEffects.hardskills,
      })
    } else {
      const toggle = !skills.hardskills
      setSkills({ softskills: skills.softskills, hardskills: toggle })
      setCssEffects({
        softskills: cssEffects.softskills,
        hardskills: 'animate__animated animate__headShake',
      })
    }
  }

  return (
    <SkillsCSS>
      <Container>
        <Title title="habilidades" />

        <ContainerSkills>
          <SoftSkills data-anime="left">
            <BsPuzzleFill
              onMouseOver={debounce(() => handleSkills('soft'), 200)}
              onMouseLeave={debounce(() => handleSkills('soft'), 500)}
              fontSize="32px"
              color="#303244"
            />
            <h2 className={cssEffects.softskills}>
              {!skills.softskills ? `Pessoais` : `Soft Skills`}
            </h2>
            <SkillBar name="Comunicação" value={89} />
            <SkillBar name="Trabalho em equipe" value={83} />
            <SkillBar name="Motivação" value={95} />
          </SoftSkills>

          <HardSkills data-anime="right">
            <BsTerminalFill
              onMouseOver={debounce(() => handleSkills('hard'), 200)}
              onMouseLeave={debounce(() => handleSkills('hard'), 500)}
              fontSize="32px"
              color="#303244"
            />
            <h2 className={cssEffects.hardskills}>
              {!skills.hardskills ? `Profissionais` : `Hard Skills`}
            </h2>
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
