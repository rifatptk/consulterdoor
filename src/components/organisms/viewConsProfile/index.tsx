import { Container, Row, Col, Label } from "reactstrap";
import { TextLabel } from "../../shared";
import { messages } from '../../../shared/localize';
import Badge from 'react-bootstrap/Badge'
import { ServiceCard } from "../../molecules/cards";
import { Card } from "react-bootstrap";




function ViewConsultantProfile() {
    return (<div>
        <Container>
            <Row>
                <Col md="3" className="profile-pic-side">
                    <Row style={{ position: 'relative' }}>

                        {/* <img src={require('../../../assets/samples/profile.jpg')} style={{ position: 'absolute',left }} className="profile-pic" />

                        <div className='availability-container' style={{ background: 'green', position: 'absolute', left: '0px', bottom: '0px' }} /> */}
                        <Card as={'div'} className='profile-image-container'>
                            <div className='availability-container' style={{ background: 'green' }} />
                            <img className="profile-image" src={require('../../../assets/samples/profile.jpg')} />
                        </Card>

                    </Row>


                </Col>
                <Col md="9" >
                    <Row className='user-details'>
                        <Row className="detail-section">
                            <Row><TextLabel className="sub-topics" text={messages.consultantProfile.description} /></Row>
                            <Row><Label className="description">consectetur adipiscing elit. Viverra magna nunc risus iaculis eleifend id facilisi. Consectetur ut at sapien lacinia libero eu. Viverra adipiscing curabitur enim maecenas facilisi facilisis lacus euismod enim. Lacus quis nec pellentesque dictum feugiat vulputate. Iaculis elit, nullam in ve nenatis consequat ultrices hendrerit pulvinar eget. Viverra id hac malesuada purus, nunc, ultricies ac integer. Tempus urna,  Viverra adipiscing curabitur   facilisi facilisis lacus euismod enim. Lacus quis nec pellentesque dictum feugiat vulputate.</Label>
                            </Row>

                        </Row>
                        <Row className="detail-section">
                            <Row><TextLabel className="sub-topics" text={messages.consultantProfile.qualification} /></Row>
                            <Row className="indent">
                                <Row>
                                    <Row><TextLabel className="section-sub-topic" text={messages.consultantProfile.skills} /></Row>
                                    <Row className="indent">
                                        <Badge className="badge" >Web Design</Badge>
                                        <Badge className="badge" >Frontend dev.</Badge>
                                        <Badge className="badge">Web Design</Badge>
                                        <Badge className="badge" >Web Design</Badge>
                                        <Badge className="badge" >Frontend dev.</Badge>
                                    </Row>
                                </Row>
                                <Row>
                                    <Row><TextLabel className="section-sub-topic" text={messages.consultantProfile.education} /></Row>
                                    <Row className="indent">
                                        <Row>
                                            <Row className="bold">1.Infromation & Comminication Technology</Row>
                                            <Row className="edu">Rajarata University of Sri lanka</Row>
                                            <Row className="edu">2017-2021  (4Years)</Row>

                                        </Row>
                                        <Row>
                                            <Row className="bold">1.Infromation & Comminication Technology</Row>
                                            <Row className="edu">Rajarata University of Sri lanka</Row>
                                            <Row className="edu">2017-2021  (4Years)</Row>
                                        </Row>
                                    </Row>
                                </Row>
                            </Row>

                        </Row>
                    </Row>




                </Col>

            </Row>
            <Row className="main-section">
                <Row className="topic">My Services</Row>
                <Row>
                    <ServiceCard />
                    <ServiceCard />
                    <ServiceCard />
                    <ServiceCard />
                    <ServiceCard />
                </Row>

            </Row>
            <Row>
                Reviews
            </Row>
            <Row>
                Similar Consultants
            </Row>
        </Container>
    </div>)
}


export { ViewConsultantProfile };