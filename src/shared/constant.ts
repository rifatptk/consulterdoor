export const APP_NAME = '';

export const DEFAULT_DATE_FORMAT = 'yyyy-MM-dd';
export const DEFAULT_DATE_TIME_FORMAT = 'yyyy-MM-dd hh:mm aa';
export const DEFAULT_TIME_FORMAT = 'HH:mm';

export const DEFAULT_MOBILE_SCREEN_WIDTH = 465;

export const DEFAULT_PAGE_SIZE = 10;
export const DEFAULT_PAGE_NUMBER = 1;
export enum MESSAGE_TYPES {
  TEXT = 'TEXT',
  TIME_SLOT_SUGGEST = 'TIME_SLOT_SUGGEST',
  TIME_SLOT_FINALIZED = 'TIME_SLOT_FINALIZED',
  TIME_SLOT_SUGGESTION_CHANGE_REQUEST = 'TIME_SLOT_SUGGESTION_CHANGE_REQUEST',
}

export enum APPOINTMENT_STATUS {
  REQUESTED = 'REQUESTED', // client initiated a appointment consultant need to accept or reject it
  ACCEPTED = 'ACCEPTED', // consultant accepted from chat and then he needs to suggest timeslots
  REJECTED = 'REJECTED', // consultant rejected from chat
  SCHEDULING = 'SCHEDULING', // consultant suggested some time slots, then client need to accept one of it or request another
  TIME_SLOT_SUGGESTION_REJECTED = 'TIME_SLOT_SUGGESTION_REJECTED', // client rejected that suggested timeslots and requested a new set
  SCHEDULED = 'SCHEDULED', // client agreed to a timeslot.
  COMPLETED = 'COMPLETED', // appointment completed
  CANCELLED = 'CANCELLED', // appointment cancelled
}
