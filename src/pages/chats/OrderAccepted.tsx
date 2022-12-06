import like from '../../assets/images/chatspage/like-shapes.png';

type Props = {
  profile: any;
};

const OrderAccepted = ({ profile }: Props) => {
  return (
    <div className="chat-top mb-5 border-right py-5">
      <div className="d-flex gap-2" id="me">
        <img src={profile.avatar} alt="" width={36} height={36} id="avatar" />
        <strong className="pe-2">{profile.username}</strong>
        <span>Nov 10, 2022, 11:12 PM</span>
      </div>
      <div className="init-button bg-dark-blue my-4">
        <div className="icon">
          <img src={like} alt="" width={25} />
        </div>
        <span>Order Accepted</span>
      </div>
      <em className="d-block">
        Order Accepted by Dilshan Athukorala. consultant offer will be receive
        you soon
      </em>
    </div>
  );
};

export default OrderAccepted;
