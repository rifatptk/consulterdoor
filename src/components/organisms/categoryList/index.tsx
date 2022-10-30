import { Row } from 'reactstrap';
import { CategoryCard } from '../../';
import { DEFAULT_MOBILE_SCREEN_WIDTH } from '../../../shared/constant';
import { CommonCarousel } from '../../shared';
interface IProps {
  data: object[];
}

function CategoryList({ data }: IProps) {
  const { innerWidth: width } = window;

  const cardList = () => {
    return data.map((item, index) => <CategoryCard key={index} />);
  };
  return (
    <>
      {width < DEFAULT_MOBILE_SCREEN_WIDTH ? (
        <CommonCarousel
          template="ONE_SLIDE_PER_PAGE"
          partialVisbile={true}
          showDots={false}
          removeArrowOnDeviceType={['mobile']}
        >
          {cardList()}
        </CommonCarousel>
      ) : (
        <Row className="m-0 p-0 card-list">{cardList()}</Row>
      )}
    </>
  );
}

export { CategoryList };
