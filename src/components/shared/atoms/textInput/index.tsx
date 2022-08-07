import React from 'react';
import { Input } from 'reactstrap';
import { Label } from 'reactstrap';
import { InputType } from 'reactstrap/types/lib/Input';

interface IProps {
  id?: string;
  disabled?: boolean;
  value?: string;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  pattern?: string;
  size?: number;
  type?: InputType;
  rows?: number;
  validation?: {
    isInValid: boolean;
    validationMsg?: string;
  };
  tabIndex?: number | undefined;
  innerRef?: React.Ref<HTMLInputElement | HTMLTextAreaElement>;
  labelText?: string;
  labelClassName?: string;
  name?: string;
  maxLength?: number;
  containerClassName?: string;
  children?: React.ReactElement | React.ReactElement[];
  icon?: React.ReactElement | React.ReactElement[];
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

const TextInput: React.FunctionComponent<IProps> = React.memo(
  ({
    id,
    value,
    onChange,
    placeholder,
    className,
    pattern,
    size,
    type,
    rows = 1,
    disabled,
    validation,
    onFocus,
    tabIndex = 0,
    labelText,
    labelClassName,
    name,
    maxLength,
    containerClassName,
    children,
    icon,
    onKeyDown,
  }: IProps) => {
    return (
      <div className="">
        <div className="row">
          <div>
            <Label className={labelClassName}>{labelText}</Label>
          </div>
          <div className={containerClassName}>
            {icon}
            <Input
              value={value}
              id={id}
              disabled={disabled}
              className={`default-text-input ${
                validation && validation.isInValid ? 'text-input-error' : ''
              } ${className}`}
              placeholder={placeholder}
              onChange={onChange}
              pattern={pattern}
              size={size}
              type={type}
              rows={rows}
              onFocus={onFocus}
              tabIndex={tabIndex}
              name={name}
              style={rows > 1 ? { height: rows * 20 } : {}}
              maxLength={maxLength}
              onKeyDown={onKeyDown}
            />
            {children}
          </div>
          <div>
            {validation && validation.isInValid ? (
              <Label className={'text-input-error-label'}>
                {validation.validationMsg
                  ? validation.validationMsg
                  : 'Invalid Field'}
              </Label>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
);

export { TextInput };
