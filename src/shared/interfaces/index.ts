interface IModalQuestion {
  questionTitle: string;
  maxLength: number;
}

interface IConsultantSpecialisation {
  id: number;
  name: string;
}

interface IConsultantQualification {
  description: string;
  end?: string;
  id: number;
  start: string;
  subTitle?: string;
  title: string;
  type: 'EDUCATION' | 'EXPERIENCE';
}
interface IConsultantDetails {
  address?: string;
  city: string;
  consultantImage: string;
  consultantKey: string;
  country: string;
  description: string;
  educations: IConsultantQualification[];
  experiences: IConsultantQualification[];
  firstName: string;
  formattedJoinedDate: string;
  id: number;
  isOnline?: boolean;
  jobTitle: string;
  joinedDate: string;
  lastName: string;
  numberOfReviews?: number;
  overallRating?: number;
  services: object[];
  specialisations: IConsultantSpecialisation[];
  phoneNumber?: string;
  profileImage?: string;
  email?: string;
  linkedinUrl?: string;
}

export type { IModalQuestion, IConsultantDetails };
