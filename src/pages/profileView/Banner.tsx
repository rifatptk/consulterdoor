import avatar from '../../assets/images/userProfilePage/avatar.png';
import Fire from '../../assets/images/userProfilePage/Fire.svg';
import userOctagone from '../../assets/images/userProfilePage/user-octagon.svg';
import medal from '../../assets/images/userProfilePage/Medal-Star.svg';
import global from '../../assets/images/userProfilePage/global.svg';
import map from '../../assets/images/userProfilePage/Map-Arrow-Up.svg';
import translate from '../../assets/images/userProfilePage/translate.svg';
import profileLink from '../../assets/images/userProfilePage/profile-link.svg';

function Banner() {
  return (
    <div>
      <h1 className="fw-bolder text-333">Profile View</h1>

      <div id="profile-view-banner">
        <div
          id="banner-content-left"
          className="position-relative d-md-flex align-items-center w-100 gap-md-5 my-3 p-4 bg-darkblue"
        >
          <div className="position-relative mb-3 mb-md-0">
            <img src={avatar} id="avatar" alt="" />
            <div id="active-indicator"></div>
          </div>
          {/* dilshan athukorala */}
          <div className="w-100">
            {/* header */}
            <div
              id="header"
              className="d-flex gap-3 justify-content-between align-items-center"
            >
              <h1>Dilshan Athukorala</h1>
              <div className="d-flex align-items-center ga-2" id="profile-link">
                <span>Profile Link</span>
                <img src={profileLink} alt="" width={24} />
              </div>
            </div>
            <hr />

            {/* items */}
            <div
              id="items"
              className="d-md-flex justify-content-between align-items-center"
            >
              <div>
                <div className="d-flex gap-2 align-items-center my-3">
                  <img src={userOctagone} alt="" width={24} />
                  <span className="item-text">UI?UX Designer</span>
                </div>
                <div className="d-flex gap-2 align-items-center my-3">
                  <img src={medal} alt="" width={24} />
                  <span className="item-text">Since May 10,2022</span>
                </div>
                <div className="d-flex gap-2 align-items-center my-3">
                  <img src={Fire} alt="" width={24} />
                  <span className="item-text">Hourly Rate</span>
                  <strong>$50</strong>
                </div>
              </div>
              <div>
                <div className="d-flex gap-2 align-items-center my-3">
                  <img src={global} alt="" width={24} />
                  <span className="item-text">Sri Lanka</span>
                </div>
                <div className="d-flex gap-2 align-items-center my-3">
                  <img src={map} alt="" width={24} />
                  <span className="item-text">Colombo</span>
                </div>
                <div className="d-flex gap-2 align-items-center my-3">
                  <img src={translate} alt="" width={24} />
                  <span className="item-text">Sinhala | English | Japan</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="banner-content-right" className="bg-darkblue my-3 border-left">
          <h3>
            Get matched with sellers <br /> for your project.
          </h3>
          <div id="appointment-btn">Make Appointment</div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
