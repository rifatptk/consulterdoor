import designing from '../../assets/images/userProfilePage/designing.png';
import design1 from '../../assets/images/userProfilePage/design1.png';
import design2 from '../../assets/images/userProfilePage/design2.png';
import design3 from '../../assets/images/userProfilePage/design3.png';

const HeroGallery = () => {
  return (
    <div>
      <img src={designing} width="100%" alt="" />
      <div className="row gap-1 my-3">
        <div className="col">
          <img src={design1} alt="" width="100%" />
        </div>
        <div className="col">
          <img src={design2} alt="" width="100%" />
        </div>
        <div className="col">
          <img src={design3} alt="" width="100%" />
        </div>
      </div>
    </div>
  );
};

export default HeroGallery;
