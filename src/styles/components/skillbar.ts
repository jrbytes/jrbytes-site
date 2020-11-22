import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  margin-top: 15px;

  display: flex;
  flex-direction: column;

  p {
    font-size: 16px;
    font-weight: 500;
    color: var(--primary-color);

    margin-bottom: 12px;
  }
`

export const Pointer = styled.span`
  width: 16px;
  font-size: 14px;
  color: var(--secondary-color);

  background-color: var(--primary-color);
  padding: 4px 6px;
  border-radius: var(--border-radius);
`

export const Bar = styled.div`
  height: 4px;
  border-radius: var(--border-radius);
  background-color: var(--primary-color);
  z-index: 0;
`

export const ProgressBar = styled.div`
  margin-top: -4px;
  width: ${props => `${props.percent}%`};

  height: 4px;
  border-radius: var(--border-radius);
  background-color: var(--secondary-color);
  z-index: 1;
`
