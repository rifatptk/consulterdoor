import axios from 'axios';
import { useEffect, FunctionComponent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { consultServicesService } from '../../../services';
import { IAddService } from '../../../services/interfaces';
import { RootState } from '../../../shared/hooks';
import { setAddService, setAddServiceMetaData } from '../../../store/actions';
import { Stepper, TextLabel } from '../../shared';
import { UploadedFile } from '../../shared/atoms/dropZone';
import { AddServiceDescription } from './description';
import { AddServiceGallery } from './gallery';
import { AddServiceOverview } from './overview';
import { AddServicePublish } from './publish';

const AddServiceContainer: FunctionComponent = (): JSX.Element => {
  const { addService, addServiceMetaData } = useSelector(
    (state: RootState) => state.consultServiceReducer
  );
  const dispatch = useDispatch();
  const onClickNext = (stage: string) => {
    dispatch(setAddService({ stage }));
  };
  const setAddServiceInfo = (data: IAddService) => {
    dispatch(setAddService({ data }));
  };

  const submitService = async () => {
    await uploadAttachments();
  };

  const uploadAttachments = async () => {
    const attachments = addService?.data?.attachments || [];
    for (const iterator of attachments) {
      if (iterator) {
        await uploadSingleAttachment(iterator);
      }
    }
  };

  const uploadSingleAttachment = async (attachment: UploadedFile) => {
    const { data } =
      await consultServicesService.getAddServiceAttachmentSignedUrl(
        attachment.name
      );
    await axios.put(data.url, attachment.file, {
      headers: {
        'Content-Type': attachment.file.type,
      },
    });
  };

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
      <TextLabel
        text="Add Service"
        className="add-service-main-text mt-2 mb-3"
      />
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
                onClickNext={() => onClickNext('publish')}
                onClickBack={() => onClickNext('gallery')}
                addServiceInfo={addService.data}
                setAddServiceInfo={setAddServiceInfo}
              />
            ),
            title: 'Description',
          },
          {
            key: 'publish',
            content: (
              <AddServicePublish
                onClickNext={() => submitService()}
                onClickBack={() => onClickNext('description')}
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
