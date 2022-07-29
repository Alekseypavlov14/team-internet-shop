import { FC, MouseEvent, ReactNode } from 'react'
import classNames from 'classnames'
import styles from './Button.module.css'

interface ButtonProps {
  children: ReactNode
  className?: string
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void
  outlined?: boolean
}

export const Button: FC<ButtonProps> = ({ 
  children, 
  className, 
  onClick, 
  outlined 
}) => {
  const buttonClassNames = [
    styles.Button,
    outlined ? styles.Outlined : styles.Filled,
    className
  ]

  return (
    <button 
      className={classNames(buttonClassNames)} 
      onClick={onClick}
    >
      {children}
    </button>
  )
}