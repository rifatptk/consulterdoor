import { UploadedFile } from '../components/shared/atoms/dropZone';

interface IPagination {
  currentPage: number;
  pageSize: number;
  totalCount: number;
  totalPages: number;
}

interface IConsultService {
  consultantName: string;
  consultantImage: string;
  serviceName: string;
  costPerHour: string;
  consultServiceKey: string;
  serviceImage: string;
  isOnline: boolean;
  overallRating: string;
  numberOfReviews: number;
  numberOfAppointments: number;
}

interface IConsultant {
  consultantKey: string;
  consultantName: string;
  consultantImage: string;
  description: string;
  costPerHour: string;
  consultServiceKey: string;
  serviceImage: string;
  isOnline: boolean;
  overallRating: string;
  numberOfReviews: number;
  numberOfAppointments: number;
}
interface IConsultantQualification {
  description?: string;
  end?: string;
  id?: number;
  start?: string;
  subTitle?: string;
  title?: string;
  type?: 'EDUCATION' | 'EXPERIENCE';
}

interface IAddService {
  title?: string;
  mainCategory?: {
    id: string;
    displayText: string
  };
  subCategory?: {
    id: string;
    displayText: string
  };
  attachments?: (UploadedFile | null)[];
  description?: string;
}

interface IAddServiceMetaData {

}

export type {
  IPagination,
  IConsultService,
  IConsultant,
  IConsultantQualification,
  IAddService,
  IAddServiceMetaData
};
