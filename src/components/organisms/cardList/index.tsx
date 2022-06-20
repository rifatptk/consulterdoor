import { Container, Row, Col } from 'reactstrap';

function CardList() {
  const card = () => (
    <div style={{ width: 250, height: 150, background: 'red' }}>test</div>
  );
  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col align-self-center col-md-4 col-sm-12 m-0 mt-5 p-0">
          {card()}
        </div>
        <div className="col align-self-center col-md-4 col-sm-12 m-0 mt-5 p-0">
          {card()}
        </div>
        <div className="col align-self-center col-md-4 col-sm-12 m-0 mt-5 p-0">
          {card()}
        </div>
        <div className="col align-self-center col-md-4 col-sm-12 m-0 mt-5 p-0">
          {card()}
        </div>
        <div className="col align-self-center col-md-4 col-sm-12 m-0 mt-5 p-0">
          {card()}
        </div>
      </div>
    </div>
  );
}

export { CardList };
