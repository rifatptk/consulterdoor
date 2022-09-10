import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Calendar from 'react-calendar';
import { IoIosCloseCircle } from 'react-icons/io';
import Slider from 'react-slick';
import {
  Col,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
} from 'reactstrap';
import { getTimeSlots } from '../../../shared/utils';
import { Button, BUTTON_TYPES } from '../../shared';

const timeslotSettings = {
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  rows: 2,
  responsive: [
    {
      breakpoint: 1140,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 540,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const DURATION = 30;

interface ITimeslot {
  time: string;
  date: Date;
}

interface ITimeslotProps {
  timeslot: ITimeslot;
  onTimeslotClick: (time: ITimeslot) => void;
  selectedTimeslots?: ITimeslot[];
}

interface ICalenderModalProps {
  isCalenderOpen: boolean;
  handleSubmit: (timeslots: ITimeslot[]) => void;
  handleToggle: () => void;
}

const TimeSlot = ({
  timeslot,
  onTimeslotClick,
  selectedTimeslots,
}: ITimeslotProps) => {
  return (
    <button
      onClick={() => {
        onTimeslotClick(timeslot);
      }}
      className="container"
    >
      <div
        className={
          selectedTimeslots?.find(
            (slot) => slot.date.getTime() === timeslot.date.getTime()
          )
            ? 'selected calender-modal-slider-item font-size-small'
            : 'calender-modal-slider-item font-size-small'
        }
      >
        {timeslot.time}
      </div>
    </button>
  );
};

const SelectedTimeslot = ({ timeslot, onTimeslotClick }: ITimeslotProps) => {
  return (
    <Col sm={'auto'} className="selected-timeslot-wrapper mb-3">
      <button
        onClick={() => onTimeslotClick(timeslot)}
        className={'close-icon-container'}
      >
        <IoIosCloseCircle />
      </button>
      <div className="font-size-extra-small font-regular secondary-font">
        {timeslot.date.toLocaleDateString()}
      </div>
      <div className="secondary-font font-size-small">{timeslot.time}</div>
    </Col>
  );
};

const CalenderModal = ({
  isCalenderOpen,
  handleSubmit,
  handleToggle,
}: ICalenderModalProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(
    new Date(new Date().setHours(0, 0, 0, 0))
  );
  const [selectedTimeslots, setSelectedTimeslots] = useState<ITimeslot[]>([]);
  const slickRef = useRef<Slider>(null);
  useEffect(() => {
    setIsModalOpen(isCalenderOpen);
  }, [isCalenderOpen]);
  const timeSlots = useMemo(
    () => getTimeSlots(selectedDate, DURATION),
    [selectedDate]
  );

  const onTimeslotClick = (timeslot: ITimeslot) => {
    if (
      selectedTimeslots.length < 3 &&
      !selectedTimeslots?.find(
        (slot) => slot.date.getTime() === timeslot.date.getTime()
      )
    ) {
      setSelectedTimeslots([timeslot, ...selectedTimeslots]);
    }
  };

  const onChangeDate = useCallback(
    (date) => {
      setSelectedDate(date);
      slickRef.current?.slickGoTo(0);
    },
    [selectedDate]
  );

  const onTimeslotRemove = useCallback(
    (timeslot) => {
      const tempSelectedTimeslots = [...selectedTimeslots];
      const index = tempSelectedTimeslots.indexOf(timeslot);
      if (index !== -1) {
        tempSelectedTimeslots.splice(index, 1);
      }
      setSelectedTimeslots(tempSelectedTimeslots);
    },
    [selectedTimeslots]
  );

  return (
    <Modal
      isOpen={isModalOpen}
      toggle={handleToggle}
      centered={true}
      fullscreen={'sm'}
      size="lg"
    >
      <ModalHeader className="calender-modal-header-container">
        <div className="calender-modal-header secondary-font font-bold font-size-regular">
          Select available time for the appointment
        </div>
      </ModalHeader>
      <ModalBody>
        <div className="calender-modal-body">
          <Calendar
            prev2Label={null}
            next2Label={null}
            className="calender-styles"
            onChange={onChangeDate}
          />
        </div>
        <div className="secondary-font font-bold font-size-regular ml-4 mt-4">
          Available timeslots (max 3 timeslots)
        </div>
        <Slider
          {...timeslotSettings}
          className="calender-modal-timeslot-container"
          variableWidth={true}
          ref={slickRef}
        >
          {timeSlots.map((timeslot, index) => (
            <TimeSlot
              key={index}
              onTimeslotClick={onTimeslotClick}
              timeslot={timeslot}
              selectedTimeslots={selectedTimeslots}
            />
          ))}
        </Slider>

        {selectedTimeslots.length > 0 && (
          <div className="calender-modal-selected-timeslots">
            <div className="secondary-font font-bold font-size-regular ml-4 mt-4">
              Send selected timeslots to your clients
            </div>
            <Row className="calender-modal-selected-timeslots-container">
              {selectedTimeslots?.map((timeslot, index) => (
                <SelectedTimeslot
                  key={index}
                  timeslot={timeslot}
                  onTimeslotClick={onTimeslotRemove}
                />
              ))}
            </Row>
          </div>
        )}
        {selectedTimeslots.length > 0 && (
          <ModalFooter className="modal-custom-footer mr-3">
            <Button
              type={BUTTON_TYPES.SECONDARY}
              title="Reset"
              onClick={() => setSelectedTimeslots([])}
              className="mr-2 calender-modal-button"
            />
            <Button
              type={BUTTON_TYPES.PRIMARY}
              title="Send"
              onClick={() => handleSubmit(selectedTimeslots)}
              className="calender-modal-button"
            />
          </ModalFooter>
        )}
      </ModalBody>
    </Modal>
  );
};

export { CalenderModal };
