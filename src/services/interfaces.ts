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
  serviceName?: string;
  categoryId?: string;
  category?: {
    id: string;
    displayText: string;
  };
  serviceAttachmentFiles?: (UploadedFile | string | null)[];
  description?: string;
  serviceQuestions?: (string | null)[];
  maxDuration?: number;
  minDuration?: number;
  keywords?: string[];
  costPerHour?: number;
}

interface IServiceAttachment {
  url: string;
  type: 'THUMBNAIL_IMG' | 'IMAGE';
  caption?: string;
}

interface IAddServiceProps extends IAddService {
  serviceAttachments: IServiceAttachment[];
}

interface IAddServiceMetaData {
  mainCategories: { id: string; displayText: string }[];
}

export type {
  IPagination,
  IConsultService,
  IConsultant,
  IConsultantQualification,
  IAddService,
  IServiceAttachment,
  IAddServiceProps,
  IAddServiceMetaData,
};
