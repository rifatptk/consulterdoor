import Badge from 'react-bootstrap/Badge';
import { Col, Container, Label, Row } from 'reactstrap';
import { ServiceCard } from '../../';
import { messages } from '../../../shared/localize';
import { TextLabel } from '../../shared';

function ViewConsultantProfile() {
  return (
    <div>
      <Container>
        <Row className="mt-3">
          <Col md="3" className="profile-pic-side">
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
                  className="topic primary-text-color"
                  style={{ fontSize: '22px', lineHeight: '30px' }}
                  text={'Dilshan Athukorala'}
                />
              </Row>
              <Row>
                <TextLabel
                  className="text-center font"
                  style={{
                    color: '#828282',
                    fontSize: '20px',
                    lineHeight: '20px'
                  }}
                  text={'I am UI/UX Designer'}
                />
              </Row>
              <Row className="justify-content-center">Star Rating</Row>
              <Row className="text-center">
                <div>
                  4.9 <span className="review">(30 reviews)</span>
                </div>
              </Row>
            </Row>

            <Row className="earning-widget">
              <Row>
                <TextLabel
                  className="topic primary-text-color"
                  text={messages.consultantProfile.totalEarning}
                />{' '}
              </Row>
              <Row className="justify-content-center earning-amount secondary-text-color">$999</Row>
              <Row>
                <TextLabel
                  className="edu justify-content-center"
                  text={messages.consultantProfile.manageEarning}
                />
              </Row>
            </Row>
            <Row className="footer-detail">
              <Row>
                <Col md="4" sm="12">
                  <img
                    src={require('../../../assets/samples/sl-flag.png')}
                    alt=""
                  />
                </Col>
                <Col md="8" sm="12">
                  <TextLabel
                    className="font"
                    style={{
                      fontWeight: '400',
                      fontSize: '15px',
                      lineHeight: '27px',
                      color: '#4F4F4F'
                    }}
                    text={'Horana , Sri Lanka'}
                  />
                </Col>
              </Row>
              <Row>
                <Col md="4" sm="12">
                  <img
                    src={require('../../../assets/samples/hand.png')}
                    alt=""
                  />
                </Col>
                <Col md="8" sm="12">
                  <TextLabel
                    className="font"
                    style={{
                      fontWeight: '400',
                      fontSize: '15px',
                      lineHeight: '27px',
                      color: '#4F4F4F'
                    }}
                    text={'Joined May 10,2022'}
                  />
                </Col>
              </Row>
              <Row>
                <Col md="4" sm="12">
                  <img
                    src={require('../../../assets/samples/like.png')}
                    alt=""
                  />
                </Col>
                <Col md="8" sm="12">
                  <TextLabel
                    className="font"
                    style={{
                      fontWeight: '400',
                      fontSize: '15px',
                      lineHeight: '27px',
                      color: '#4F4F4F'
                    }}
                    text={'5 Recommendations'}
                  />
                </Col>
              </Row>
            </Row>
          </Col>
          <Col md="9">
            <Row className="user-details">
              <Row className="detail-section">
                <Row>
                  <TextLabel
                    className="sub-topics"
                    text={messages.consultantProfile.description}
                  />
                </Row>
                <Row>
                  <Label className="description">
                    consectetur adipiscing elit. Viverra magna nunc risus
                    iaculis eleifend id facilisi. Consectetur ut at sapien
                    lacinia libero eu. Viverra adipiscing curabitur enim
                    maecenas facilisi facilisis lacus euismod enim. Lacus quis
                    nec pellentesque dictum feugiat vulputate. Iaculis elit,
                    nullam in ve nenatis consequat ultrices hendrerit pulvinar
                    eget. Viverra id hac malesuada purus, nunc, ultricies ac
                    integer. Tempus urna, Viverra adipiscing curabitur facilisi
                    facilisis lacus euismod enim. Lacus quis nec pellentesque
                    dictum feugiat vulputate.
                  </Label>
                </Row>
              </Row>
              <Row className="detail-section">
                <Row>
                  <TextLabel
                    className="sub-topics"
                    text={messages.consultantProfile.qualification}
                  />
                </Row>
                <Row className="indent">
                  <Row>
                    <Row>
                      <TextLabel
                        className="section-sub-topic secondary-text-color"
                        text={messages.consultantProfile.skills}
                      />
                    </Row>
                    <Row className="indent">
                      <Badge className="badge primary-text-color">Web Design</Badge>
                      <Badge className="badge primary-text-color">Frontend dev.</Badge>
                      <Badge className="badge primary-text-color">Web Design</Badge>
                      <Badge className="badge primary-text-color">Web Design</Badge>
                      <Badge className="badge primary-text-color">Frontend dev.</Badge>
                    </Row>
                  </Row>
                  <Row>
                    <Row>
                      <TextLabel
                        className="section-sub-topic secondary-text-color"
                        text={messages.consultantProfile.education}
                      />
                    </Row>
                    <Row className="indent">
                      <Row>
                        <Row className="bold primary-text-color">
                          1.Infromation & Comminication Technology
                        </Row>
                        <Row className="edu">
                          Rajarata University of Sri lanka
                        </Row>
                        <Row className="edu">2017-2021 (4Years)</Row>
                      </Row>
                      <Row>
                        <Row className="bold primary-text-color">
                          1.Infromation & Comminication Technology
                        </Row>
                        <Row className="edu">
                          Rajarata University of Sri lanka
                        </Row>
                        <Row className="edu">2017-2021 (4Years)</Row>
                      </Row>
                    </Row>
                  </Row>
                </Row>
              </Row>
            </Row>
          </Col>
        </Row>
        <Row className="main-section p-0">
          <Row>
            <TextLabel
              className="font"
              style={{
                fontWeight: '600',
                fontSize: '36px',
                lineHeight: '54px'
              }}
              text={messages.consultantProfile.myServices}
            />{' '}
          </Row>
          <Row>
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
          </Row>
        </Row>
        <Row>Reviews</Row>
        <Row className="main-section">
          <Row>
            <TextLabel
              className="font"
              style={{
                fontWeight: '600',
                fontSize: '36px',
                lineHeight: '54px'
              }}
              text={messages.consultantProfile.similarConsultants}
            />{' '}
          </Row>
          <Row className="p-0">
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
          </Row>
        </Row>
      </Container>
    </div>
  );
}

export { ViewConsultantProfile };
