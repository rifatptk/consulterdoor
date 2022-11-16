import developer from '../../assets/images/userProfilePage/developer.svg';

const data = [
  {
    title:
      'Consectetur adipiscing elit. Viverra magna nunc risus iaculis eleifend id magna nunc risus iaculis eleifend id facilisi.',
    description:
      'Consectetur adipiscing elit. Viverra magna nunc risus iaculis eleifend id magna nunc risus iaculis eleifend id facilisi. facilisi  Consectetur adipiscing elit. Viverra magna nunc risus iaculis eleifend id magna nunc risus iaculis eleifend id facilisi. facilisi. . ',
  },
  {
    title: 'Best UI/UX Design for  Web And Mobile.',
    description:
      'Consectetur adipiscing elit. Viverra magna nunc risus iaculis eleifend id magna nunc risus iaculis eleifend id facilisi. facilisi  Consectetur adipiscing elit. Viverra magna nunc risus iaculis eleifend id magna nunc risus iaculis eleifend id facilisi. facilisi. . ',
  },
  {
    title: 'Best UI/UX Design for  Web And Mobile.',
    description:
      'Consectetur adipiscing elit. Viverra magna nunc risus iaculis eleifend id magna nunc risus iaculis eleifend id facilisi. facilisi  Consectetur adipiscing elit. Viverra magna nunc risus iaculis eleifend id magna nunc risus iaculis eleifend id facilisi. facilisi. . ',
  },
];
type Props = {};

const Services = (props: Props) => {
  return (
    <div className="my-5" id="services">
      <div id="header">
        <h1>Services</h1>
        <img src={developer} alt="" width={250} />
      </div>
      {data.map((el, i) => (
        <div key={i} className={`service service-${i + 1} shadow `}>
          <h3>{el.title}</h3>
          <p>{el.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Services;
