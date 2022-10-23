import { http } from '../';
import { DEFAULT_PAGE_NUMBER, DEFAULT_PAGE_SIZE } from '../../shared/constant';
import { IAddServiceProps } from '../interfaces';

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

async function getService(serviceKey: string) {
  try {
    const res = await http.get(`services/${serviceKey}`);
    return res.data;
  } catch (err) {
    throw err;
  }
}

async function addConsultantService(service: IAddServiceProps) {
  try {
    const res = await http.post(`services`, service);
    return res.data;
  } catch (error) {
    throw error;
  }
}

async function updateConsultantService(
  service: IAddServiceProps,
  serviceKey: string
) {
  try {
    const res = await http.put(`services/editService/${serviceKey}`, service);
    return res.data;
  } catch (error) {
    throw error;
  }
}

async function getSearchSuggestion(searchText: string) {
  try {
    const res = await http.get(`services/search/suggestions`, {
      params: {
        searchText,
      },
    });
    return res.data;
  } catch (err) {
    throw err;
  }
}
async function getSearchResults(searchText: string) {
  try {
    const res = await http.get(`services/search`, {
      params: {
        searchText,
      },
    });
    return res.data;
  } catch (err) {
    throw err;
  }
}

async function getAddServiceAttachmentSignedUrl(fileName: string) {
  try {
    const res = await http.get(`services/attachment/pre-signed-url/`, {
      params: { fileName },
    });
    return res.data;
  } catch (err) {
    throw err;
  }
}

export {
  getConsultServices,
  getServiceCategories,
  getService,
  getSearchSuggestion,
  addConsultantService,
  updateConsultantService,
  getSearchResults,
  getAddServiceAttachmentSignedUrl,
};
