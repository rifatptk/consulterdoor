import { Container, Row } from 'reactstrap';
import { CategoryCard } from '../../';

interface IProps {
  data: object[];
}

function CategoryList({ data }: IProps) {
  const cardList = () => {
    return data.map((item, index) => <CategoryCard key={index} />);
  };
  return (
    <Container>
      <Row>{cardList()}</Row>
    </Container>
  );
}

export { CategoryList };
