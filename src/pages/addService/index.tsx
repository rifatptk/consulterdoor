import { Dropdown, PageContainer, Stepper } from '../../components/shared';

function AddService() {
  return (
    <PageContainer>
      <div>
        =
        <Dropdown
          selections={[
            { id: '1', displayText: 'item 1' },
            { id: '2', displayText: 'item 2' },
            { id: '3', displayText: 'item 3' },
          ]}
          onItemClick={(item) => {
            console.log('item.displayText', item.displayText);
          }}
          selectedItem={{ id: '3', displayText: 'item 3' }}
          validation={{ isInValid: true, validationMsg: 'this is error text' }}
          placeholder={'Main Category'}
        />
        <div>
          <Stepper />
        </div>
      </div>
    </PageContainer>
  );
}

export { AddService };
