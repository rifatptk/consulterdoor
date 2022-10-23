// import axios from 'axios';
import { FunctionComponent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { consultServicesService } from '../../../services';
import { getService } from '../../../services/consultService/consultService';
import {
  IAddService,
  IAddServiceProps,
  IServiceAttachment,
} from '../../../services/interfaces';
import { RootState } from '../../../shared/hooks';
import { setAddService, setAddServiceMetaData } from '../../../store/actions';
import { Stepper, TextLabel } from '../../shared';
// import { UploadedFile } from '../../shared/atoms/dropZone';
import { AddServiceDescription } from './description';
import { AddServiceGallery } from './gallery';
import { AddServiceOverview } from './overview';
import { AddServicePublish } from './publish';
import { AddServiceQuestions } from './questions';

const AddServiceContainer: FunctionComponent = (): JSX.Element => {
  const { addService, addServiceMetaData } = useSelector(
    (state: RootState) => state.consultServiceReducer
  );
  // const [consultService, setConsultService] = useState<IAddService>();
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    if (params && params.serviceKey) {
      getService(params.serviceKey).then((result) => {
        const data = result.data;
        const consultServiceOb: IAddServiceProps = {
          serviceName: data.serviceName,
          categoryId: data.categoryId,
          category: {
            id: data.categoryId,
            displayText: data.categoryName,
          },
          serviceAttachmentFiles: data.attachments,
          serviceAttachments: data.attachments,
          description: data.description,
          serviceQuestions: data.serviceQuestions.map(
            (q: { questionTitle: string; maxLength: number }) => q.questionTitle
          ),
          maxDuration: data.maxDuration,
          minDuration: data.minDuration,
          keywords: data.keywordsList,
          costPerHour: data.costPerHour,
        };
        setAddServiceInfo(consultServiceOb);
        setIsEdit(true);
      });
    }
  }, [params]);

  const onClickNext = (stage: string) => {
    dispatch(setAddService({ stage }));
  };
  const setAddServiceInfo = (data: IAddService) => {
    dispatch(setAddService({ data }));
  };

  const submitService = async () => {
    // await uploadAttachments();
    const uploadedUrls: IServiceAttachment[] = [
      {
        url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        type: 'IMAGE',
      },
      {
        url: 'https://images.unsplash.com/photo-1578574577315-3fbeb0cecdc2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80',
        type: 'IMAGE',
      },
    ];
    if (addService.data) {
      const serviceAddProps: IAddServiceProps = {
        ...addService.data,
        categoryId: addService.data.category?.id,
        serviceAttachments: uploadedUrls,
      };
      try {
        if (isEdit && params && params.serviceKey) {
          await consultServicesService.updateConsultantService(
            serviceAddProps,
            params.serviceKey
          );
        } else {
          await consultServicesService.addConsultantService(serviceAddProps);
        }

        navigate('/');
      } catch (err) {
        // error modal should display
      }
    }
  };

  // const uploadAttachments = async () => {
  //   const attachments = addService?.data?.serviceAttachmentFiles || [];
  //   for (const iterator of attachments) {
  //     if (iterator) {
  //       await uploadSingleAttachment(iterator);
  //     }
  //   }
  // };

  // const uploadSingleAttachment = async (attachment: UploadedFile) => {
  //   const { data } =
  //     await consultServicesService.getAddServiceAttachmentSignedUrl(
  //       attachment.name
  //     );
  //   await axios.put(data.url, attachment.file, {
  //     headers: {
  //       'Content-Type': attachment.file.type,
  //     },
  //   });
  // };

  useEffect(() => {
    consultServicesService.getServiceCategories().then((response) => {
      const mainCategories =
        response.data &&
        response.data.map((categories: any) => {
          return {
            id: categories.serviceCategoryId,
            displayText: categories.name,
          };
        });
      dispatch(setAddServiceMetaData({ mainCategories }));
    });
  }, []);

  return (
    <div className="mt-5">
      {isEdit ? (
        <TextLabel
          text="Edit Service"
          className="add-service-main-text mt-2 mb-3"
        />
      ) : (
        <TextLabel
          text="Add Service"
          className="add-service-main-text mt-2 mb-3"
        />
      )}

      <Stepper
        steps={[
          {
            key: 'overview',
            content: (
              <AddServiceOverview
                onClickNext={() => onClickNext('gallery')}
                addServiceInfo={addService.data}
                setAddServiceInfo={setAddServiceInfo}
                addServiceMetaData={addServiceMetaData}
              />
            ),
            title: 'Overview',
          },
          {
            key: 'gallery',
            content: (
              <AddServiceGallery
                onClickNext={() => onClickNext('description')}
                onClickBack={() => onClickNext('overview')}
                addServiceInfo={addService.data}
                setAddServiceInfo={setAddServiceInfo}
              />
            ),
            title: 'Gallery',
          },
          {
            key: 'description',
            content: (
              <AddServiceDescription
                onClickNext={() => onClickNext('questions')}
                onClickBack={() => onClickNext('gallery')}
                addServiceInfo={addService.data}
                setAddServiceInfo={setAddServiceInfo}
              />
            ),
            title: 'Description',
          },
          {
            key: 'questions',
            content: (
              <AddServiceQuestions
                onClickNext={() => onClickNext('publish')}
                onClickBack={() => onClickNext('description')}
                addServiceInfo={addService.data}
                setAddServiceInfo={setAddServiceInfo}
              />
            ),
            title: 'Service Questions',
          },
          {
            key: 'publish',
            content: (
              <AddServicePublish
                onClickNext={() => submitService()}
                onClickBack={() => onClickNext('questions')}
              />
            ),
            title: 'Publish',
          },
        ]}
        selectedItemKey={addService.stage}
        stepperContainerClassName="stepper-container"
      />
    </div>
  );
};

export { AddServiceContainer };
