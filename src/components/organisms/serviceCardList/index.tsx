import { ServiceCard } from '../../';
import { DEFAULT_MOBILE_SCREEN_WIDTH } from '../../../shared/constant';
import { CommonCarousel } from '../../shared';

interface IProps {
  data: object[];
}

function ServiceCardList({ data }: IProps) {
  const { innerWidth: width } = window;

  const card = (color: any) => <ServiceCard />;

  const cardList = () => {
    return data.map((item, index) => (
      <div key={index} className="col-md" style={{ padding: 0, margin: 5 }}>
        {card('red')}
      </div>
    ));
  };
  return (
    <div className="container">
      <div className="row align-items-center">
        {width < DEFAULT_MOBILE_SCREEN_WIDTH ? (
          <CommonCarousel
            template="ONE_SLIDE_PER_PAGE"
            partialVisbile={true}
            showDots={false}
            removeArrowOnDeviceType={[]}
          >
            {cardList()}
          </CommonCarousel>
        ) : (
          <div className="row m-0 p-0">{cardList()}</div>
        )}
      </div>
    </div>
  );
}

export { ServiceCardList };
