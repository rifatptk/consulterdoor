import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import { getService } from '../../../services/consultService/consultService';
import { messages } from '../../../shared/localize';
import { ImageGallery } from '../../molecules/imageGallery';
import { FreeTextInputWizard } from '../../organisms';
import { Button, BUTTON_TYPES, TextLabel } from '../../shared';

const ServicePage = () => {
  const params = useParams();
  const [consultService, setConsultService] = useState<any>(undefined);
  const [questionModalIsOpen, setQuestionModalIsOpen] =
    useState<boolean>(false);
  useEffect(() => {
    if (params && params.serviceId) {
      getService(params.serviceId).then((result) => {
        setConsultService(result.data);
      });
    }
  }, [params]);
  if (!consultService) {
    return <></>;
  }
  return (
    <div>
      <Container>
        <Row className="mt-2 mb-2">
          <TextLabel
            className="title secondary-font font-bold"
            text={consultService.serviceName}
          />
        </Row>
        <Row>
          <Col
            lg="4"
            xl="3"
            className="d-flex flex-column justify-content-between mb-2"
          >
            <Row className="profile-pic-side">
              <Row className="profile-pic">
                <div>
                  <div className="verify-badge" />
                  <img
                    className="profile-main-image"
                    style={{ width: '15rem' }}
                    src={consultService.consultantImage}
                    alt=""
                  />
                </div>
              </Row>
              <Row
                className="justify-content-center"
                style={{ width: '80%', marginBottom: '10%' }}
              >
                <Row>
                  <TextLabel
                    className="topic primary-font font-bold font-size-medium"
                    style={{ lineHeight: '30px' }}
                    text={consultService.consultantName}
                  />
                </Row>
                <Row>
                  <TextLabel
                    className="text-center primary-font secondary-text-color"
                    style={{ lineHeight: '20px', fontSize: '1.2rem' }}
                    text={`I am ${consultService.jobTitle}`}
                  />
                </Row>
                <Row className="justify-content-center">
                  {/* <StarRatings
                            rating={4}
                            starRatedColor="blue"
                            numberOfStars={6}
                            name='rating'
                        /> */}
                  Star Rating
                </Row>
                <Row className="text-center">
                  <div>
                    {consultService.overallRating}
                    <span className="secondary-text-color">
                      ({consultService.numberOfReviews} reviews)
                    </span>
                  </div>
                </Row>
                <Row />
              </Row>
              <Row style={{ width: '80%' }}>
                <Button
                  type={BUTTON_TYPES.SECONDARY}
                  className="contact-btn"
                  title={messages.service.contact}
                />
              </Row>
            </Row>
            <Row>
              <Button
                type={BUTTON_TYPES.PRIMARY}
                className="appointment-btn"
                title={messages.service.makeAppointment}
                onClick={() => setQuestionModalIsOpen(true)}
              />
            </Row>
          </Col>
          <Col lg="8" xl="9">
            <ImageGallery
              images={consultService.attachments.map((data: any) => {
                return {
                  original: data.url,
                  thumbnail: data.url,
                  description: data.caption,
                  embedUrlL: '',
                };
              })}
            />
          </Col>
          <FreeTextInputWizard
            modalIsOpen={questionModalIsOpen}
            questions={consultService.serviceQuestions}
            setModalIsOpen={setQuestionModalIsOpen}
            serviceKey={params.serviceId}
          />
        </Row>
        <Row className="main-section">
          {/* <Row>
            <TextLabel
              className="primary-font font-size-large font-bold"
              style={{ lineHeight: '54px' }}
              text={messages.service.aboutService}
            />
          </Row> */}
          <Row>
            <Container>
              <div
                dangerouslySetInnerHTML={{ __html: consultService.description }}
              />
            </Container>
          </Row>
        </Row>

        <Row className="main-section">
          <Row>
            <TextLabel
              className="primary-font font-size-large font-bold"
              style={{ lineHeight: '54px' }}
              text={messages.service.otherServices}
            />{' '}
          </Row>
          <Row className="d-flex justify-content-between">
            {/* <ServiceCard />
              <ServiceCard />
              <ServiceCard />
              <ServiceCard />
              <ServiceCard /> */}
          </Row>
        </Row>
      </Container>
    </div>
  );
};

export { ServicePage };
