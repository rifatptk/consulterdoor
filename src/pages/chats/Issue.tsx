import alt from '../../assets/images/chatspage/alt.png';

const Issue = () => {
  return (
    <div className="bg-white shadow mt-2 rounded">
      <div className="border-bottom pt-3">
        <div className="d-flex align-items-center gap-2 py-3 px-4 px-md-5">
          <img src={alt} width={24} alt="" />
          <strong>Time Slot Issue</strong>
        </div>
        <p className="px-4 px-md-5">
          Rejected reason description Leading digital agency with solid design
          and development expertise. We build readymade websites, mobile
          applications,{' '}
        </p>
      </div>
      <div className="d-flex justify-content-end py-4 px-3 px-md-5 rounded-bottom">
        <button className="text-danger">Close Conversation</button>
        <button
          style={{
            width: 180,
            fontSize: 14,
            paddingBlock: 10,
            marginLeft: 16,
          }}
          className="btn btn-success"
        >
          Resend Offer
        </button>
      </div>
    </div>
  );
};

export default Issue;
