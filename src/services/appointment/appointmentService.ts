import { http } from '../httpService';
import { IAppointment } from './appointmentInterfaces';

async function createAppointment(appointment: IAppointment) {
  try {
    const res = await http.post(`appointment/createAppointment`, appointment);
    return res.data;
  } catch (error) {
    throw error;
  }
}

export { createAppointment };
