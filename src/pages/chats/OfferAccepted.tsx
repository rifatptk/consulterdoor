import cardTick from '../../assets/images/chatspage/card-tick.png';

type Props = {
  profile: any;
};

const OfferAccepted = ({ profile }: Props) => {
  return (
    <div className="chat-top mb-5 py-5">
      <div className="d-flex gap-2" id="me">
        <img src={profile.avatar} alt="" width={36} height={36} id="avatar" />
        <div>
          <div>
            <strong className="pe-2">{profile.username}</strong>
            Nov 10, 2022, 11:12 PM
          </div>
          <em>Here's Consultant Offer</em>
        </div>
      </div>

      <div className="init-button bg-purple my-4">
        <div className="icon">
          <img src={cardTick} alt="" width={25} />
        </div>
        <span>Offer Accepted</span>
      </div>
    </div>
  );
};

export default OfferAccepted;
