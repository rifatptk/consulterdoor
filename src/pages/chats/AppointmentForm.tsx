import close from '../../assets/images/chatspage/close-red.png';
import larr from '../../assets/images/chatspage/larr.png';

interface Props {
  setshowAppointmentForm: (param: boolean) => void;
}

const timeSlots = [
  '10.00am - 10.30am',
  '11.00am - 11.30am',
  '11.30am - 12.00pm',
  '10.00am - 10.30am',
  '11.00am - 11.30am',
  '11.30am - 12.00pm',
];

const AppointmentForm = ({ setshowAppointmentForm }: Props) => {
  return (
    <div
      style={{
        height: '100vh',
        width: '100%',
        position: 'fixed',
        top: 0,
        left: 0,
        backdropFilter: 'blur(4px)',
        zIndex: 9,
        overflow: 'auto',
      }}
    >
      <form
        id="appointment-form"
        className="shadow border p-3 p-md-5"
        style={{
          width: '80%',
          background: 'white',
          margin: '80px auto',
          borderRadius: 10,
        }}
      >
        <header className="d-flex justify-content-between align-items-center">
          <div />
          <h4 className="fw-bolder">Make Appointment</h4>
          <img
            style={{
              cursor: 'pointer',
            }}
            src={close}
            width={50}
            alt=""
            onClick={() => setshowAppointmentForm(false)}
          />
        </header>

        <main className="mt-2">
          <h6 className="mt-5 mb-3" style={{ fontSize: 20, fontWeight: 600 }}>
            1. Add Your Price plan
          </h6>
          <div className="border rounded p-3">
            <div id="price-plan-box" className="d-flex gap-2 gap-md-5">
              <label htmlFor="ammount">Enter Ammount</label>
              <div style={{ flex: 1 }}>
                <span className="fw-bold me-3">LKR</span>
                <input
                  type="text"
                  id="amount"
                  placeholder="0.00"
                  className="w-75 border-0 border-bottom"
                />
              </div>
              <button className="btn rounded rounded-pill bg-dark-blue text-white">
                LKR 0.00
              </button>
            </div>
            <hr />
            <textarea
              placeholder="Add Note"
              className="border-0 w-100 font-italic"
              rows={5}
            />
          </div>

          <h6 className="mt-5 mb-3" style={{ fontSize: 20, fontWeight: 600 }}>
            2. Send Available Time slots
          </h6>
          <div style={{ height: 300, background: '#dadada' }}/>

          <div className="d-flex justify-content-center align-items-center gap-1 gap-md-5">
            <img src={larr} alt="" />
            <div
              id="slots"
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                gap: 20,
                marginBlock: 35,
              }}
            >
              {timeSlots.map((slot, i) => (
                <button
                  style={{ fontSize: 20 }}
                  className={`btn slot-button ${
                    i === 1 || i === 3 || i === 4 ? 'btn-outline-primary' : ''
                  }`}
                  key={i}
                >
                  {slot}
                </button>
              ))}
            </div>
            <img src={larr} alt="" style={{ rotate: '180deg' }} />
          </div>

          <hr />
          <div
            id="dark-slots"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr 1fr',
              gap: 40,
              marginBlock: 35,
            }}
          >
            {timeSlots.map((slot, i) => (
              <button
                style={{ fontSize: 14, textAlign: 'left' }}
                className={`bg-dark-blue text-white p-4`}
                key={i}
              >
                <p style={{ fontSize: 10, margin: 0 }}>22/06/2022</p>
                <span className="slot-button">{slot}</span>
              </button>
            ))}
          </div>
          <hr />
          <div
            className="d-flex justify-content-end gap-2"
            style={{ paddingBlock: 35 }}
          >
            <button
              style={{ width: 170, paddingBlock: 16 }}
              className="btn btn-outline-danger"
            >
              Reset
            </button>
            <button
              style={{ width: 170, paddingBlock: 16 }}
              className="btn btn-success"
              onClick={() => setshowAppointmentForm(true)}
            >
              Send Offer
            </button>
          </div>
        </main>
      </form>
    </div>
  );
};

export default AppointmentForm;
