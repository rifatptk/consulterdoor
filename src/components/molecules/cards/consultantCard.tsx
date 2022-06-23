import * as React from 'react';
import { Navbar, Nav, Container, Card, Button, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FaRegHeart, FaStar } from "react-icons/fa";

interface IProps { }

const ConsultantCard: React.FunctionComponent<IProps> = React.memo(
    ({ }: IProps): JSX.Element => {
        const color = ["#A00FE4", "#E48F0F", "#E40FA8"];
        const randomColor = color[Math.floor(Math.random() * color.length)];
        return (
            <Card style={{ width: '15rem', overflow: 'hidden' }} className="main-container m-2">
                <div style={{ height: '4px', background: randomColor, width: '100%' }} />
                <Card.Img variant="top" className='consultant-card-service-image' src={require('../../../assets/samples/Programing-2019.jpg')} />
                <Card.Body>
                    <div className='consultant-card-profile-card-container'>
                        <Card className='consultant-card-profile-image-container' style={{ width: '12rem', height: '12rem', marginTop: '-6rem' }}>
                            <div className='consultant-card-availability-container' style={{ background: 'green' }} />
                            <Card.Img variant="bottom" className="consultant-card-profile-image" src={require('../../../assets/samples/profile.jpg')} />

                        </Card>
                    </div>
                    <Card.Title className='consultant-card-title-text text-center' ><b>Charitha Weerasooriya</b></Card.Title>
                    <Card.Text className='consultant-card-body-text text-center'>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                </Card.Body >
                <Card.Footer className="card-footer-container" >
                    <Row>
                        <Col>
                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                <FaStar style={{ color: randomColor }} className="ml-1" />
                                <div className='ml-1' style={{ color: randomColor }} ><b>5.0</b></div>

                                <small className='ml-1'>(48)</small>
                            </div>
                        </Col>
                        <Col sm={4} className="text-end">
                            <b>Start</b>
                        </Col>
                    </Row>
                </Card.Footer>
            </Card >
        )
    }
);

export { ConsultantCard };
