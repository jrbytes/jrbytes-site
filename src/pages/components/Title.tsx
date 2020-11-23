import { useState } from 'react'
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
  const [expand, setExpand] = useState(false)

  function toggleEffect() {
    const toggle = !expand
    setExpand(toggle)
  }

  return (
    <ContainerTitle data-anime="top">
      <ElementOne
        onMouseOver={toggleEffect}
        onMouseLeave={toggleEffect}
        expand={expand}
      />
      <TitleText>{title.toUpperCase()}</TitleText>
      <ElementTwo />
      <ElementThree />
    </ContainerTitle>
  )
}

export default Title
