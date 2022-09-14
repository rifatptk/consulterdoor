import { APPOINTMENT_STATUS } from '../../shared/constant';

interface IAppointmentRequestProps {
  clientUserKey: string;
  consultantServiceKey: string;
  initialAnswers: IQuestionAnswer[];
}

interface IQuestionAnswer {
  question: string;
  answer: string;
}

interface IAppointment {
  appointmentkey: string;
  appointmentStatus: APPOINTMENT_STATUS;
}

export type { IAppointmentRequestProps, IAppointment, IQuestionAnswer };
