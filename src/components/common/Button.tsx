import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'filled' | 'outline' | 'light' | 'icon-pill' | 'inline-link';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'filled',
  size = 'md',
  fullWidth = false,
  icon,
  iconPosition = 'right',
  className = '',
  ...props
}) => {
  const baseStyles =
    'type-button inline-flex items-center justify-center gap-3 whitespace-nowrap transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primaryText/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed';

  const variants = {
    filled:
      'rounded-full border border-transparent bg-brand-primaryText text-brand-background shadow-sm hover:bg-brand-secondaryText disabled:bg-brand-disabledBg disabled:text-brand-disabledText',
    outline:
      'rounded-full border border-brand-primaryText bg-transparent text-brand-primaryText hover:bg-brand-primaryText hover:text-brand-background disabled:border-brand-disabledBg disabled:text-brand-disabledBg',
    light:
      'rounded-full border border-white/70 bg-brand-background text-brand-primaryText hover:border-brand-primaryText hover:bg-brand-primaryText hover:text-brand-background disabled:border-brand-disabledBg disabled:bg-brand-disabledBg disabled:text-brand-disabledText',
    'icon-pill':
      'rounded-full border border-transparent bg-brand-primaryText text-brand-background shadow-sm hover:bg-brand-secondaryText disabled:bg-brand-disabledBg disabled:text-brand-disabledText',
    'inline-link':
      'rounded-none border-0 bg-transparent p-0 text-brand-primaryText hover:underline hover:underline-offset-4 disabled:text-brand-disabledBg',
  };

  const sizes = {
    sm: 'min-h-[40px] px-5 py-2',
    md: 'min-h-[46px] px-7 py-2.5',
    lg: 'min-h-[52px] px-8 py-3',
  };

  const iconWrap =
    variant === 'icon-pill'
      ? 'inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-background text-brand-primaryText'
      : 'inline-flex items-center justify-center';

  const arrowIcon = (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-5-5 5 5-5 5" />
    </svg>
  );

  const resolvedIcon = icon ?? (variant === 'icon-pill' || variant === 'inline-link' ? arrowIcon : null);
  const hasIcon = Boolean(resolvedIcon);
  const sizeClass = variant === 'inline-link' ? '' : sizes[size];
  const widthStyle = fullWidth ? 'w-full' : '';

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizeClass} ${widthStyle} ${className}`}
      {...props}
    >
      {hasIcon && iconPosition === 'left' && <span className={iconWrap}>{resolvedIcon}</span>}
      {children}
      {hasIcon && iconPosition === 'right' && <span className={iconWrap}>{resolvedIcon}</span>}
    </button>
  );
};

export default Button;
