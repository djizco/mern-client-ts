import React from 'react';

import classNames from 'classnames';

export interface PropMap {
  [key: string]: string;
}

const typeMap: PropMap = {
  info: 'is-info',
  primary: 'is-primary',
  success: 'is-success',
  warning: 'is-warning',
  danger: 'is-danger',
};

const sizeMap: PropMap = {
  small: 'is-small',
  normal: '',
  medium: 'is-medium',
  large: 'is-large',
};

export interface ButtonProps {
  className?: string;
  style?: Object;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  label?: string;
  type?: string;
  size?: string;
  outlined?: boolean;
  inverted?: boolean;
  rounded?: boolean;
  hovered?: boolean;
  focused?: boolean;
  active?: boolean;
  loading?: boolean;
  static?: boolean;
  disabled?: boolean;
}

export default function Button({
  className = '',
  onClick,
  label = '',
  style,
  type = 'info',
  size = 'normal',
  outlined,
  inverted,
  rounded,
  hovered,
  focused,
  active,
  loading,
  disabled,
  ...rest
}: ButtonProps) {
  const isType = typeMap[type] || 'is-info';
  const isSize = sizeMap[size] || '';

  const buttonClasses = classNames({
    [className]: !!className,
    'button': true,
    [isType]: true,
    [isSize]: true,
    'is-outlined': outlined,
    'is-inverted': inverted,
    'is-rounded': rounded,
    'is-hovered': hovered,
    'is-focused': focused,
    'is-active': active,
    'is-loading': loading,
    'is-static': rest.static,
  });

  return (
    <button
      style={style}
      type="button"
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
}
