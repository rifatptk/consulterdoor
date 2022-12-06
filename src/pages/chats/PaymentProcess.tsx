type Props = {};

const PaymentProcess = (props: Props) => {
  return (
    <div className="chat-top mb-5 py-5 ">
      <div className="d-flex gap-2" id="me">
        <div
          className="bg-dark-blue fw-bold text-white d-flex justify-content-center align-items-center"
          style={{ width: 36, height: 36, borderRadius: '50%' }}
        >
          CD
        </div>
        <strong className="pe-2">Consulterdoor</strong>
        <span>Nov 10, 2022, 11:12 PM</span>
      </div>

      <div className="bg-white shadow mt-2 rounded ">
        <h5 className="border-bottom px-5 py-3">Payment Process</h5>
        <div
          style={{ background: '#F2F8FB' }}
          className="border-bottom px-5 py-3"
        >
          <div className="d-flex justify-content-between border-bottom">
            <div>
              <p>Consultant Ammount</p>
              <p>Tax</p>
            </div>
            <div className="fw-bold text-dark-blue">
              <p>LKR 2500.00</p>
              <p>LKR 2500.00</p>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center py-3">
            <span>Total Payment Ammount is</span>
            <button className="btn bg-dark-blue text-white rounded rounded-pill">
              LKR 2500.00
            </button>
          </div>
        </div>
        <div className="d-flex justify-content-end py-4 px-5 rounded-bottom">
          <button>Invoice</button>
          <button
            style={{
              width: 180,
              fontSize: 14,
              paddingBlock: 10,
              marginLeft: 16,
            }}
            className="btn btn-success"
          >
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentProcess;
