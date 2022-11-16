import * as React from 'react';
import { Card } from 'react-bootstrap';
import { videoCategorySvg } from '../../../assets/images/';

const CategoryCard: React.FunctionComponent = React.memo((): JSX.Element => {
  return (
    <Card className="category-card-container col-md-4 p-4 ">
      <Card.Body className="border rounded-3">
        <Card.Title className="text-center category-card-title font-bold">
          Grapic Design
        </Card.Title>
        <Card.Img
          variant="top"
          className="category-card-image"
          src={videoCategorySvg}
        />
        <Card.Text className="category-card-body-text text-center font-regular">
          Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor
          sit amet, consectetur
        </Card.Text>
      </Card.Body>
    </Card>
  );
});

export { CategoryCard };
