import avatar from '../../assets/images/userProfilePage/avatar.png';
import arrow from '../../assets/images/chatspage/darr.png';
import { useState } from 'react';

type Props = any;

const ChatProgress = ({ profile }: Props) => {
  const [isExpanded, setisExpanded] = useState(false);
  return (
    <div id="chat-progress">
      <div className="chat-top p-5">
        <div className="d-flex justify-content-between">
          <div className="d-flex gap-2" id="me">
            <img src={avatar} alt="" width={36} height={36} id="avatar" />
            <strong className="pe-2">Me</strong>
            <span>Nov 10, 2022, 11:12 PM</span>
          </div>
          <div id="expand-arrow" onClick={() => setisExpanded(!isExpanded)}>
            <img
              src={arrow}
              alt=""
              style={{ rotate: isExpanded ? '180deg' : '0deg' }}
            />
          </div>
        </div>
        <div className="text-center fst-italic text-secondary">
          You have to started conversation with{' '}
          <strong>{profile.username}</strong>{' '}
        </div>
      </div>
    </div>
  );
};

export default ChatProgress;
