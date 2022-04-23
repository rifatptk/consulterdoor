import * as React from 'react';
import { Label } from 'reactstrap';

interface IProps {
  text: string;
  style?: React.CSSProperties;
  tag?: string;
  className?: string;
  onClick?: () => void;
}

const TextLabel: React.FunctionComponent<IProps> = React.memo(
  ({ text, style, className, onClick }: IProps): JSX.Element => (
    <Label className={className} style={style} onClick={onClick}>
      {text}
    </Label>
  )
);

TextLabel.defaultProps = {
  className: 'text-label'
};
export { TextLabel };
