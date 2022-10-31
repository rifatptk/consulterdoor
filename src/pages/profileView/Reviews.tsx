import avatar from '../../assets/images/userProfilePage/circle-avatar.png';
import usa from '../../assets/images/userProfilePage/usa.png';
import FeedBackCard from '../userProfile/FeedBackCard';
import star9 from '../../assets/images/userProfilePage/star-9.svg';
import star from '../../assets/images/homepage/star.svg';

type Props = {};
const data = [
  {
    name: 'Abdouhharounake',
    country: 'United States',
    avatar: avatar,
    flag: usa,
    rating: '5.0',
    description:
      'consectetur adipiscing elit. Viverra magna nunc risus iaculis eleifend id facilisi. Consectetur ut at sapien lacinia libero eu.',
  },
  {
    name: 'Abdouhharounake',
    country: 'United States',
    avatar: avatar,
    flag: usa,
    rating: '5.0',
    description:
      'consectetur adipiscing elit. Viverra magna nunc risus iaculis eleifend id facilisi. Consectetur ut at sapien lacinia libero eu.',
  },
  {
    name: 'Abdouhharounake',
    country: 'United States',
    avatar: avatar,
    flag: usa,
    rating: '5.0',
    description:
      'consectetur adipiscing elit. Viverra magna nunc risus iaculis eleifend id facilisi. Consectetur ut at sapien lacinia libero eu.',
  },
  {
    name: 'Abdouhharounake',
    country: 'United States',
    avatar: avatar,
    flag: usa,
    rating: '5.0',
    description:
      'consectetur adipiscing elit. Viverra magna nunc risus iaculis eleifend id facilisi. Consectetur ut at sapien lacinia libero eu.',
  },
  {
    name: 'Abdouhharounake',
    country: 'United States',
    avatar: avatar,
    flag: usa,
    rating: '5.0',
    description:
      'consectetur adipiscing elit. Viverra magna nunc risus iaculis eleifend id facilisi. Consectetur ut at sapien lacinia libero eu.',
  },
];
const Reviews = (props: Props) => {
  return (
    <div id="reviews">
      <div className="header">
        <h1>Reviews</h1>
        <div>
          <img src={star9} alt="" />
          <span>4.9</span>
          <small>(30)</small>
        </div>
      </div>
      <div className="criterias row gap-md-5">
        <div className="col-md-3">
          <div>
            <span>Criteria 1 enim maecenas</span>
            <img src={star9} alt="" />
            <span>4.9</span>
          </div>
          <div>
            <span>Criteria 1 enim maecenas</span>
            <img src={star} alt="" />
            <span>5.0</span>
          </div>
        </div>
        <div className="col-md-3">
          <div>
            <span>Criteria 1 enim maecenas</span>
            <img src={star} alt="" />
            <span>5.0</span>
          </div>
          <div>
            <span>Criteria 1 enim maecenas</span>
            <img src={star} alt="" />
            <span>5.0</span>
          </div>
        </div>
      </div>
      <div className="row" style={{ marginBottom: 46 }}>
        {data.map((user, i) => (
          <FeedBackCard user={user} key={i} col={4} />
        ))}
      </div>
      <hr />
    </div>
  );
};

export default Reviews;
