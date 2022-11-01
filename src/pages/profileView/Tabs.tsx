import { useState } from 'react';
import './tabs.scss';

const data = [
  {
    tab: 'Description',
    content: (
      <>
        <p>
          consectetur adipiscing elit. Viverra magna nunc risus iaculis eleifend
          id facilisi. Consectetur ut at sapien lacinia libero eu. Viverra
          adipiscing curabitur enim maecenas facilisi facilisis lacus euismod
          enim. Lacus quis nec pellentesque dictum feugiat vulputate. Iaculis
          elit, nullam in ve nenatis consequat ultrices hendrerit pulvinar eget.
          Viverra id hac malesuada purus, nunc, ultricies ac integer. Tempus
          urna, Viverra adipiscing curabitur. lacus euismod enim. Lacus quis nec
        </p>
        <p>
          pellentesque dictum feugiat vulputate. Iaculis elit, nullam in ve
          nenatis consequat ultrices hendrerit pulvinar eget. Viverra id hac
          malesuada purus, nunc, ultricies ac integer. Tempus urna, Viverra
          adipiscing curabitur. lacus euismod enim. Lacus quis nec pellentesque
          dictum feugiat vulputate. Iaculis elit, nullam in ve nenatis consequat
          ultrices hendrerit pulvinar eget. Viverra id hac malesuada purus,
          nunc, ultricies ac integer. Tempus urna, Viverra adipiscing curabitur.
        </p>
      </>
    ),
  },
  {
    tab: 'Education',
    content: (
      <>
        <p>
          Education adipiscing elit. Viverra magna nunc risus iaculis eleifend
          id facilisi. Consectetur ut at sapien lacinia libero eu. Viverra
          adipiscing curabitur enim maecenas facilisi facilisis lacus euismod
          enim. Lacus quis nec pellentesque dictum feugiat vulputate. Iaculis
          elit, nullam in ve nenatis consequat ultrices hendrerit pulvinar eget.
          Viverra id hac malesuada purus, nunc, ultricies ac integer. Tempus
          urna, Viverra adipiscing curabitur. lacus euismod enim. Lacus quis nec
        </p>
        <p>
          pellentesque dictum feugiat vulputate. Iaculis elit, nullam in ve
          nenatis consequat ultrices hendrerit pulvinar eget. Viverra id hac
          malesuada purus, nunc, ultricies ac integer. Tempus urna, Viverra
          adipiscing curabitur. lacus euismod enim. Lacus quis nec pellentesque
          dictum feugiat vulputate. Iaculis elit, nullam in ve nenatis consequat
          ultrices hendrerit pulvinar eget. Viverra id hac malesuada purus,
          nunc, ultricies ac integer. Tempus urna, Viverra adipiscing curabitur.
        </p>
      </>
    ),
  },
  {
    tab: 'Skills',
    content: (
      <>
        <p>
          Skills adipiscing elit. Viverra magna nunc risus iaculis eleifend id
          facilisi. Consectetur ut at sapien lacinia libero eu. Viverra
          adipiscing curabitur enim maecenas facilisi facilisis lacus euismod
          enim. Lacus quis nec pellentesque dictum feugiat vulputate. Iaculis
          elit, nullam in ve nenatis consequat ultrices hendrerit pulvinar eget.
          Viverra id hac malesuada purus, nunc, ultricies ac integer. Tempus
          urna, Viverra adipiscing curabitur. lacus euismod enim. Lacus quis nec
        </p>
        <p>
          pellentesque dictum feugiat vulputate. Iaculis elit, nullam in ve
          nenatis consequat ultrices hendrerit pulvinar eget. Viverra id hac
          malesuada purus, nunc, ultricies ac integer. Tempus urna, Viverra
          adipiscing curabitur. lacus euismod enim. Lacus quis nec pellentesque
          dictum feugiat vulputate. Iaculis elit, nullam in ve nenatis consequat
          ultrices hendrerit pulvinar eget. Viverra id hac malesuada purus,
          nunc, ultricies ac integer. Tempus urna, Viverra adipiscing curabitur.
        </p>
      </>
    ),
  },
  {
    tab: 'Experience',
    content: (
      <>
        <p>
          experience adipiscing elit. Viverra magna nunc risus iaculis eleifend
          id facilisi. Consectetur ut at sapien lacinia libero eu. Viverra
          adipiscing curabitur enim maecenas facilisi facilisis lacus euismod
          enim. Lacus quis nec pellentesque dictum feugiat vulputate. Iaculis
          elit, nullam in ve nenatis consequat ultrices hendrerit pulvinar eget.
          Viverra id hac malesuada purus, nunc, ultricies ac integer. Tempus
          urna, Viverra adipiscing curabitur. lacus euismod enim. Lacus quis nec
        </p>
        <p>
          pellentesque dictum feugiat vulputate. Iaculis elit, nullam in ve
          nenatis consequat ultrices hendrerit pulvinar eget. Viverra id hac
          malesuada purus, nunc, ultricies ac integer. Tempus urna, Viverra
          adipiscing curabitur. lacus euismod enim. Lacus quis nec pellentesque
          dictum feugiat vulputate. Iaculis elit, nullam in ve nenatis consequat
          ultrices hendrerit pulvinar eget. Viverra id hac malesuada purus,
          nunc, ultricies ac integer. Tempus urna, Viverra adipiscing curabitur.
        </p>
      </>
    ),
  },
];

const Tabs = () => {
  const [selected, setselected] = useState(0);

  return (
    <div id="tabs">
      <div id="tabs-container">
        <div id="tablist">
          {data.map((tab, i) => (
            <div
              key={i}
              className={`tab-title ${i === selected ? 'active' : ''}`}
              onClick={() => setselected(i)}
            >
              {tab.tab}
            </div>
          ))}
        </div>

        <div id="tab-content">{data[selected].content}</div>
      </div>
    </div>
  );
};

export default Tabs;
