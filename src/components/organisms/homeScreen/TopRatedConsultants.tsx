import bg from '../../../assets/images/homepage/codebg.svg';
import avatar from '../../../assets/images/homepage/avatar.svg';
import star from '../../../assets/images/homepage/star.svg';

type Props = {};

const data = [
  {
    name: 'Dilshan Athukorala',
    title: 'Service Name & Simple Description Lorem ipsum dolor sit amet,',
    rating: ['5.0', 49],
    bg,
    avatar,
    active: true,
  },
  {
    name: 'Dilshan Athukorala',
    title: 'Service Name & Simple Description Lorem ipsum dolor sit amet,',
    rating: ['5.0', 49],
    bg,
    avatar,
    active: false,
  },
  {
    name: 'Dilshan Athukorala',
    title: 'Service Name & Simple Description Lorem ipsum dolor sit amet,',
    rating: ['5.0', 49],
    bg,
    avatar,
    active: true,
  },
  {
    name: 'Dilshan Athukorala',
    title: 'Service Name & Simple Description Lorem ipsum dolor sit amet,',
    rating: ['5.0', 49],
    bg,
    avatar,
    active: true,
  },
];

function TopRatedConsultants({}: Props) {
  return (
    <div className="row my-2">
      {data.map((user, i) => (
        <div key={i} className="col-md-3 p-2">
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
              <p className="text-828282" style={{ fontSize: 12 }}>
                {user.title}
              </p>
            </div>

            <div className="row p-3">
              <div className="col d-flex align-items-center gap-2 ">
                <img src={star} alt="" width={22} className="mb-1" />
                <span className="text-warning fw-bold">{user.rating[0]}</span>
                <small className="fw-bolder text-4f4f4f">
                  ({user.rating[1]})
                </small>
              </div>
              <div className="col text-end text-4f4f4f fw-bolder">Start</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TopRatedConsultants;
