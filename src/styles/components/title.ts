import styled from 'styled-components'

export const ContainerTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`

export const TitleText = styled.h2`
  font-size: 28px;
  font-weight: 500;
  margin-left: -57px;
  color: var(--secondary-color);
  z-index: 1;
`

export const ElementOne = styled.div`
  width: ${props => (props.expand === false ? '114px' : '180px')};
  height: 49px;
  margin: 0;
  background-color: var(--primary-color-lighter);
  opacity: ${props => (props.expand === false ? '50%' : '100%')};
  z-index: 0;

  transition: width 0.3s, opacity 0.3s;
`

export const ElementTwo = styled.div`
  width: 110px;
  height: 0px;
  margin: 0 0 -0.75px 15.5px;
  border-top: 2.5px dashed var(--primary-color-lighter);
`

export const ElementThree = styled.div`
  width: 8px;
  height: 8px;
  background-color: var(--secondary-color);
  margin: 0;
  border: 4px solid var(--primary-color-lighter);
  border-radius: 50%;
`
