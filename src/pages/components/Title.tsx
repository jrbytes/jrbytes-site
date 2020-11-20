import {
  ContainerTitle,
  TitleText,
  ElementOne,
  ElementTwo,
  ElementThree,
} from '../../styles/components/title'

interface TitleProps {
  title: string
}

const Title: React.FC<TitleProps> = ({ title }) => {
  return (
    <ContainerTitle>
      <ElementOne />
      <TitleText>{title.toUpperCase()}</TitleText>
      <ElementTwo />
      <ElementThree />
    </ContainerTitle>
  )
}

export default Title
