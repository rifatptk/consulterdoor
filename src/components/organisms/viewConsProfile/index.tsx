import { useEffect, useState } from 'react';
import Badge from 'react-bootstrap/Badge';
import { useParams } from 'react-router-dom';
import { Col, Container, Label, Row } from 'reactstrap';
import { getConsultant } from '../../../services/consultant/consultantService';
import { messages } from '../../../shared/localize';
import { TextLabel } from '../../shared';
import { ServiceCardList } from '../serviceCardList';

function ViewConsultantProfile() {
  const params = useParams();
  const [consultant, setConsultant] = useState<any>(undefined);

  useEffect(() => {
    if (params && params.consultantId) {
      getConsultant(params.consultantId).then((result) => {
        setConsultant(result.data);
      });
    }
  }, [params]);
  if (!consultant) {
    return <></>;
  }
  return (
    <div>
      <div>
        <Container>
          <Row className="mt-2">
            <Col lg="4" xl="3" className="profile-pic-side">
              <Row className="profile-pic">
                <div>
                  <div className="verify-badge" />
                  <img
                    className="profile-main-image"
                    style={{ width: '15rem' }}
                    src={consultant.consultantImage}
                    alt="consult profile"
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
                    text={`${consultant.firstName} ${consultant.lastName}`}
                  />
                </Row>
                <Row>
                  <TextLabel
                    className="text-center primary-font secondary-text-color"
                    style={{
                      lineHeight: '20px',
                      fontSize: '1.2rem',
                    }}
                    text={`I am ${consultant.jobTitle}`}
                  />
                </Row>
                <Row className="justify-content-center">Star Rating</Row>
                <Row className="text-center">
                  <div>
                    {consultant.overallRating}
                    <span className="secondary-text-color">
                      ({consultant.numberOfReviews} reviews)
                    </span>
                  </div>
                </Row>
              </Row>

              <Row className="earning-widget">
                <Row>
                  <TextLabel
                    className="topic primary-font font-bold"
                    style={{ fontSize: '1.3rem' }}
                    text={messages.consultantProfile.totalEarning}
                  />{' '}
                </Row>
                <Row
                  className="justify-content-center primary-font font-medium font-size-large"
                  style={{ lineHeight: '3.5rem' }}
                >
                  $999
                </Row>
                <Row>
                  <TextLabel
                    className="edu justify-content-center primary-font font-size-small font-regular text-center secondary-text-color"
                    style={{ lineHeight: '1.5rem' }}
                    text={messages.consultantProfile.manageEarning}
                  />
                </Row>
              </Row>
              <Row className="footer-detail">
                <Row>
                  <Col
                    xs="6"
                    lg="4"
                    className="d-flex justify-content-center mb-2"
                  >
                    <img
                      // src={require('../../../assets/samples/sl-flag.png')}
                      alt=""
                    />
                  </Col>
                  <Col
                    xs="6"
                    lg="8"
                    className="d-flex justify-content-center mb-2"
                  >
                    <TextLabel
                      className="primary-font font-regular font-size-small "
                      style={{
                        fontSize: '0.9rem',
                        lineHeight: '27px',
                      }}
                      text={`${consultant.city} , ${consultant.country}`}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col
                    xs="6"
                    lg="4"
                    className="d-flex justify-content-center mb-2"
                  >
                    <img
                      // src={require('../../../assets/samples/hand.png')}
                      alt=""
                    />
                  </Col>
                  <Col
                    xs="6"
                    lg="8"
                    className="d-flex justify-content-center mb-2"
                  >
                    <TextLabel
                      className="primary-font font-regular font-size-small"
                      style={{
                        fontSize: '0.9rem',
                        lineHeight: '27px',
                      }}
                      text={`Joined ${consultant.formattedJoinedDate}`}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col
                    xs="6"
                    lg="4"
                    className="d-flex justify-content-center mb-2"
                  >
                    <img
                      // src={require('../../../assets/samples/like.png')}
                      alt=""
                    />
                  </Col>
                  <Col
                    xs="6"
                    lg="8"
                    className="d-flex justify-content-center mb-2"
                  >
                    <TextLabel
                      className="primary-font font-regular font-size-small"
                      style={{
                        fontSize: '0.9rem',
                        lineHeight: '27px',
                      }}
                      text={'5 Recommendations'}
                    />
                  </Col>
                </Row>
              </Row>
            </Col>
            <Col lg="8" xl="9">
              <Row className="user-details">
                <Row className="detail-section">
                  <Row>
                    <TextLabel
                      className="sub-topics primary-font font-medium font-size-medium"
                      text={messages.consultantProfile.description}
                    />
                  </Row>
                  <Row>
                    <Label className="description primary-font font-regular font-size-small">
                      {consultant.description}
                    </Label>
                  </Row>
                </Row>
                <Row className="detail-section">
                  <Row>
                    <TextLabel
                      className="sub-topics primary-font font-medium font-size-medium"
                      text={messages.consultantProfile.qualification}
                    />
                  </Row>
                  <Row className="indent">
                    <Row>
                      <Row>
                        <TextLabel
                          className="section-sub-topic primary-font font-medium font-size-small"
                          text={messages.consultantProfile.skills}
                        />
                      </Row>
                      <Row className="indent">
                        {consultant.specialisations &&
                          consultant.specialisations.map(
                            (specification: any, index: number) => (
                              <Badge
                                className="badge primary-font font-size-small"
                                key={index}
                              >
                                {specification.name}
                              </Badge>
                            )
                          )}
                      </Row>
                    </Row>
                    <Row>
                      <Row>
                        <TextLabel
                          className="section-sub-topic primary-font font-medium font-size-small"
                          text={messages.consultantProfile.education}
                        />
                      </Row>
                      <Row className="indent">
                        <Row>
                          <Row className="bold primary-font font-size-small">
                            1.Infromation & Comminication Technology
                          </Row>
                          <Row className="edu primary-font font-size-small font-regular secondary-text-color">
                            Rajarata University of Sri lanka
                          </Row>
                          <Row className="edu primary-font font-size-small font-regular secondary-text-color">
                            2017-2021 (4Years)
                          </Row>
                        </Row>
                        <Row>
                          <Row className="bold primary-font font-size-small">
                            1.Infromation & Comminication Technology
                          </Row>
                          <Row className="edu primary-font font-size-small font-regular secondary-text-color">
                            Rajarata University of Sri lanka
                          </Row>
                          <Row className="edu primary-font font-size-small font-regular secondary-text-color">
                            2017-2021 (4Years)
                          </Row>
                        </Row>
                      </Row>
                    </Row>
                  </Row>
                </Row>
              </Row>
            </Col>
          </Row>
        </Container>

        <div className="align-items-center">
          <div className="main-section">
            <TextLabel
              className="primary-font font-size-large font-bold"
              style={{
                lineHeight: '54px',
              }}
              text={messages.consultantProfile.myServices}
            />
            <ServiceCardList
              data={
                consultant.services &&
                consultant.services.map((data: any) => {
                  return {
                    consultantName: data.consultantName,
                    consultantImage: data.consultantImage,
                    serviceName: data.serviceName,
                    costPerHour: data.costPerHour,
                    consultServiceKey: data.consultServiceKey,
                    serviceImage: data.serviceImage,
                    isOnline: data.isOnline,
                    overallRating: data.overallRating,
                    numberOfReviews: data.numberOfReviews,
                    numberOfAppointments: data.numberOfAppointments,
                  };
                })
              }
            />
          </div>
        </div>

        <Row className="main-section">
          <Row>
            <TextLabel
              className="primary-font font-size-large font-bold"
              style={{
                lineHeight: '54px',
              }}
              text={messages.consultantProfile.similarConsultants}
            />
          </Row>
          <Row className="p-0">
            {/* <ServiceCardList data={[{}, {}, {}, {}, {}, {}, {}]} /> */}
          </Row>
        </Row>
      </div>
    </div>
  );
}

export { ViewConsultantProfile };
