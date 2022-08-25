import { Col, Container, Row } from 'reactstrap';

interface ITimeslot {
  time: string;
  date: Date;
}
interface IProps {
  timeslots: ITimeslot[];
  handleSubmit: (date: Date) => void;
}

const SelectableTimeslots = ({ timeslots, handleSubmit }: IProps) => {
  return (
    <Container className="selectable-timeslot-container">
      <Row className="justify-content-center">
        {timeslots.map((timeslot, index) => (
          <Col key={index} sm="auto" className="mb-3">
            <button onClick={() => handleSubmit(timeslot.date)}>
              <div className="selectable-timeslot-wrapper">
                <div className="font-size-extra-small font-regular secondary-font">
                  {timeslot.date.toLocaleDateString()}
                </div>
                <div className="secondary-font font-size-small selectable-timeslot-time-container">
                  {timeslot.time}
                </div>
              </div>
            </button>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export { SelectableTimeslots };
