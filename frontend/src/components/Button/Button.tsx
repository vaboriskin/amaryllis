import React from 'react'
import './Button.css'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'small' | 'medium' | 'large'
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  href?: string
  className?: string
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  onClick,
  type = 'button',
  href,
  className = '',
}) => {
  const baseClass = `btn btn-${variant} btn-${size} ${className}`

  if (href) {
    return (
      <a href={href} className={baseClass}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={baseClass} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button

