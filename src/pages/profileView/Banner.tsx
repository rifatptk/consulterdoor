import avatar from '../../assets/images/userProfilePage/avatar.png';

function Banner() {
  return (
    <div>
      <h1 className="fw-bolder text-333">Profile View</h1>
      <div className="position-relative profile-view-banner d-flex align-items-center w-100 gap-5 my-3 p-4 bg-darkblue">
        <div className="position-relative">
          <img src={avatar} alt="" width={150} height={170} />
          <div id="active-indicator"></div>
        </div>
        <div>
          <h3>Dilshan Athukorala</h3>
          <h5>I am UI/UX Designer</h5>
          <h6>Joined May 10,2022</h6>
          <div className="pt-4">
            <span>Hourly Rate</span> <strong className="ms-3">$50</strong>
          </div>
        </div>
        <div className="profile-view-banner-menu">
          <div className="profile-view-banner-menu-circle"></div>
          <div className="profile-view-banner-menu-circle"></div>
          <div className="profile-view-banner-menu-circle"></div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
