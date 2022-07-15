import Badge from 'react-bootstrap/Badge';
import { Col, Container, Label, Row } from 'reactstrap';
import { messages } from '../../../shared/localize';
import { TextLabel } from '../../shared';

function ViewConsultantProfile() {
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
                    src={require('../../../assets/samples/profile.jpg')}
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
                    text={'Dilshan Athukorala'}
                  />
                </Row>
                <Row>
                  <TextLabel
                    className="text-center primary-font secondary-text-color"
                    style={{
                      lineHeight: '20px',
                      fontSize: '1.2rem',
                    }}
                    text={'I am UI/UX Designer'}
                  />
                </Row>
                <Row className="justify-content-center">Star Rating</Row>
                <Row className="text-center">
                  <div>
                    4.9{' '}
                    <span className="secondary-text-color">(30 reviews)</span>
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
                  className="justify-content-center primary-font font-medium tertiary-text-color font-size-large"
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
                      src={require('../../../assets/samples/sl-flag.png')}
                      alt=""
                    />
                  </Col>
                  <Col
                    xs="6"
                    lg="8"
                    className="d-flex justify-content-center mb-2"
                  >
                    <TextLabel
                      className="primary-font font-regular font-size-small quaternary-text-color"
                      style={{
                        fontSize: '0.9rem',
                        lineHeight: '27px',
                      }}
                      text={'Horana , Sri Lanka'}
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
                      src={require('../../../assets/samples/hand.png')}
                      alt=""
                    />
                  </Col>
                  <Col
                    xs="6"
                    lg="8"
                    className="d-flex justify-content-center mb-2"
                  >
                    <TextLabel
                      className="primary-font font-regular font-size-small quaternary-text-color"
                      style={{
                        fontSize: '0.9rem',
                        lineHeight: '27px',
                      }}
                      text={'Joined May 10,2022'}
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
                      src={require('../../../assets/samples/like.png')}
                      alt=""
                    />
                  </Col>
                  <Col
                    xs="6"
                    lg="8"
                    className="d-flex justify-content-center mb-2"
                  >
                    <TextLabel
                      className="primary-font font-regular font-size-small quaternary-text-color"
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
                    <Label className="description primary-font font-regular font-size-small quaternary-text-color">
                      consectetur adipiscing elit. Viverra magna nunc risus
                      iaculis eleifend id facilisi. Consectetur ut at sapien
                      lacinia libero eu. Viverra adipiscing curabitur enim
                      maecenas facilisi facilisis lacus euismod enim. Lacus quis
                      nec pellentesque dictum feugiat vulputate. Iaculis elit,
                      nullam in ve nenatis consequat ultrices hendrerit pulvinar
                      eget. Viverra id hac malesuada purus, nunc, ultricies ac
                      integer. Tempus urna, Viverra adipiscing curabitur
                      facilisi facilisis lacus euismod enim. Lacus quis nec
                      pellentesque dictum feugiat vulputate.
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
                          className="section-sub-topic primary-font tertiary-text-color font-medium font-size-small"
                          text={messages.consultantProfile.skills}
                        />
                      </Row>
                      <Row className="indent">
                        <Badge className="badge primary-font font-size-small">
                          Web Design
                        </Badge>
                        <Badge className="badge primary-font font-size-small">
                          Frontend dev.
                        </Badge>
                        <Badge className="badge primary-font font-size-small">
                          Web Design
                        </Badge>
                        <Badge className="badge primary-font font-size-small">
                          Web Design
                        </Badge>
                        <Badge className="badge primary-font font-size-small">
                          Frontend dev.
                        </Badge>
                      </Row>
                    </Row>
                    <Row>
                      <Row>
                        <TextLabel
                          className="section-sub-topic primary-font tertiary-text-color font-medium font-size-small"
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

            {/* <ServiceCardList data={[{}, {}, {}, {}, {}, {}, {}]} /> */}
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
