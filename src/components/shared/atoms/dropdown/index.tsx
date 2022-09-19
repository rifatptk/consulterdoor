import React, { useState } from 'react';
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownProps,
  DropdownToggle,
  Label,
} from 'reactstrap';

interface IDropdownItem {
  id: string;
  displayText: string;
  isDisabled?: boolean;
}

interface IProps {
  selectedItem?: IDropdownItem;
  onItemClick: (item: IDropdownItem) => void;
  selections: IDropdownItem[];
  className?: string;
  dropdownMenuClassName?: string;
  disabled?: boolean;
  validation?: {
    isInValid: boolean;
    validationMsg?: string;
  };
  dropdownDirection?: DropdownProps['direction'];
  placeholder?: string;
}

const CommonDropdown: React.FunctionComponent<IProps> = React.memo(
  ({
    selectedItem,
    onItemClick,
    selections,
    className,
    dropdownMenuClassName,
    disabled,
    validation,
    dropdownDirection,
    placeholder,
  }: IProps) => {
    const [isOpen, setCount] = useState(false);
    return (
      <div className="">
        <div className="row">
          <Dropdown
            isOpen={isOpen}
            toggle={() => setCount(!isOpen)}
            direction={dropdownDirection}
            disabled={disabled}
            className={`drop-down`}
          >
            <DropdownToggle
              caret={true}
              className={`drop-down-toggle ${className}`}
            >
              {selectedItem?.displayText || placeholder}
            </DropdownToggle>
            <DropdownMenu className={`${dropdownMenuClassName}`}>
              {selections.map((item) => (
                <DropdownItem
                  key={item.id}
                  onClick={() => {
                    onItemClick(item);
                  }}
                  active={selectedItem && selectedItem.id === item.id}
                  className={`drop-down-item`}
                >
                  {item.displayText}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
          <div>
            {validation && validation.isInValid ? (
              <Label className={`text-input-error-label`}>
                {validation.validationMsg || 'Invalid Field'}
              </Label>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
);

export { CommonDropdown as Dropdown };
