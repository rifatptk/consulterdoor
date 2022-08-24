interface IAppointment {
  clientUserKey: string;
  consultantServiceKey: string;
  initialAnswers: IQuestionAnswer[];
}

interface IQuestionAnswer {
  question: string;
  answer: string;
}

export type { IAppointment, IQuestionAnswer };
