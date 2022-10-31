import star from '../../assets/images/homepage/star.svg';

type Props = {
  col: number;
  user: {
    avatar: string;
    name: string;
    country: string;
    description: string;
    rating: string;
    flag: string;
  };
};

function FeedBackCard({ col, user }: Props) {
  return (
    <div className={`col-md-${col} mb-2 gx-2`}>
      <div className="hero-feedbacks-card d-flex">
        <div className="col-3">
          <img src={user.avatar} alt="" width={68} />
        </div>
        <div className="col-9">
          <p className="fw-bolder text-333">{user.name}</p>
          <div className="d-flex gap-2 align-items-end">
            <img src={user.flag} alt="" width={36} />
            <small className="text-828282">{user.country}</small>
          </div>
          <small className="text-4f4f4f">{user.description}</small>
          <div className="d-flex gap-3 align-items-center">
            <div className=" d-flex gap-1">
              <img src={star} alt="" width={13} />
              <img src={star} alt="" width={13} />
              <img src={star} alt="" width={13} />
              <img src={star} alt="" width={13} />
              <img src={star} alt="" width={13} />
            </div>
            <small className="text-333 fw-bolder">{user.rating}</small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeedBackCard;
