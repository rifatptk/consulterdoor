import { IAppointmentResponseProps } from '../chat/chatInterface';
import { http } from '../httpService';
import { IAppointmentRequestProps } from './appointmentInterfaces';

async function createAppointment(appointment: IAppointmentRequestProps) {
  try {
    const res = await http.post(`appointment/createAppointment`, appointment);
    return res.data;
  } catch (error) {
    throw error;
  }
}

async function sendAppointmentAcceptance(params: IAppointmentResponseProps) {
  try {
    const res = await http.post(
      'appointment/sendAppointmentAcceptance',
      params
    );
    return res.data;
  } catch (err) {
    throw err;
  }
}

export { createAppointment, sendAppointmentAcceptance };
