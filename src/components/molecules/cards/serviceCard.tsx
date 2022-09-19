import * as React from 'react';
import { Card } from 'react-bootstrap';
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
      <div className="service-card-consultant-name-container font-medium font-size-small">
        {formatString(data.consultantName, {
          titleCase: true,
        })}
      </div>
      <Card.Body>
        <Card
          className="service-card-profile-image-container"
          style={{
            width: '5rem',
            height: '5rem',
            marginTop: '-6rem',
            marginBottom: '1rem',
          }}
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
        <Card.Text className="font-primary-color primary-font font-medium font-size-small">
          {formatString(data.serviceName, {
            capitalCase: true,
            maxWords: 18,
          })}
        </Card.Text>
        {/* <Row style={{ display: 'flex', alignItems: 'center' }}>
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
        </Row> */}
      </Card.Body>
      <Card.Footer className="service-card-footer-container">
        <div className="service-card-column-divider pt-1 pb-1">
          {`Rs ${data.costPerHour}`}
        </div>
        <div
          className="service-card-start-button primary-font font-medium"
          onClick={() => {
            window.open('/service/' + data.consultServiceKey, '_blank');
          }}
        >
          {messages.serviceCard.start}
        </div>
      </Card.Footer>
    </Card>
  );
};

export { ServiceCard };
