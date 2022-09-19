import { useNavigate } from 'react-router-dom';
import { Col, Container } from 'reactstrap';
import { HomeOnboardingSvg } from '../../../assets/images';
import { SearchInput } from '../../molecules';
const HomeOnboarding = () => {
  const navigate = useNavigate();

  const handleFocus = async (event: any) => {
    navigate('/search');
  };
  return (
    <Container fluid={true} className="onboarding-container">
      <img
        src={HomeOnboardingSvg}
        className="onboarding-container-background-image d-none d-md-block"
      />
      <Col md={6}>
        <div className="onboarding-title font-bold font-size-extra-large ">
          Find & Hire Expert Consultants
        </div>
        <div className="onboarding-description font-regular font-size-regular mb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim platea
          risus tincidunt eu. Ut pretium nec
        </div>
        <SearchInput
          onSearch={() => {
            // TODO SHOULD add search function
            return;
          }}
          onFocus={handleFocus}
        />
      </Col>
      <Col md={6} />
    </Container>
  );
};

export { HomeOnboarding };
