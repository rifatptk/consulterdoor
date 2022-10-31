import handshake from '../../assets/images/homepage/handshake.svg';
import lock from '../../assets/images/homepage/lock.svg';
import school from '../../assets/images/homepage/School.svg';
import Chat from '../../assets/images/homepage/Chat.svg';
import Edit from '../../assets/images/homepage/Edit.svg';
import Favourite from '../../assets/images/homepage/Favorite.svg';

const data = [
  {
    icon: handshake,
    title: 'Lorem ipsum dolor sit amet',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra magna nunc risus iaculis eleifend id facilisi. Consectetur ut at sapien lacinia libero eu',
  },
  {
    icon: lock,
    title: 'Lorem ipsum dolor sit amet',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra magna nunc risus iaculis eleifend id facilisi. Consectetur ut at sapien lacinia libero eu',
  },
  {
    icon: school,
    title: 'Lorem ipsum dolor sit amet',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra magna nunc risus iaculis eleifend id facilisi. Consectetur ut at sapien lacinia libero eu',
  },
  {
    icon: Chat,
    title: 'Lorem ipsum dolor sit amet',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra magna nunc risus iaculis eleifend id facilisi. Consectetur ut at sapien lacinia libero eu',
  },
  {
    icon: Edit,
    title: 'Lorem ipsum dolor sit amet',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra magna nunc risus iaculis eleifend id facilisi. Consectetur ut at sapien lacinia libero eu',
  },
  {
    icon: Favourite,
    title: 'Lorem ipsum dolor sit amet',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra magna nunc risus iaculis eleifend id facilisi. Consectetur ut at sapien lacinia libero eu',
  },
];

type Props = {};

function WhyChooseConsultingApp({}: Props) {
  return (
    <div>
      <h2 className="font-bold py-5 text-333">Why Choose Consulting App</h2>
      <div className="row justify-content-between">
        {data.map((card, i) => (
          <div key={i} className="col-md-4 p-3 mb-3">
            <div className="p-2">
              <img src={card.icon} alt="" />
              <h4
                className="my-4 text-4f4f4f fw-semibold"
                style={{ fontSize: 21 }}
              >
                {card.title}
              </h4>
              <p className="text-828282">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhyChooseConsultingApp;
