import close from '../../assets/images/chatspage/close-red.png';

type Props = {
  setshowAppointmentForm: (param: boolean) => void;
};

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
      }}
    >
      <form
        id="appointment-form"
        className="shadow p-2 p-md-5"
        style={{
          width: '80%',
          background: 'white',
          margin: '80px auto',
          borderRadius: 10,
        }}
      >
        <header className="d-flex justify-content-between align-items-center">
          <div />
          <h5>Make Appointment</h5>
          <img
            style={{ cursor: 'pointer' }}
            src={close}
            width={50}
            alt=""
            onClick={() => setshowAppointmentForm(false)}
          />
        </header>

        <main className="mt-2">
          <h6>1. Add Your Price plan</h6>
          <div className="border rounded p-3">
            <div className="d-flex gap-2 gap-md-5">
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
              <button className="btn rounded rounded-pill dark-blue-bg">
                LKR 0.00
              </button>
            </div>
            <hr />
            <textarea
              placeholder="Add Note"
              className="border-0 w-100 font-italic"
              // cols={30}
              rows={5}
            ></textarea>
          </div>
        </main>
      </form>
    </div>
  );
};

export default AppointmentForm;
