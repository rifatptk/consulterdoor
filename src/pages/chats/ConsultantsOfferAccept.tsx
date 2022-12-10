import done from '../../assets/images/chatspage/done.png';

type Props = {};

const ConsultantsOfferAccept = (props: Props) => {
  return (
    <>
      <div
        className="shadow bg-white text-dark-blue my-5"
        style={{ borderRadius: '8px' }}
      >
        <div className="px-5 py-4 border-bottom d-flex justify-content-between align-items-center">
          <div>
            <h4 className="text-green">You sent Offer</h4>
            <p className="m-0">Your Service Price is</p>
          </div>
          <button className="btn rounded rounded-pill bg-dark-blue text-white">
            LKR 2500.00
          </button>
        </div>
        <div
          className="p-5 rounded-bottom"
          style={{ backgroundColor: '#F2F6FC' }}
        >
          <p>Select your comfortable and suitable time slot from here.</p>
          <h6>Nov 10, 2022</h6>
          <div className="d-flex gap-2 flex-wrap justify-content-between">
            {new Array(3).fill('10.30am - 11.00 am').map((el, i) => (
              <button key={i} className="bg-secondary text-white p-2">
                {el}
              </button>
            ))}
          </div>
          <h6 className="mt-4">Nov 11, 2022</h6>
          <button className="bg-green text-white p-2">
            <span>10.30am - 11.00 am</span>
            <img className="ms-3" src={done} alt="" width={24} />
          </button>
        </div>
        <div className="d-flex justify-content-end py-4 px-5 rounded-bottom border-top">
          <div>
            <em>
              Do you have any concern about <br /> this argument?{' '}
              <a className="text-red font-bold text-decoration-underline">
                Click Here
              </a>{' '}
            </em>
          </div>
          <button
            style={{
              width: 180,
              fontSize: 14,
              paddingBlock: 10,
              marginLeft: 16,
            }}
            className="btn btn-success"
          >
            Accept
          </button>
        </div>
      </div>
    </>
  );
};

export default ConsultantsOfferAccept;
