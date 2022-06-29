import LocalizedStrings, { LocalizedStringsMethods } from 'react-localization';
import { en } from './en';

export interface IMessageProperties {
  appName: string;
  addPeople: {
    houseNo: string;
    fullName: string;
    occupation: string;
    address: string;
    workingPlaceAddress: string;
    dataOfBirth: string;
    age: string;
    mobileNo: string;
    nicNo: string;
    drivingLicenseNo: string;
    passportNo: string;
    elderlyCardNo: string;
    nicImage: string;
    birthCertificateImage: string;
    passportImage: string;
    drivingLicenseImage: string;
    elderlyCardImage: string;
    personImage: string;
  };
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
    aboutService: string;
    serviceDescription: string;
    toolsTechniques: string;
    otherServices: string;
  };
}

export interface IMessages
  extends LocalizedStringsMethods,
    IMessageProperties {}

const messages: IMessages = new LocalizedStrings({
  en
});

export { messages };
