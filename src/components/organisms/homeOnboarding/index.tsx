import { useNavigate } from 'react-router-dom';
import { Col, Container } from 'reactstrap';
import { HomeOnboardingSvg } from '../../../assets/images';
import { SearchInput } from '../../molecules';
import close from '../../../assets/images/homepage/close.svg';

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
        <div className="onboarding-title font-bold ">
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
        <div className="d-flex justify-content-between flex-wrap">
          <div className="d-flex align-items-center gap-4 search-result">
            <span>Result</span>
            <img src={close} alt="" width={18} />
          </div>
          <div className="d-flex align-items-center gap-4 search-result">
            <span>Result</span>
            <img src={close} alt="" width={18} />
          </div>
          <div className="d-flex align-items-center gap-4 search-result">
            <span>Result</span>
            <img src={close} alt="" width={18} />
          </div>
          <div className="d-flex align-items-center gap-4 search-result">
            <span>Result</span>
            <img src={close} alt="" width={18} />
          </div>
        </div>
      </Col>
      <Col md={6} />
    </Container>
  );
};

export { HomeOnboarding };
