import { messages } from '../../../shared/localize';
import { Table, Button } from '../../shared';

import { useSelector, useDispatch } from 'react-redux';
import { setIsOverlayLoading } from '../../../store/actions';
import { RootState } from '../../../store';

function ViewPeopleList() {
  const commonReducer = useSelector((state: RootState) => state.commonReducer);
  const dispatch = useDispatch();
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
      <Button
        onClick={() => {
          dispatch(setIsOverlayLoading(!commonReducer.isOverlayLoading));
        }}
        title={`Test button - ${commonReducer.isOverlayLoading}`}
      >
        Test button
      </Button>
    </div>
  );
}

export { ViewPeopleList };
