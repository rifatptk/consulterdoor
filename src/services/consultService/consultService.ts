import { http } from '../';
import { DEFAULT_PAGE_NUMBER, DEFAULT_PAGE_SIZE } from '../../shared/constant';

async function getConsultServices({
  type,
  pageNumber,
  pageSize,
}: {
  type: string;
  pageNumber?: number;
  pageSize?: number;
}) {
  try {
    const res = await http.get('services', {
      params: {
        type,
        pageNumber: pageNumber || DEFAULT_PAGE_NUMBER,
        pageSize: pageSize || DEFAULT_PAGE_SIZE,
      },
    });
    return res.data;
  } catch (err) {
    throw err;
  }
}

async function getServiceCategories() {
  try {
    const res = await http.get('services/categories');
    return res.data;
  } catch (err) {
    throw err;
  }
}

export { getConsultServices, getServiceCategories };
