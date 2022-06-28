import { Container, Row } from 'reactstrap';
import { ServiceCard } from '../../';
import { DEFAULT_MOBILE_SCREEN_WIDTH } from '../../../shared/constant';
import { CommonCarousel } from '../../shared';

interface IProps {
  data: object[];
}

function ServiceCardList({ data }: IProps) {
  const { innerWidth: width } = window;

  const cardList = () => {
    return data.map((item, index) => <ServiceCard key={index} />);
  };
  return (
    <Container>
      <Row>
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
          <Row className="m-0 p-0">{cardList()}</Row>
        )}
      </Row>
    </Container>
  );
}

export { ServiceCardList };
