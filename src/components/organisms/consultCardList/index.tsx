import { Container, Row } from 'reactstrap';
import { ConsultantCard } from '../../';
import { IConsultant } from '../../../services/interfaces';
import { DEFAULT_MOBILE_SCREEN_WIDTH } from '../../../shared/constant';
import { CommonCarousel } from '../../shared';

interface IProps {
  data: IConsultant[];
}

function ConsultCardList({ data }: IProps) {
  const { innerWidth: width } = window;

  const cardList = () => {
    return data.map((item, index) => (
      <ConsultantCard key={index} data={item} />
    ));
  };
  return (
    <Container>
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
        <Row className="m-0 p-0 card-list justify-space-between ">
          {cardList()}
        </Row>
      )}
    </Container>
  );
}

export { ConsultCardList };
