import star from '../../assets/images/homepage/star.svg';

type Props = {
  user: {
    bg: string;
    avatar: string;
    description: string;
    title: string;
    name: string;
    active: boolean;
    rating: any[];
  };
};

const ConsultantCard = ({ user }: Props) => {
  return (
    <div className="col-md-3 p-2">
      <div
        className="shadow overflow-hidden position-relative "
        style={{ borderRadius: 8 }}
      >
        <img
          src={user.bg}
          alt=""
          className="w-100"
          height="132px"
          style={{ objectFit: 'cover' }}
        />
        <div>
          <img
            src={user.avatar}
            alt=""
            className="position-absolute mx-auto"
            width={190}
            height={170}
            style={{
              top: '8px',
              left: '0',
              right: '0',
              objectFit: 'cover',
            }}
          />
          <div
            style={{
              width: 24,
              height: 24,
              border: '2px solid white',
              borderRadius: '50%',
              background: user.active ? '#08DE77' : 'lightgray',
              position: 'absolute',
              top: 144,
              left: 0,
              right: 0,
              margin: '0 auto',
            }}
          ></div>
        </div>

        <div className="text-center mt-5 mb-3 px-3">
          <h5 className="fw-bolder text-333">{user.name}</h5>
          <p className="text-828282">{user.title}</p>
          <p className="text-828282" style={{ fontSize: 12 }}>
            {user.description}
          </p>
        </div>

        <div className="row p-3">
          <div className="col d-flex align-items-center gap-2 ">
            <img src={star} alt="" width={22} className="mb-1" />
            <span className="text-warning fw-bold">{user.rating[0]}</span>
            <small className="fw-bolder text-4f4f4f">({user.rating[1]})</small>
          </div>
          <div className="col text-end text-4f4f4f fw-bolder">Start</div>
        </div>
      </div>
    </div>
  );
};

export default ConsultantCard;
