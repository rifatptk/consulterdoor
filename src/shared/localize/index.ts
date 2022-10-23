import LocalizedStrings, { LocalizedStringsMethods } from 'react-localization';
import { en } from './en';

export interface IMessageProperties {
  appName: string;
  consultantProfile: {
    description: string;
    qualification: string;
    skills: string;
    education: string;
    totalEarning: string;
    manageEarning: string;
    myServices: string;
    similarConsultants: string;
  };
  service: {
    contact: string;
    makeAppointment: string;
    editService: string;
    aboutService: string;
    serviceDescription: string;
    toolsTechniques: string;
    otherServices: string;
  };
  home: {
    categoryListTitle: string;
    allCategories: string;
    serviceListTitle: string;
    allServices: string;
    consultListTitle: string;
    seeAll: string;
  };
  serviceCard: {
    start: string;
  };
  appointmentPage: {
    title: string;
    waitForResponse: string;
    requestAcceptance: string;
    waitForTimeSlots: string;
    selectTimeSlot: string;
    waitForTimeSlotConfirmation: string;
    suggestTimeSlot: string;
  };
  common: {
    confirmationModal: {
      confirm: string;
      cancel: string;
    };
  };
}

export interface IMessages
  extends LocalizedStringsMethods,
    IMessageProperties {}

const messages: IMessages = new LocalizedStrings({
  en,
});

export { messages };
