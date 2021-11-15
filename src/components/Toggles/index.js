import React from 'react'
import styles from './toggles.module.css'
const Toggles = ({ active, setActive, model }) => {
  return (
    <button
      className={[styles[model], styles.default]}
      onClick={() => setActive(!active)}
    >
      <span />
    </button>
  )
}

export default Toggles
