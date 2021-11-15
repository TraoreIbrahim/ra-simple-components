import React from 'react'
import styles from './buttons.module.css'

const sizes = {
  small: {
    padding: '8px 16px',
    fontSize: '12px'
  },
  medium: {
    padding: '10px 16px',
    fontSize: '14px'
  },
  large: {
    padding: '13px 22px',
    fontSize: '16px'
  }
}

const btnRadius = {
  default: '4px',
  rounded: '8px',
  full: '30px'
}

export const Button = ({
  label,
  type = 'default',
  onClick,
  icon,
  iconPosition = 'left',
  fontFamily = 'Inter',
  size = 'large',
  radius = 'default',
  marginLeft,
  marginRight,
  marginTop,
  marginBottom,
  margin,
  disabled = false
}) => {
  const params = {
    ...sizes[size],
    fontFamily,
    borderRadius: btnRadius[radius],
    marginLeft,
    marginRight,
    marginTop,
    marginBottom,
    margin
  }
  return (
    <button
      disabled={disabled}
      style={params}
      className={styles[`pa-btn-${type}`]}
      onClick={() => onClick()}
    >
      {iconPosition === 'left' && icon && (
        <img
          style={{ marginRight: '.5rem' }}
          src={icon}
          alt='btn_icon'
          className={styles[`pa-btn-${type}-icon`]}
        />
      )}
      {label}
      {iconPosition === 'right' && icon && (
        <img
          style={{ marginLeft: '.5rem' }}
          src={icon}
          alt='btn_icon'
          className={styles[`pa-btn-${type}-icon`]}
        />
      )}
    </button>
  )
}
