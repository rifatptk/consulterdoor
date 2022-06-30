import { Col, Container, Label, Row } from 'reactstrap';
// import StarRatings from './react-star-ratings';
import im1 from '../../../assets/samples/Rectangle 286.png';
import im2 from '../../../assets/samples/Rectangle 287.png';
import im3 from '../../../assets/samples/Rectangle 288.png';
import im4 from '../../../assets/samples/Rectangle 289.png';
import im5 from '../../../assets/samples/Rectangle 290.png';
import { messages } from '../../../shared/localize';
import { ServiceCard } from '../../molecules/cards';
import { ImageGallery } from '../../molecules/imageGallery';
import { Button, TextLabel } from '../../shared';

const ServicePage = () => {
    const images = [
        {
            original: im1,
            thumbnail: im1,
            embedUrl: 'https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0',
            description: 'Image1'
        },
        {
            original: im2,
            thumbnail: im2,
            embedUrl: 'https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0',
            description: 'Image2'
        },
        {
            original: im3,
            thumbnail: im3,
            embedUrl: 'https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0',
            description: 'Image3'
        },
        {
            original: im4,
            thumbnail: im4,
            embedUrl: 'https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0',
            description: 'Image4'
        },
        {
            original: im5,
            thumbnail: im5,
            embedUrl: 'https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0',
            description: 'Image5'
        },
    ];

    return (<div>
        <Container>
            <Row className="mt-2 mb-2">
                <TextLabel className="title primary-text-color" text="Best UI/UX Design for  Web And Mobile" />
            </Row>
            <Row>
                <Col lg="4" xl="3" className="d-flex flex-column justify-content-between mb-2" >
                    <Row className="profile-pic-side">
                        <Row className="profile-pic">

                            <div>
                                <div className="verify-badge" />
                                <img className="profile-main-image" style={{ width: '15rem' }} src={require('../../../assets/samples/profile.jpg')} alt="" />
                            </div>

                        </Row>
                        <Row className="justify-content-center" style={{ width: '80%', marginBottom: '10%' }}>
                            <Row >
                                <TextLabel className="topic" style={{ fontSize: '22px', lineHeight: '30px' }} text={'Dilshan Athukorala'} />
                            </Row>
                            <Row  >
                                <TextLabel className="text-center font" style={{ color: '#828282', fontSize: '20px', lineHeight: '20px' }}
                                    text={'I am UI/UX Designer'} />
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
                                <div>4.9  <span className="review">(30 reviews)</span></div>
                            </Row>
                            <Row />

                        </Row>
                        <Row style={{ width: '80%' }}>
                            <Button type="Secondary" className="contact-btn" title={messages.service.contact} />

                        </Row>

                    </Row>
                    <Row>
                        <Button type="Primary" className="appointment-btn" title={messages.service.makeAppointment} />
                    </Row>

                </Col>
                <Col lg="8" xl="9" >
                    <ImageGallery images={images} />

                </Col>

            </Row>
            <Row className="main-section">
                <Row>
                    <TextLabel className="font" style={{ fontWeight: '600', fontSize: '36px', lineHeight: '54px' }}
                        text={messages.service.aboutService} />
                </Row>
                <Row className="ml-3 mb-3">
                    <Row>
                        <TextLabel className="sub-topics" text={messages.service.serviceDescription} />
                    </Row>
                    <Row>
                        <Label className="description">consectetur adipiscing elit. Viverra magna nunc risus
                            iaculis eleifend id facilisi. Consectetur ut at sapien lacinia libero eu. Viverra adipiscing curabitur
                            enim maecenas facilisi facilisis lacus euismod enim. Lacus quis nec pellentesque dictum feugiat
                            vulputate. Iaculis elit, nullam in ve nenatis consequat ultrices hendrerit pulvinar eget. Viverra
                            id hac malesuada purus, nunc, ultricies ac integer. Tempus urna,  Viverra adipiscing curabitur
                            facilisi facilisis lacus euismod enim. Lacus quis nec pellentesque dictum feugiat vulputate.
                            Viverra id hac malesuada purus, nunc, ultricies ac integer. Tempus urna,  Viverra adipiscing curabitur
                            facilisi facilisis lacus euismod enim. Lacus quis nec pellentesque dictum feugiat vulputate.  </Label>
                    </Row>
                </Row>
                <Row className="ml-3">
                    <Row>
                        <TextLabel className="sub-topics" text={messages.service.toolsTechniques} />
                    </Row>
                    <Row>
                        <Label className="description">consectetur adipiscing elit. Viverra magna nunc risus iaculis eleifend
                            id facilisi. Consectetur ut at sapien lacinia libero eu. Viverra adipiscing curabitur enim maecenas
                            facilisi facilisis lacus euismod enim. Lacus quis nec pellentesque dictum feugiat vulputate. Iaculis
                            elit, nullam in ve nenatis consequat ultrices hendrerit pulvinar eget. Viverra id hac malesuada purus,
                            nunc, ultricies ac integer. Tempus urna,  Viverra adipiscing curabitur   facilisi facilisis lacus
                            euismod enim. Lacus quis nec pellentesque dictum feugiat vulputate.   Viverra id hac malesuada purus,
                            nunc, ultricies ac integer. Tempus urna,  Viverra adipiscing curabitur   facilisi facilisis lacus
                            euismod enim. Lacus quis nec pellentesque dictum feugiat vulputate.  </Label>
                    </Row>
                </Row>

            </Row>

            {/* Pricing plan */}
            <Row>
                Reviews
            </Row>

            <Row className="main-section">
                <Row><TextLabel className="font" style={{ fontWeight: '600', fontSize: '36px', lineHeight: '54px' }}
                    text={messages.service.otherServices} /> </Row>
                <Row className="d-flex justify-content-between">
                    <ServiceCard />
                    <ServiceCard />
                    <ServiceCard />
                    <ServiceCard />
                    <ServiceCard />
                </Row>

            </Row>

        </Container>
    </div>);
};

export { ServicePage };
