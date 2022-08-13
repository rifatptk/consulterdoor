import { http } from '..';
import { DEFAULT_PAGE_NUMBER, DEFAULT_PAGE_SIZE } from '../../shared/constant';
import { IConsultantQualification } from '../interfaces';

async function getConsultants({
  pageNumber,
  pageSize,
}: {
  pageNumber?: number;
  pageSize?: number;
}) {
  try {
    const res = await http.get('consultant', {
      params: {
        pageNumber: pageNumber || DEFAULT_PAGE_NUMBER,
        pageSize: pageSize || DEFAULT_PAGE_SIZE,
      },
    });
    return res.data;
  } catch (err) {
    throw err;
  }
}

async function getConsultant(consultantKey: string) {
  try {
    const res = await http.get(`consultant/${consultantKey}`);
    return res.data;
  } catch (err) {
    throw err;
  }
}

async function getConsultantProfile() {
  try {
    const res = await http.get(`consultant/profile`);
    return res.data.data;
  } catch (err) {
    throw err;
  }
}

async function updateConsultant(payload: object) {
  try {
    const res = await http.put(`consultant/profile`, { ...payload });
    return res.data;
  } catch (error) {
    throw error;
  }
}

async function getQualifications() {
  try {
    const res = await http.get(`consultant/qualifications`);
    return res.data;
  } catch (error) {
    throw error;
  }
}

async function updateQualification(payload: IConsultantQualification) {
  try {
    const res = await http.put(`consultant/qualifications`, payload);
    return res.data;
  } catch (error) {
    throw error;
  }
}

async function createQualification(payload: IConsultantQualification) {
  try {
    const res = await http.post(`consultant/qualifications`, payload);
    return res.data;
  } catch (error) {
    throw error;
  }
}

export {
  getConsultants,
  getConsultant,
  getConsultantProfile,
  updateConsultant,
  getQualifications,
  updateQualification,
  createQualification,
};
