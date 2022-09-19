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
  appointmentStatus:
    | 'REQUESTED'
    | 'ACCEPTED'
    | 'REJECTED'
    | 'SCHEDULING'
    | 'SCHEDULED'
    | 'COMPLETED'
    | 'CANCELLED';
}

export type { IAppointmentRequestProps, IAppointment, IQuestionAnswer };
