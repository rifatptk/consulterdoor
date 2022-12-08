import card from '../../assets/images/chatspage/card-tick-green.png';

const PaymentReceived = () => {
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
      <em className="d-block text-center">
        Mueez have Payed your Payment Successfully.
      </em>
      <div className="init-button bg-green my-4">
        <div className="icon">
          <img src={card} alt="" width={25} />
        </div>
        <span>Payment Received</span>
      </div>
    </div>
  );
};

export default PaymentReceived;
