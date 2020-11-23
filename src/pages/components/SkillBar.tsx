import {
  Container,
  Pointer,
  Bar,
  ProgressBar,
} from '../../styles/components/skillbar'

interface SkillBarProps {
  name: string
  value: number
}

const SkillBar: React.FC<SkillBarProps> = ({ name, value }) => {
  return (
    <Container>
      <p>
        {name} <Pointer>{value}</Pointer>
      </p>

      <Bar />
      <ProgressBar percent={value} data-anime-percent />
    </Container>
  )
}

export default SkillBar
