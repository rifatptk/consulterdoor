import { useState } from 'react';
import graduate from '../../assets/images/userProfilePage/graduate.svg';
import handshake from '../../assets/images/userProfilePage/handshake.svg';
import './tabs.scss';

const data = [
  {
    tab: 'Experience',
    content: [
      {
        img: handshake,
        title: 'UI/UX Design',
        institute: 'Company Name Here',
        during: '2017 - 2022',
      },
      {
        img: handshake,
        title: 'Associate UI/UX Design',
        institute: 'Company Name Here',
        during: '2017 - 2022',
      },
      {
        img: handshake,
        title: 'Trainee UI/UX Design',
        institute: 'Company Name Here',
        during: '2017 - 2022',
      },
      {
        img: handshake,
        title: 'Associate UI/UX Design',
        institute: 'Company Name Here',
        during: '2017 - 2022',
      },
    ],
  },
  {
    tab: 'Education',
    content: [
      {
        img: graduate,
        title: 'Bachelor of Technology - BICT ',
        institute: 'Company Name Here',
        during: '2017 - 2022',
      },
      {
        img: graduate,
        title: 'Bachelor of Technology - BICT ',
        institute: 'Company Name Here',
        during: '2017 - 2022',
      },
      {
        img: graduate,
        title: 'Bachelor of Technology - BICT ',
        institute: 'Company Name Here',
        during: '2017 - 2022',
      },
      {
        img: graduate,
        title: 'Bachelor of Technology - BICT ',
        institute: 'Company Name Here',
        during: '2017 - 2022',
      },
    ],
  },
];

const Tabs = () => {
  const [selected, setselected] = useState(0);

  return (
    <div id="tabs" className="shadow">
      <div id="tabs-container">
        <div id="tablist">
          {data.map((tab, i) => (
            <div
              key={i}
              className={`tab-title ${i === selected ? 'active' : ''}`}
              onClick={() => setselected(i)}
            >
              <div>{tab.tab}</div>
              <div className="bottom-bar"/>
            </div>
          ))}
        </div>

        <div id="tab-content">
          {data[selected].content.map((el, i) => (
            <div key={i} className="content-element">
              <img className="element-image" src={el.img} alt="" />
              <div>
                <h4>{el.title}</h4>
                <p className="institute">{el.institute}</p>
                <p className="during">{el.during}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
