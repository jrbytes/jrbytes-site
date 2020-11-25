import {
  ContainerTitle,
  TitleText,
  ElementOne,
  ElementTwo,
  ElementThree,
} from '../../styles/components/title'

import useToggleEffect from '../hooks/ToggleEffect'

interface TitleProps {
  title: string
}

const Title: React.FC<TitleProps> = ({ title }) => {
  const [conditional, toggleEffect] = useToggleEffect()

  return (
    <ContainerTitle data-anime="top">
      <ElementOne
        onMouseOver={toggleEffect}
        onMouseLeave={toggleEffect}
        expand={conditional}
      />
      <TitleText>{title.toUpperCase()}</TitleText>
      <ElementTwo />
      <ElementThree />
    </ContainerTitle>
  )
}

export default Title
