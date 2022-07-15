import * as React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { FaRegHeart, FaStar } from 'react-icons/fa';
import { IConsultService } from '../../../services/interfaces';
import { messages } from '../../../shared/localize';
import { formatString } from '../../../shared/utils';
interface IProps {
  cardClassName?: string;
  data: IConsultService;
}

const ServiceCard: React.FunctionComponent<IProps> = ({
  cardClassName,
  data,
}: IProps): JSX.Element => {
  const color = ['#A00FE4', '#E48F0F', '#E40FA8'];
  const randomColor = color[Math.floor(Math.random() * color.length)];
  return (
    <Card className={`main-container p-0 m-3 ${cardClassName}`}>
      <div style={{ height: '4px', background: randomColor, width: '100%' }} />
      <Card.Img
        variant="top"
        className="service-card-service-image"
        src={data.serviceImage}
      />
      <Card.Body>
        <Card
          className="service-card-profile-image-container"
          style={{ width: '6rem', height: '6rem', marginTop: '-4rem' }}
        >
          <div
            className="service-card-availability-container"
            style={{ background: 'green' }}
          />
          <Card.Img
            variant="bottom"
            className="service-card-profile-image"
            src={data.consultantImage}
          />
        </Card>
        <Card.Title className="service-card-title-text primary-font font-medium">
          {formatString(data.consultantName, {
            titleCase: true,
          })}
        </Card.Title>
        <Card.Text className="service-card-body-text primary-font font-regular">
          {formatString(data.serviceName, {
            capitalCase: true,
            maxWords: 18,
          })}
        </Card.Text>
        <Row style={{ display: 'flex', alignItems: 'center' }}>
          <Col
            md={6}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}
          >
            <b>{data.costPerHour}</b>
          </Col>
          <Col
            md={6}
            className="text-end"
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}
          >
            <FaStar style={{ color: randomColor }} className="ml-1" />
            <div className="ml-1" style={{ color: randomColor }}>
              <b>{data.overallRating}</b>
            </div>

            <small className="ml-1">({data.numberOfReviews})</small>
          </Col>
        </Row>
      </Card.Body>
      <Card.Footer className="service-card-footer-container">
        <div className="service-card-column-divider pt-1 pb-1">
          <FaRegHeart className="mr-3" />
        </div>
        <div
          className="service-card-start-button primary-font font-medium"
          onClick={() => {
            window.open('service/' + data.consultServiceKey, '_blank');
          }}
        >
          {messages.serviceCard.start}
        </div>
      </Card.Footer>
    </Card>
  );
};

export { ServiceCard };
