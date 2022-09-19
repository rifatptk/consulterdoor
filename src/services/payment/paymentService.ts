import { http } from '../httpService';

async function initiatePayment(consultKey: string) {
  try {
    const res = await http.get(`/payment/init/${consultKey}`);
    return res.data;
  } catch (error) {
    throw error;
  }
}

export { initiatePayment };
