import { AppointmentService } from './appointment';
import { AuthService } from './auth';
import { chatService } from './chat';
import { consultantService } from './consultant';
import { consultServicesService } from './consultService';
import { http } from './httpService';
import { IPagination } from './interfaces';
import { Logger } from './loggerService';
import { PaymentService } from './payment';

export {
  Logger,
  http,
  AuthService,
  consultServicesService,
  consultantService,
  chatService,
  AppointmentService,
  PaymentService,
};

export type { IPagination };
