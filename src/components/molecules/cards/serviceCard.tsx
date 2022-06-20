import * as React from 'react';
import { Navbar, Nav, Container, Card, Button, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FaRegHeart, FaStar } from "react-icons/fa";

interface IProps { }

const ServiceCard: React.FunctionComponent<IProps> = React.memo(
    ({ }: IProps): JSX.Element => {
        const color = ["#A00FE4", "#E48F0F", "#E40FA8"];
        const randomColor = color[Math.floor(Math.random() * color.length)];
        return (
            <Card style={{ width: '18rem', overflow: 'hidden' }} className="main-container m-2">
                <div style={{ height: '4px', background: randomColor, width: '100%' }} />
                <Card.Img variant="top" className='service-image' src={require('../../../assets/samples/Programing-2019.jpg')} />
                <Card.Body>
                    <Card className='profile-image-container' style={{ width: '6rem', height: '6rem', marginTop: '-4rem' }}>
                        <div className='availability-container' style={{ background: 'green' }} />
                        <Card.Img variant="bottom" className="profile-image" src={require('../../../assets/samples/profile.jpg')} />
                    </Card>
                    <Card.Title className='title-text' >Charitha Weerasooriya</Card.Title>
                    <Card.Text className='body-text'>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Row>
                        <Col md={6}  >
                            <h6>500$</h6>
                        </Col>
                        <Col md={6} className="text-end">
                            <Row>
                                <Col>
                                    <FaStar style={{ color: randomColor }} />
                                </Col>
                                <Col style={{ marginLeft: '-1rem' }}>
                                    5.0
                                </Col>
                                <Col style={{ marginLeft: '-1rem' }}>
                                    <small>(48)</small>
                                </Col>

                            </Row>

                        </Col>
                    </Row>
                </Card.Body>
                <Card.Footer className="card-footer-container" >
                    <Row>
                        <Col sm={2} className="text-center" >
                            <FaRegHeart />
                        </Col>
                        <Col sm={1} >
                            <div className="column-divider pt-1 pb-1" />
                        </Col>
                        <Col sm={8} className="text-center">
                            Start
                        </Col>
                    </Row>
                </Card.Footer>
            </Card>
        )
    }
);

export { ServiceCard };
