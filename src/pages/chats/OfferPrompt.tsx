import { useState } from 'react';
import cloud from '../../assets/images/chatspage/cloud.png';
import cloud2 from '../../assets/images/chatspage/cloud2.png';
import AppointmentForm from './AppointmentForm';

const OfferPrompt = () => {
  const [showAppointmentForm, setshowAppointmentForm] = useState(false);
  return (
    <>
      <div className="shadow bg-white" style={{ borderRadius: '8px' }}>
        <div className="py-5 border-bottom text-center">
          <h4>Do you Accept this request ?</h4>
          <small>Offer expires on Novemver 11, 2022 at 06:17 PM</small>
        </div>
        <div className="px-1 py-3 d-flex align-items-center justify-content-center gap-2">
          <button
            style={{ width: 180, fontSize: 14, paddingBlock: 10 }}
            className="btn btn-outline-danger"
          >
            Reject
          </button>
          <button
            style={{ width: 180, fontSize: 14, paddingBlock: 10 }}
            className="btn btn-success"
            onClick={() => setshowAppointmentForm(true)}
          >
            Accept & send Offer
          </button>
        </div>
      </div>

      <div className="d-md-flex my-5 justify-content-between align-items-center">
        <img src={cloud} alt="" height={23} className="flex-sh" />
        <p className="m-0 font-italic">
          If you need to ask more question,{' '}
          <a href="#" className="text-success">
            Click Here
          </a>
        </p>

        <img src={cloud2} alt="" height={60} className="flex-sh" />
      </div>

      {showAppointmentForm && (
        <AppointmentForm setshowAppointmentForm={setshowAppointmentForm} />
      )}
    </>
  );
};

export default OfferPrompt;
