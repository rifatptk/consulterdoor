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
                <Card.Img variant="top" className='service-card-service-image' src={require('../../../assets/samples/Programing-2019.jpg')} />
                <Card.Body>
                    <Card className='service-card-profile-image-container' style={{ width: '6rem', height: '6rem', marginTop: '-4rem' }}>
                        <div className='service-card-availability-container' style={{ background: 'green' }} />
                        <Card.Img variant="bottom" className="service-card-profile-image" src={require('../../../assets/samples/profile.jpg')} />
                    </Card>
                    <Card.Title className='service-card-title-text' >Charitha Weerasooriya</Card.Title>
                    <Card.Text className='service-card-body-text'>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Row style={{ display: 'flex', alignItems: 'center' }}>
                        <Col md={6} style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }} >
                            <b>500$</b>
                        </Col>
                        <Col md={6} className="text-end" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>
                            <FaStar style={{ color: randomColor }} className="ml-1" />
                            <div className='ml-1' style={{ color: randomColor }} ><b>5.0</b></div>

                            <small className='ml-1'>(48)</small>
                        </Col>
                    </Row>
                </Card.Body>
                <Card.Footer className="card-footer-container" >
                    <Row>
                        <Col sm={2} className="text-center align" >
                            <FaRegHeart />
                        </Col>
                        <Col sm={1} >
                            <div className="service-card-column-divider pt-1 pb-1" />
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
