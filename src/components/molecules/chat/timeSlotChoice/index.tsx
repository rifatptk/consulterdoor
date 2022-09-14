import { Col, Container, Row } from 'reactstrap';

interface ITimeslot {
  time: string;
  date: Date;
}
interface IProps {
  timeslots: ITimeslot[];
  handleSubmit: (props: any) => void;
  timeSlotConfirmFn: (props: any) => any;
  requestAnotherSlotConfirmFn: (props?: any) => any;
  declineFn: () => any;
}

const SelectableTimeslots = ({
  timeslots,
  handleSubmit,
  timeSlotConfirmFn,
  requestAnotherSlotConfirmFn,
  declineFn,
}: IProps) => {
  return (
    <Container className="selectable-timeslot-container">
      <Row className="justify-content-center">
        {timeslots.map((timeslot, index) => (
          <Col key={index} sm="auto" className="mb-3">
            <button
              onClick={() =>
                handleSubmit({
                  text: 'Are you sure this timeslot?',
                  modalIsOpen: true,
                  haveTextInput: false,
                  confirmFn: () => () => timeSlotConfirmFn(timeslot),
                  declineFn: () => () => declineFn(),
                })
              }
            >
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
        <Col sm="auto" className="mb-3">
          <button
            onClick={() =>
              handleSubmit({
                text: 'Are there any preferred timeslot for you?',
                modalIsOpen: true,
                haveTextInput: true,
                confirmFn: () => (inputText: string) =>
                  requestAnotherSlotConfirmFn(inputText),
                declineFn: () => () => declineFn(),
              })
            }
          >
            {'Request another slot'}
          </button>
        </Col>
      </Row>
    </Container>
  );
};

export { SelectableTimeslots };
