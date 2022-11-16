import bg from '../../assets/images/homepage/codebg.svg';
import avatar from '../../assets/images/homepage/avatar.svg';
import avatar1 from '../../assets/images/userProfilePage/avatar1.png';
import avatar2 from '../../assets/images/userProfilePage/avatar2.png';
import avatar3 from '../../assets/images/userProfilePage/avatar3.png';
import ConsultantCard from '../userProfile/ConsultantCard';

const data = [
  {
    name: 'Dilshan Athukorala',
    title: 'UI/UX Designer',
    description:
      'Service Name & Simple Description Lorem ipsum dolor sit amet,',
    rating: ['5.0', 49],
    bg,
    avatar,
    active: true,
  },
  {
    name: 'Dilshan Athukorala',
    title: 'UI/UX Designer',
    description:
      'Service Name & Simple Description Lorem ipsum dolor sit amet,',
    rating: ['5.0', 49],
    bg,
    avatar: avatar1,
    active: false,
  },
  {
    name: 'Dilshan Athukorala',
    title: 'UI/UX Designer',
    description:
      'Service Name & Simple Description Lorem ipsum dolor sit amet,',
    rating: ['5.0', 49],
    bg,
    avatar: avatar2,
    active: true,
  },
  {
    name: 'Dilshan Athukorala',
    title: 'UI/UX Designer',
    description:
      'Service Name & Simple Description Lorem ipsum dolor sit amet,',
    rating: ['5.0', 49],
    bg,
    avatar: avatar3,
    active: true,
  },
];

const SimilarConsultants = () => {
  return (
    <div className="container mb-5">
      <h4 className="text-333 fw-bolder my-5 pt-5">Similar Consultants</h4>
      <div className="row my-2 pb-5">
        {data.map((user, i) => (
          <ConsultantCard user={user} key={i} />
        ))}
      </div>
    </div>
  );
};

export default SimilarConsultants;
