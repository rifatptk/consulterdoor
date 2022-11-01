//dfad
import { Button, BUTTON_TYPES, TextLabel } from '../../components/shared';
import { ServiceCardList } from '../../components/organisms/serviceCardList';
import { messages } from '../../shared/localize';
import { RootState } from '../../shared/hooks';
import { useSelector } from 'react-redux';

type Props = {};

const Services = (props: Props) => {
  const consultService = useSelector(
    (state: RootState) => state.consultServiceReducer
  );
  const renderServices = () => {
    return (
      <div className="mt-5">
        <div>
          <TextLabel
            className="primary-font font-size-large font-bold category-header my-5"
            text={messages.home.serviceListTitle}
          />
        </div>
        <ServiceCardList data={consultService.consultServices.data} />
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
  return <div className="my-5">{renderServices()}</div>;
};

export default Services;
