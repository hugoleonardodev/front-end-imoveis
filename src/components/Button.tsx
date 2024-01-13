// Button.tsx
import React from 'react'
import classNames from 'classnames'
import Image, { type StaticImageData } from 'next/image'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  type?: 'button' | 'submit' | 'reset'
  rounded?: boolean
  outlined?: boolean
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  className?: string
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error'
  size?: 'small' | 'medium' | 'large'
  hasIcon?: string | StaticImageData
}

const Button: React.FC<ButtonProps> = ({
  type = 'button',
  rounded,
  outlined,
  onClick,
  className,
  variant = 'primary',
  size,
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
    'h-fit',
    'border',
    {
      'px-2': size === 'small',
      'px-4': size === 'medium',
      'px-6': size === 'large',
      'py-2': size === 'small',
      'py-4': size === 'medium',
      'py-6': size === 'large',
      'rounded-[32px]': rounded,
      'rounded-[78px]': typeof rounded === 'boolean' && variant === 'warning',
      'bg-purple-700': typeof outlined !== 'boolean' && variant === 'primary',
      'bg-green-500': typeof outlined !== 'boolean' && variant === 'success',
      'bg-orange-500': typeof outlined !== 'boolean' && variant === 'warning',
      'bg-red-500': typeof outlined !== 'boolean' && variant === 'error',
      'bg-gray-500': typeof outlined !== 'boolean' && variant === 'secondary',
      'border-purple-700': typeof outlined === 'boolean' && variant === 'primary',
      'border-green-500': typeof outlined === 'boolean' && variant === 'success',
      'border-orange-500': typeof outlined === 'boolean' && variant === 'warning',
      'border-red-500': typeof outlined === 'boolean' && variant === 'error',
      'border-gray-500': typeof outlined === 'boolean' && variant === 'secondary',
      'text-purple-700': typeof outlined === 'boolean' && variant === 'primary',
      'text-gray-500': typeof outlined === 'boolean' && variant === 'secondary',
      'hover:bg-white': typeof outlined !== 'boolean',
      'hover:border-purple-700': typeof outlined !== 'boolean' && (variant === 'primary' || variant === 'secondary'),
      'hover:bg-purple-700': typeof outlined === 'boolean' && (variant === 'primary' || variant === 'secondary'),
      'hover:bg-orange-700': typeof outlined !== 'boolean' && variant === 'warning',
      'hover:text-purple-700': typeof outlined !== 'boolean' && variant === 'primary',
      'hover:border-orange-500': typeof outlined !== 'boolean' && variant === 'warning',
      'hover:border-orange-700': typeof outlined !== 'boolean' && variant === 'warning',
      'hover:text-orange-500': typeof outlined !== 'boolean' && variant === 'warning',
      'hover:text-white': typeof outlined === 'boolean' && (variant === 'primary' || variant === 'secondary'),
    },
    className,
  )

  return (
    <button type={type} onClick={onClick} className={buttonClasses}>
      {typeof hasIcon !== 'undefined' ? <Image src={hasIcon} alt="button-icon" /> : null}
      {children}
    </button>
  )
}

export default Button
