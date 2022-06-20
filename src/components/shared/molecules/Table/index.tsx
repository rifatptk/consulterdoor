import * as React from 'react';
import { Table as ReactTable } from 'reactstrap';
import { TableRow } from './tableRow';

interface IProps {
  tableHeadingKeys: string[];
  tableData: ITableData[][];
  className?: string;
  isLoading?: boolean;
}

export interface ITableData {
  key?: string;
  value: string | number | React.ReactElement;
  alignment?: 'left' | 'right' | 'center';
  className?: string;
}

const Table: React.FunctionComponent<IProps> = React.memo(
  ({
    tableHeadingKeys,
    tableData,
    className,
    isLoading
  }: IProps): JSX.Element => (
    <ReactTable striped hover bordered>
      <thead>{generateHeaders(tableHeadingKeys)} </thead>
      <tbody> {generateBody(tableData)} </tbody>
    </ReactTable>
  )
);

const generateHeaders = (tableHeadingKeys: string[]) => {
  return tableHeadingKeys.map((header: string) => (
    <th className="text-center">{header}</th>
  ));
};
const generateBody = (tableData: ITableData[][]) => {
  return tableData.map((data: ITableData[]) => <TableRow tableData={data} />);
};
export { Table };
