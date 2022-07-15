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

export type { IPagination, IConsultService, IConsultant };
