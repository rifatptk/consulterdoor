import avatar from '../../assets/images/userProfilePage/circle-avatar.png';
import usa from '../../assets/images/userProfilePage/usa.png';
import FeedBackCard from './FeedBackCard';

const data = [
  {
    name: 'Abdouhharounake',
    country: 'United States',
    avatar,
    flag: usa,
    rating: '5.0',
    description:
      'consectetur adipiscing elit. Viverra magna nunc risus iaculis eleifend id facilisi. Consectetur ut at sapien lacinia libero eu.',
  },
  {
    name: 'Abdouhharounake',
    country: 'United States',
    avatar,
    flag: usa,
    rating: '5.0',
    description:
      'consectetur adipiscing elit. Viverra magna nunc risus iaculis eleifend id facilisi. Consectetur ut at sapien lacinia libero eu.',
  },
  {
    name: 'Abdouhharounake',
    country: 'United States',
    avatar,
    flag: usa,
    rating: '5.0',
    description:
      'consectetur adipiscing elit. Viverra magna nunc risus iaculis eleifend id facilisi. Consectetur ut at sapien lacinia libero eu.',
  },
  {
    name: 'Abdouhharounake',
    country: 'United States',
    avatar,
    flag: usa,
    rating: '5.0',
    description:
      'consectetur adipiscing elit. Viverra magna nunc risus iaculis eleifend id facilisi. Consectetur ut at sapien lacinia libero eu.',
  },
  {
    name: 'Abdouhharounake',
    country: 'United States',
    avatar,
    flag: usa,
    rating: '5.0',
    description:
      'consectetur adipiscing elit. Viverra magna nunc risus iaculis eleifend id facilisi. Consectetur ut at sapien lacinia libero eu.',
  },
];

const HeroFeedbacks = () => {
  return (
    <div id="hero-feedbacks">
      <h4 className="fw-bolder text-333">Feedbacks</h4>
      <div className="row">
        {data.map((user, i) => (
          <FeedBackCard user={user} key={i} col={6} />
        ))}
      </div>
    </div>
  );
};

export default HeroFeedbacks;
