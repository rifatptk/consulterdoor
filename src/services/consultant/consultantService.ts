import { http } from '..';
import { DEFAULT_PAGE_NUMBER, DEFAULT_PAGE_SIZE } from '../../shared/constant';

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

export { getConsultants, getConsultant };
