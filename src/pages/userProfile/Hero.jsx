import avatar from '../../assets/images/userProfilePage/avatar.png';
import star from '../../assets/images/homepage/star.svg';
import HeroContent from './HeroContent';
import HeroCard from './HeroCard';
import HeroGallery from './HeroGallery';

const Hero = () => {
  return (
    <div className="container" id="userProfilePage">
      <h1 className="fw-bold text-333 my-5">
        Best UI/UX Design for Web And Mobile
      </h1>
      <div className="row">
        <div className="col-md-8">
          <div className="hero-left">
            <HeroGallery />
            <HeroContent />
          </div>
        </div>

        <div className="col-md-4 px-4">
          <HeroCard />
        </div>
      </div>
    </div>
  );
};

export default Hero;
