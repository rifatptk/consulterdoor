import * as React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { IAddService } from '../../../services/interfaces';
import { Button, BUTTON_TYPES, DropZone, TextLabel } from '../../shared';
import { UploadedFile } from '../../shared/atoms/dropZone';

interface IProps {
  onClickNext: () => void;
  onClickBack: () => void;
  addServiceInfo?: IAddService;
  setAddServiceInfo: (data: IAddService) => void;
}

const AddServiceGallery: React.FunctionComponent<IProps> = ({
  onClickNext,
  onClickBack,
  addServiceInfo,
  setAddServiceInfo,
}: IProps): JSX.Element => {
  const attachments: any[] = addServiceInfo?.attachments || [];
  const emptyArray = Array(3).fill(null);
  const formattedAttachments = emptyArray.map((_, index) => {
    if (attachments[index]) {
      return attachments[index];
    }
    return null;
  });
  const [uploadedFiles, setUploadedFiles] =
    React.useState<(UploadedFile | null)[]>(formattedAttachments);

  const [error, setError] = React.useState<string | undefined>(undefined);

  const setSelectedAttachments = (filles: (UploadedFile | null)[]) => {
    setError(undefined);
    const filteredFills = filles.filter((el) => {
      return el != null;
    });
    if (filteredFills.length < 3) {
      setError('You need to add at least 3 images');
      return false;
    }
    setAddServiceInfo({ attachments: filteredFills });
    return true;
  };
  return (
    <Container className="m-0 p-0">
      <Row>
        <TextLabel
          text="Showcase Your Services In a work showcase Gallery"
          className="add-service-input-label"
        />
      </Row>
      <Row className="mt-4">
        {uploadedFiles.map((uploadedFile, index) => {
          return (
            <Col className="col-md-4 mb-4" key={index}>
              <div className="w-100">
                <DropZone
                  setUploadedFile={(file: UploadedFile[] | null) => {
                    const selectedFile = file?.length ? file[0] : null;
                    setUploadedFiles((prev) =>
                      prev.map((el, i) => (i !== index ? el : selectedFile))
                    );
                  }}
                  dropzoneClassName="add-service-gallery-dropzone"
                  uploadedFile={uploadedFile}
                  selectedFileClassName="add-service-gallery-dropzone"
                />
              </div>
            </Col>
          );
        })}
        <Col className="col-md-4">
          <div
            className="add-service-gallery-dropzone add-service-gallery-dropzone-add-more d-flex align-items-center justify-content-center"
            onClick={() => {
              setUploadedFiles((prev) => {
                const arr = prev.map((el) => el);
                arr.push(null);
                return arr;
              });
            }}
          >
            Add More
          </div>
        </Col>
      </Row>

      <Row className="mt-4">
        {error && (
          <div className="d-flex justify-content-end">
            <TextLabel text={error} className="add-service-warning-label" />
          </div>
        )}
        <div className="d-flex justify-content-end">
          <Button
            type={BUTTON_TYPES.SECONDARY}
            title={'Back'}
            className="mr-4 stepper-next-button"
            onClick={onClickBack}
          />
          <Button
            type={BUTTON_TYPES.PRIMARY}
            title={'Save & Next'}
            className="stepper-next-button"
            onClick={() => {
              const response: boolean = setSelectedAttachments(uploadedFiles);
              if (response) {
                onClickNext();
              }
            }}
          />
        </div>
      </Row>
    </Container>
  );
};

export { AddServiceGallery };
