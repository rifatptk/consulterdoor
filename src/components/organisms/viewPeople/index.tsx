import { DEFAULT_DATE_FORMAT } from '../../../shared/constant';
import { messages } from '../../../shared/localize';
import {
  TextInput,
  DropZone,
  DatePicker,
  TextLabel,
  Table
} from '../../shared';

function ViewPeopleList() {
  return (
    <div className="mt-5">
      <Table
        tableHeadingKeys={['Name', 'Age Name']}
        tableData={[
          [{ value: 'test1' }, { value: 'test2' }],
          [{ value: 'test1' }, { value: 'test2' }],
          [{ value: 'test1' }, { value: 'test2' }],
          [{ value: 'test1' }, { value: 'test2' }],
          [{ value: 'test1' }, { value: 554 }]
        ]}
      />
    </div>
  );
}

export { ViewPeopleList };
