import * as React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { videoCategorySvg } from '../../../assets/images/';

const CategoryCard: React.FunctionComponent = React.memo((): JSX.Element => {
  return (
    <Card
      style={{ width: '15rem', overflow: 'hidden' }}
      className="main-container m-2 p-2"
    >
      <Card.Body>
        <Card.Title className="text-center category-card-title font-bold">
          Grapic Design
        </Card.Title>
        <div className="row align-items-center">
          <Card.Img
            variant="top"
            className="category-card-image"
            src={videoCategorySvg}
          />
        </div>
        <Card.Text className="consultant-card-body-text text-center">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <Card.Footer className="card-footer-container">
        <Row>
          <Col sm={4} className="text-end">
            <b>Start</b>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
});

export { CategoryCard };
