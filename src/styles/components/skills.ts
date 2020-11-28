import styled from 'styled-components'

export const SkillsCSS = styled.div`
  width: 100%;
  margin-top: 80px;
  padding-top: 65px;

  padding-bottom: 80px;

  background-color: var(--primary-color-light);
`

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
`

export const ContainerSkills = styled.div`
  width: 850px;
  margin: 0 auto;
  margin-top: 56px;

  display: flex;
  flex-direction: row;

  h2 {
    font-size: 20px;
    font-weight: 500;
    color: var(--secondary-color);
  }
`

export const SoftSkills = styled.div`
  width: 425px;
  padding: 30px 25px;
  border-radius: 5px 0 0 5px;
  background-color: var(--primary-color-lighter-transparent);
  border-right: 1px solid var(--primary-color);

  display: flex;
  flex-direction: column;
  align-items: center;
`

export const HardSkills = styled.div`
  width: 425px;
  padding: 30px 25px;
  border-radius: 0 5px 5px 0;
  background-color: var(--primary-color-lighter-transparent);
  border-left: 1px solid var(--primary-color);

  display: flex;
  flex-direction: column;
  align-items: center;
`
