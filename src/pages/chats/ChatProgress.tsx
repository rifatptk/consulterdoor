import avatar from '../../assets/images/userProfilePage/avatar.png';
import arrow from '../../assets/images/chatspage/darr.png';
import { useState } from 'react';
import Questions from './Questions';
import OfferPrompt from './OfferPrompt';
import OrderAccepted from './OrderAccepted';
import SentOffer from './SentOffer';
import OfferAccepted from './OfferAccepted';
import PaymentProcess from './PaymentProcess';
import OfferRejected from './OfferRejected';
import PaymentReceived from './PaymentReceived';

type Props = any;

const questions = [
  'Leading digital agency with solid design and development expertise. We build readymade websites, mobile applications, and elaborate online business services.',
  'Leading digital agency with solid design and development expertise. We build readymade websites, mobile applications, and elaborate online business services.',
  'Leading digital agency with solid design and development expertise. We build readymade websites, mobile applications, and elaborate online business services.',
  'Leading digital agency with solid design and development expertise. We build readymade websites, mobile applications, and elaborate online business services.',
  'Leading digital agency with solid design and development expertise. We build readymade websites, mobile applications, and elaborate online business services.',
];
const ChatProgress = ({ profile }: Props) => {
  const [isExpanded, setisExpanded] = useState(false);
  const [offerPromptShown, setofferPromptShown] = useState(false);
  const [sentOfferShown, setsentOfferShown] = useState(false);
  return (
    <div id="chat-progress" className="p-4 p-lg-5">
      <div className="chat-top">
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

      {/* questions */}
      {isExpanded && (
        <>
          <Questions questions={questions} />
          <div className="chat-top mb-5">
            <div className="d-flex justify-content-between">
              <div className="d-flex gap-2" id="me">
                <img src={avatar} alt="" width={36} height={36} id="avatar" />
                <strong className="pe-2">{profile.username}</strong>
                <span>Nov 10, 2022, 11:12 PM</span>
              </div>
              <div
                id="expand-arrow"
                onClick={() => setofferPromptShown(!offerPromptShown)}
              >
                <img
                  src={arrow}
                  alt=""
                  style={{ rotate: offerPromptShown ? '180deg' : '0deg' }}
                />
              </div>
            </div>
          </div>
          {offerPromptShown && <OfferPrompt />}

          <OrderAccepted profile={profile} />
          <OfferAccepted profile={profile} />
          <PaymentProcess />
          <PaymentReceived />
          <OfferRejected profile={profile} />
          <div className="chat-top mb-5">
            <div className="d-flex justify-content-between">
              <div className="d-flex gap-2" id="me">
                <img src={avatar} alt="" width={36} height={36} id="avatar" />
                <strong className="pe-2">{profile.username}</strong>
                <span>Nov 10, 2022, 11:12 PM</span>
              </div>
              <div
                id="expand-arrow"
                onClick={() => setsentOfferShown(!sentOfferShown)}
              >
                <img
                  src={arrow}
                  alt=""
                  style={{ rotate: sentOfferShown ? '180deg' : '0deg' }}
                />
              </div>
            </div>
          </div>
          {sentOfferShown && <SentOffer />}
        </>
      )}
    </div>
  );
};

export default ChatProgress;
