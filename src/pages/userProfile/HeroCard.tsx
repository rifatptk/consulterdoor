import avatar from '../../assets/images/userProfilePage/avatar.png';
import star from '../../assets/images/homepage/star.svg';

function HeroCard() {
  return (
    <div className="d-flex flex-column align-items-center py-5" id="hero-card">
      <div className="position-relative">
        <img src={avatar} alt="" width={170} />
        <div id="active-indicator"></div>
      </div>
      <h3 className="hero-card-name text-333 my-2">Dilshan Athukorala</h3>
      <p className="hero-card-title text-828282">I am UI/UX Designer</p>

      <div className="hero-card-ratings">
        <div className=" d-flex gap-2">
          <img src={star} alt="" width={30} />
          <img src={star} alt="" width={30} />
          <img src={star} alt="" width={30} />
          <img src={star} alt="" width={30} />
          <img src={star} alt="" width={30} />
        </div>
        <div className="d-flex justify-content-around my-2">
          <span className="fw-bolder text-333">5.0</span>
          <span className="text-828282">(30 reviews)</span>
        </div>
      </div>

      <button className="hero-card-contact-button fw-bolder my-3">
        Contact
      </button>

      <button className="hero-card-appointment-button mt-4">
        Make Appointment
      </button>
    </div>
  );
}

export default HeroCard;
