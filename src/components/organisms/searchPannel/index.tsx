import { Form } from 'react-bootstrap';
import { Col, Container, Row } from 'reactstrap';
import { SearchTag } from '../../atoms';
import { SearchInput } from '../../molecules';

function SearchPannel() {
  return (
    <div>
      <Container>
        <Row className="justify-content-md-center">
          <Col xs={true} lg="8">
            <Row className="justify-content-md-start mb-2 mt-4">
              <Col md="auto">
                <Form.Check
                  type={'radio'}
                  label={`Service`}
                  id={`service-radio`}
                />
              </Col>
              <Col md="auto">
                <Form.Check
                  type={'radio'}
                  label={`Consultant`}
                  id={`consultant-radio`}
                />
              </Col>
            </Row>
            <Row>
              <SearchInput />
            </Row>
          </Col>
        </Row>
        <Row className="mb-5">
          {Array.from({ length: 8 }).map((_, idx) => (
            <Col key={idx}>
              <SearchTag tagName="Web Design" />
            </Col>
          ))}
        </Row>
        <Row xl={4} className="justify-content-start">
          {Array.from({ length: 8 }).map((_, idx) => (
            <Col key={idx}>{/* <ServiceCard /> */}</Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export { SearchPannel };
