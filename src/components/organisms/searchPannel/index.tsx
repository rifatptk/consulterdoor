import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Col, Container, Row } from 'reactstrap';
import { consultServicesService } from '../../../services';
import { SearchTag } from '../../atoms';
import { SearchInput, ServiceCard } from '../../molecules';

function SearchPannel() {
  const [services, setServices] = useState([]);
  const handleSearch = async (searchText: string) => {
    try {
      const searchResults = await consultServicesService.getSearchResults(
        searchText
      );
      setServices(searchResults);
    } catch (error) {
      return;
    }
  };
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
              <SearchInput onSearch={handleSearch} />
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
          {services.map((data: any, idx) => (
            <Col key={idx}>{<ServiceCard data={data} />}</Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export { SearchPannel };
