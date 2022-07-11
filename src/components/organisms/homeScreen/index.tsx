import { messages } from '../../../shared/localize';
import { Button, BUTTON_TYPES, TextLabel } from '../../shared';
import { CategoryList, ConsultCardList, ServiceCardList } from '../index';

function HomeScreen() {
  const renderCategory = () => {
    return (
      <div className="mt-5">
        <div>
          <TextLabel
            className="primary-font font-size-large font-bold category-header"
            text={messages.home.categoryListTitle}
          />
        </div>
        <CategoryList data={[{}, {}, {}, {}, {}, {}, {}, {}, {}]} />
        <div className="d-flex flex-row justify-content-center mt-4">
          <Button
            title={messages.home.allCategories}
            type={BUTTON_TYPES.PRIMARY}
            className="category-view-btn font-bold"
          />
        </div>
      </div>
    );
  };

  const renderServices = () => {
    return (
      <div className="mt-5">
        <div>
          <TextLabel
            className="primary-font font-size-large font-bold category-header"
            text={messages.home.serviceListTitle}
          />
        </div>
        <ServiceCardList data={[{}, {}, {}, {}, {}, {}, {}, {}]} />
        <div className="d-flex flex-row justify-content-center mt-4">
          <Button
            title={messages.home.allServices}
            type={BUTTON_TYPES.PRIMARY}
            className="category-view-btn font-bold"
          />
        </div>
      </div>
    );
  };

  const renderConsulterList = () => {
    return (
      <div className="mt-5">
        <div>
          <TextLabel
            className="primary-font font-size-large font-bold category-header"
            text={messages.home.consultListTitle}
          />
        </div>
        <ConsultCardList data={[{}, {}, {}, {}]} />
        <div className="d-flex flex-row justify-content-center mt-4">
          <Button
            title={messages.home.seeAll}
            type={BUTTON_TYPES.PRIMARY}
            className="category-view-btn font-bold"
          />
        </div>
      </div>
    );
  };

  return (
    <div>
      <div>{renderCategory()}</div>
      <div>{renderServices()}</div>
      <div>{renderConsulterList()}</div>
      <div className="mb-5" />
    </div>
  );
}

export { HomeScreen };
