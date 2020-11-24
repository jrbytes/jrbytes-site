import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  margin-top: 15px;

  display: flex;
  flex-direction: column;

  p {
    font-size: 16px;
    font-weight: 700;
    color: var(--primary-color);
    margin-bottom: 6px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`

export const Pointer = styled.span`
  width: 16px;
  font-size: 14px;
  font-weight: 500;
  color: var(--secondary-color);

  background-color: var(--primary-color-light);
  padding: 4px 6px;
  border: 1.5px solid var(--primary-color);
  border-radius: 20px 20px 5px 20px;
  margin-right: ${props => `${(100 - props.percent) * (374 / 100)}px`};
`

export const Bar = styled.div`
  height: 4px;
  border-radius: var(--border-radius);
  background-color: var(--primary-color-light);
  z-index: 0;
`

export const ProgressBar = styled.div`
  margin-top: -4px;
  width: 10px;

  width: ${props => `${props.percent}%`};
  transition: width 1s;

  height: 4px;
  border-radius: var(--border-radius);
  background-color: var(--secondary-color);
  z-index: 1;
`
