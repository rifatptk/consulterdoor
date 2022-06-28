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
    isLoading,
  }: IProps): JSX.Element => (
    <ReactTable striped={true} hover={true} bordered={true}>
      <thead>{generateHeaders(tableHeadingKeys)} </thead>
      <tbody> {generateBody(tableData)} </tbody>
    </ReactTable>
  )
);

const generateHeaders = (tableHeadingKeys: string[]) => {
  return tableHeadingKeys.map((header: string, index: number) => (
    <th className="text-center" key={index}>
      {header}
    </th>
  ));
};
const generateBody = (tableData: ITableData[][]) => {
  return tableData.map((data: ITableData[], index: number) => (
    <TableRow key={index} tableData={data} />
  ));
};
export { Table };
