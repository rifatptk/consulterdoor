import img from '../../../assets/images/homepage/start-your-career.svg';

function StartCareer() {
  return (
    <div className="row align-items-center py-5 my-5">
      <div className="col-md-6">
        <img src={img} alt="" className="w-100" />
      </div>
      <div className="col-md-6 p-3">
        <h2 className="fw-semibold h2 text-333">
          Start your carrier as consultant, Join with US
        </h2>
        <p className="text-4f4f4f my-5">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
          <br />
          when an unknown printer took a galley of type and scrambled it to make
          a type specimen book. It has survived not only five centuries,
        </p>

        <button className="btn bg-1174 text-white p-3">
          Register As Consulton
        </button>
      </div>
    </div>
  );
}

export default StartCareer;
