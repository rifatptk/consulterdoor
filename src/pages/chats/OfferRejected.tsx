import cardTickRed from '../../assets/images/chatspage/card-tick-red.png';
import Issue from './Issue';

type Props = {
  profile: any;
};

const OfferRejected = ({ profile }: Props) => {
  return (
    <div className="chat-top mb-5 py-5">
      <div className="d-flex gap-2" id="me">
        <img src={profile.avatar} alt="" width={36} height={36} id="avatar" />
        <strong className="pe-2">{profile.username}</strong>
        <span>Nov 10, 2022, 11:12 PM</span>
      </div>
      <em className="d-block text-center">Mueez have Rejected your Offer.</em>

      <div className="init-button bg-red my-4">
        <div className="icon">
          <img src={cardTickRed} alt="" width={25} />
        </div>
        <span>Offer Rejected</span>
      </div>
      <Issue />
    </div>
  );
};

export default OfferRejected;
