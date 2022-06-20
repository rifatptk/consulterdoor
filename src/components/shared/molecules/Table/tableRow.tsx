import * as React from 'react';
import { ITableData } from '.';

interface IProps {
  tableData: ITableData[];
  className?: string;
  isLoading?: boolean;
}

const TableRow: React.FunctionComponent<IProps> = React.memo(
  ({ tableData, className, isLoading }: IProps): JSX.Element => (
    <tr>{generateRow(tableData)}</tr>
  )
);

const generateRow = (tableData: ITableData[]) => {
  return tableData.map((data: ITableData) => {
    const tdClassName = data.alignment
      ? `text-${data.alignment}`
      : `text-center`;
    return (
      <td className={`${tdClassName} ${data.className}`} key={data.key}>
        {data.value}
      </td>
    );
  });
};

export { TableRow };
