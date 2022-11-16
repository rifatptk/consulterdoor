import * as React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import { IConsultant } from '../../../services/interfaces';
import { formatString } from '../../../shared/utils';
interface IProps {
  data: IConsultant;
}

const ConsultantCard: React.FunctionComponent<IProps> = ({
  data,
}: IProps): JSX.Element => {
  const color = ['#A00FE4', '#E48F0F', '#E40FA8'];
  const randomColor = color[Math.floor(Math.random() * color.length)];
  return (
    <div className="consult-card-container col-md-3 p-3">
      <Card className="shadow p-0">
        <div
          style={{ height: '4px', background: randomColor, width: '100%' }}
        />
        <Card.Img
          variant="top"
          className="consultant-card-service-image"
          src={data.serviceImage}
        />
        <Card.Body>
          <div className="consultant-card-profile-card-container">
            <Card
              className="consultant-card-profile-image-container"
              style={{ width: '12rem', height: '12rem', marginTop: '-6rem' }}
            >
              <div
                className="consultant-card-availability-container"
                style={{ background: 'green' }}
              />
              <Card.Img
                variant="bottom"
                className="consultant-card-profile-image"
                src={data.consultantImage}
              />
            </Card>
          </div>
          <Card.Title className="consultant-card-title-text text-center">
            <b>
              {formatString(data.consultantName, {
                titleCase: true,
              })}
            </b>
          </Card.Title>
          <Card.Text className="consultant-card-body-text text-center">
            {formatString(data.description, {
              maxWords: 14,
              maxLength: 80,
              capitalCase: true,
            })}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="consult-card-footer-container">
          <Row>
            <Col>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <FaStar style={{ color: randomColor }} className="ml-1" />
                <div className="ml-1" style={{ color: randomColor }}>
                  <b>{data.overallRating}</b>
                </div>

                <small className="ml-1">({data.numberOfReviews})</small>
              </div>
            </Col>
            <Col
              sm={6}
              className="text-end p-1 primary-font font-medium consult-view-btn"
              onClick={() => {
                window.open('/consultant/' + data.consultantKey, '_blank');
              }}
            >
              View
            </Col>
          </Row>
        </Card.Footer>
      </Card>
    </div>
  );
};

export { ConsultantCard };
