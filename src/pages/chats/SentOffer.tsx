const SentOffer = () => {
  return (
    <>
      <div
        className="shadow bg-white text-dark-blue"
        style={{ borderRadius: '8px' }}
      >
        <div className="p-5 border-bottom d-flex justify-content-between align-items-center">
          <div>
            <h4>You sent Offer</h4>
            <em>Offer expires on Novemver 11, 2022 at 06:17 PM</em>
          </div>
          <button className="btn rounded rounded-pill bg-dark-blue text-white">
            LKR 2500.00
          </button>
        </div>
        <div className="p-5 bg-white border-top d-flex gap-2 flex-wrap rounded-bottom">
          {new Array(4).fill('10.30am - 11.00 am').map((el, i) => (
            <button key={i} className="bg-dark-blue text-white p-2">
              {el}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default SentOffer;
