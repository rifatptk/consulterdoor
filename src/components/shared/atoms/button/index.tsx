import * as React from 'react';
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';

interface IProps {
  title?: string;
  style?: React.CSSProperties;
  color?: string;
  block?: boolean;
  onClick?: (event: any) => void;
  outline?: boolean;
  className?: string;
  disabled?: boolean;
  type?: string;
  buttonLoader?: boolean;
  isLoading?: boolean;
  size?: string;
  icon?: IconDefinition;
  iconStyle?: string;
  iconSize?: SizeProp;
  tabIndex?: number | undefined;
}

enum BUTTON_TYPES {
  PRIMARY = 'Primary',
  SECONDARY = 'Secondary',
  LINK = 'Link'
}

const getStyles = (type?: string, disabled?: boolean, isLoader?: boolean) => {
  let styles;
  if (disabled) {
    styles = ' button-disable ';
  }
  if (type === 'Primary') {
    styles += isLoader ? ' primary-button-loader ' : ' primary-button ';
  } else if (type === 'Link') {
    styles += ' button-link';
  } else {
    styles += ' secondary-button';
  }

  return styles;
};

const CustomButton: React.FunctionComponent<IProps> = React.memo(
  function MyComponent({
    title,
    style,
    color,
    block,
    onClick,
    outline,
    className,
    disabled,
    type,
    size,
    icon,
    iconStyle,
    iconSize,
    tabIndex = 0
  }: IProps) {
    return (
      <div className="d-flex flex-row align-items-center pl-0 pr-0">
        <Button
          size={size}
          outline={outline}
          color={color}
          className={`button ${getStyles(type, disabled)} ${className}`}
          block={block}
          style={style}
          onClick={onClick}
          disabled={disabled}
          tabIndex={tabIndex}
        >
          {title}
          {icon ? (
            <FontAwesomeIcon
              className={`ml-2 ${iconStyle ? iconStyle : ''}`}
              icon={icon}
              size={iconSize ? iconSize : 'sm'}
            />
          ) : null}
        </Button>
      </div>
    );
  }
);

export { CustomButton as Button, BUTTON_TYPES };
