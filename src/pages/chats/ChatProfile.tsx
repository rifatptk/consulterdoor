import { useState } from 'react';
import arrow from '../../assets/images/chatspage/darr.png';
import zoom from '../../assets/images/chatspage/zoom.png';
import Switch from './Switch';

interface Props {
  profile: any;
  selectedScreen: string;
  setselectedScreen: (param: string) => void;
}
const ChatProfile = ({ profile, selectedScreen, setselectedScreen }: Props) => {
  const [isOn, setisOn] = useState(false);
  return (
    <div
      id="chatProfile"
      className={`${
        selectedScreen === 'user-profile' ? 'selected-screen' : ''
      }`}
    >
      {/* top */}
      <div>
        <div id="back-btn" onClick={() => setselectedScreen('chat-main')}>
          <img src={arrow} alt="" style={{ rotate: '90deg' }} />
        </div>
        <img src={profile.avatar} alt="" id="avatar" width={120} />
        <div className="active-indicor">
          <div className={`${profile.active ? 'active' : ''}`}/>
          <span>{profile.active ? 'Online' : 'Offline'}</span>
        </div>

        <h3 className="name">{profile.username}</h3>
        <p className="user-title">UI/UX Designer</p>
        <p className="started">
          Chat Started <br /> 01/06/2022 12:35 PM
        </p>

        <p className="lang">
          Sinhala | <span>English</span>
        </p>
      </div>
      <hr />

      {/* bottom */}
      <div>
        <div id="zoom" className="d-flex gap-3 align-items-center mt-5">
          <img src={zoom} alt="" width={50} />
          <div>
            <h6>Meeting Scheduled</h6>
            <small className="text-secondary">Not Scheduled yet</small>
          </div>
        </div>
        <button id="join-btn" className="btn rounded my-4">
          Join Meeting
        </button>

        <div id="mute-notification" className="d-flex gap-2 my-2">
          <p>Mute notifications</p>
          <Switch isOn={isOn} onClick={() => setisOn(!isOn)} />
        </div>
      </div>
    </div>
  );
};

export default ChatProfile;
