import React from 'react'
import cn from 'classnames'
import 'lu2/theme/pure/css/common/ui/Button.css'

type buttonType = 'primary' | 'success' | 'warning' | 'danger'
type buttonVariant = 'input' | 'a' | 'label' | 'span' | 'div' | 'button'

const Button = ({ children, disabled, type, fullWidth, loading, variant = 'button', href }: {
  children: string;
  disabled?: boolean;
  type?: buttonType;
  fullWidth?: boolean;
  loading?: boolean;
  variant?: buttonVariant;
  href?: string;
}) => {
  const El = variant
  const isButtonButton = variant === 'button'
  const isInputButton = variant === 'input'
  const isAButton = variant === 'a'
  return (
    <El
      width={fullWidth ? '100%' : undefined}
      className={cn('ui-button', { loading: loading, disabled: (isAButton) ? disabled : undefined })}
      disabled={(isButtonButton || isInputButton) ? disabled : undefined}
      data-type={type}
      role={isAButton ? 'button' : undefined}
      href={(isAButton && !disabled) ? href : undefined}
      type={isInputButton ? 'button' : undefined}
      value={isInputButton ? children : undefined}
      // eslint-disable-next-line react/no-children-prop
      children={isInputButton ? undefined : children}
    />
  )
}

export default Button
