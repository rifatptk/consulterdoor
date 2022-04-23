import React, { useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Label } from 'reactstrap';

interface IProps {
  value?: Date;
  onChange?: (date?: Date) => void;
  disabled?: boolean;
  className?: string;
  format?: string;
  labelText?: string;
  labelClassName?: string;
  validation?: {
    isInValid: boolean;
    validationMsg?: string;
  };
}

const DatePicker: React.FunctionComponent<IProps> = ({
  value,
  onChange,
  className,
  disabled,
  format,
  labelText,
  labelClassName,
  validation
}): JSX.Element => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="">
      <div className="row">
        <div className="col">
          <Label className={labelClassName}>{labelText}</Label>
        </div>
        <div
          className="col"
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          <div>
            <ReactDatePicker
              selected={startDate}
              onChange={(date: Date) => setStartDate(date)}
              dateFormat={format}
              className={`default-date-input ${
                validation && validation.isInValid ? 'date-input-error' : ''
              } ${className}`}
              peekNextMonth
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
            />
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
    </div>
  );
};

export { DatePicker };
