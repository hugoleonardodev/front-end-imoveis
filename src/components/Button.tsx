// Button.tsx
import React from 'react'
import classNames from 'classnames'
import Image from 'next/image'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  type?: 'button' | 'submit' | 'reset'
  rounded?: boolean
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  className?: string
  variant?: 'outlined' | 'primary' | 'secondary' | 'success' | 'warning' | 'error'
  size?: 'small' | 'medium' | 'large'
  hasIcon?: string
}

const Button: React.FC<ButtonProps> = ({
  type = 'button',
  rounded,
  onClick,
  className,
  variant = 'primary',
  size = 'medium',
  hasIcon,
  children,
}) => {
  const buttonClasses = classNames(
    'rounded-[10px]',
    'focus:outline-none',
    'transition',
    'duration-300',
    'ease-in-out',
    'text-white',
    'font-semibold',
    'py-2',
    {
      'px-2': size === 'small',
      'px-4': size === 'medium',
      'px-6': size === 'large',
      'rounded-[32px]': rounded,
      'bg-purple-700': variant === 'primary',
      'bg-green-500': variant === 'success',
      'bg-orange-500': variant === 'warning',
      'bg-red-500': variant === 'error',
      'bg-gray-500': variant === 'secondary',
      border: variant === 'outlined',
      'border-purple-700': variant === 'outlined' && variant === 'primary',
      'border-green-500': variant === 'outlined' && variant === 'success',
      'border-orange-500': variant === 'outlined' && variant === 'warning',
      'border-red-500': variant === 'outlined' && variant === 'error',
      'border-gray-500': variant === 'outlined' && variant === 'secondary',
    },
    className,
  )

  return (
    <button type={type} onClick={onClick} className={buttonClasses}>
      {typeof hasIcon === 'string' ? <Image src={hasIcon} alt={hasIcon} /> : null}
      {children}
    </button>
  )
}

export default Button
