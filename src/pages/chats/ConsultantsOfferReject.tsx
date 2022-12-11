import alt from '../../assets/images/chatspage/alt.png';

type Props = {};

const ConsultantsOfferReject = (props: Props) => {
  return (
    <div
      className="shadow bg-white text-dark-blue my-5"
      style={{ borderRadius: '8px' }}
    >
      <div className="px-4 px-md-5 py-4 border-bottom d-md-flex justify-content-between align-items-center">
        <div>
          <h4 className="text-green">You sent Offer</h4>
          <p className="m-0">Your Service Price is</p>
        </div>
        <button className="btn my-1 rounded rounded-pill bg-dark-blue text-white">
          LKR 2500.00
        </button>
      </div>
      <div
        className="py-3 px-4 px-md-5 rounded-bottom"
        style={{ backgroundColor: '#F2F6FC' }}
      >
        <p>Select your comfortable and suitable time slot from here.</p>
        <h6>Nov 10, 2022</h6>
        <div className="d-flex gap-2 flex-wrap justify-content-center">
          {new Array(3).fill('10.30am - 11.00 am').map((el, i) => (
            <button key={i} className="bg-secondary text-white p-2">
              {el}
            </button>
          ))}
        </div>
        <h6 className="mt-4">Nov 11, 2022</h6>
        <button className="bg-green text-white p-2">
          <span>10.30am - 11.00 am</span>
        </button>
      </div>

      <div className="p-5 px-4 px-md-5">
        <div className="d-md-flex justify-content-between align-items-center">
          <div>
            Do you have any concern about this <br /> agreement ? If yes, please
            DIscribe your <br /> Problem Here
          </div>
          <div>
            <div className="d-flex gap-2 align-items-center">
              <img src={alt} alt="" width={30} />
              <span>Pricing Problem</span>
            </div>
            <div className="d-flex gap-2 align-items-center">
              <img src={alt} alt="" width={30} />
              <span>Time Slot Issue</span>
            </div>
          </div>
        </div>
        <textarea
          className="w-100 border p-3 fst-italic mt-4"
          style={{ minHeight: '70px' }}
          placeholder="Describe your Problem Here...."
        ></textarea>
      </div>

      <div className="d-md-flex justify-content-end py-4 px-5 rounded-bottom border-top">
        <div>
          <em>
            If you need proceed with currant <br /> offer ?
            <a className="text-green font-bold text-decoration-underline">
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
          className="btn my-1 btn-danger"
        >
          Reject
        </button>
      </div>
    </div>
  );
};

export default ConsultantsOfferReject;
