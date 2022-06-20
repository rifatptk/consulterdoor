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
}

export interface IMessages
  extends LocalizedStringsMethods,
    IMessageProperties {}

const messages: IMessages = new LocalizedStrings({
  en
});

export { messages };
