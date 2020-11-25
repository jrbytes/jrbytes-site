import { useState } from 'react'

function ToggleEffect(): (boolean | (() => void))[] {
  const [conditional, setConditional] = useState(false)

  function toggleEffect() {
    const toggle = !conditional
    setConditional(toggle)
  }

  return [conditional, toggleEffect]
}

export default ToggleEffect
