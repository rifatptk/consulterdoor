import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { PhotoUploadIcon } from '../../../../assets/images';
import { IServiceAttachment } from '../../../../services/interfaces';
interface UploadedFile {
  name: string;
  size?: number;
  type: File['type'];
  preview: string;
  file: File;
}

interface IProps {
  setUploadedFile: (file: UploadedFile[] | null) => void;
  uploadedFile?: UploadedFile | null | IServiceAttachment;
  disabled?: boolean;
  allowMultiple?: boolean;
  dropzoneClassName?: string;
  selectedFileClassName?: string;
}

const FILE_UPLOAD_MAX_SIZE = 52428800;

const DropZone: React.FunctionComponent<IProps> = ({
  setUploadedFile,
  uploadedFile,
  disabled,
  allowMultiple = false,
  dropzoneClassName,
  selectedFileClassName,
}): JSX.Element => {
  const [errors, setErrors] = useState('');

  const onDrop = useCallback(
    (acceptedFiles, fileRejections) => {
      const files = acceptedFiles.map((file: File) => {
        return {
          type: file.type,
          name: file.name,
          size: file.size,
          preview: URL.createObjectURL(file),
          file,
        };
      });
      setUploadedFile(files);
      if (!fileRejections.length) {
        setErrors('');
      }
      if (fileRejections) {
        fileRejections.forEach((file: any) => {
          file.errors.forEach((err: any) => {
            if (err.code === 'file-too-large') {
              setErrors(`File is larger than 50MB.`);
            }

            if (err.code === 'file-invalid-type') {
              setErrors(`Error: ${err.message}`);
            }
          });
        });
      }
    },
    [setUploadedFile]
  );
  const maxSize = FILE_UPLOAD_MAX_SIZE;

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    maxSize,
    multiple: allowMultiple,
    accept: ['image/*'],
  });

  // useEffect(() => {
  //   if (uploadedFile === null) {
  //     setUploadedFile(null);
  //   }
  // }, [setUploadedFile, uploadedFile]);

  const renderFile = () => {
    if (isDragActive) {
      return (
        <p className={`font-size-small pt-2 font-weight-light`}>
          Drop the files here
        </p>
      );
    }
    return (
      <>
        <img src={PhotoUploadIcon} className="mt-3" />
        <p className={`font-size-small p-0 m-0 mt-2 font-weight-light`}>
          {'Drag & Drop a Photo or'}
        </p>
        <p className="dropzone-browse-text">Browse</p>
      </>
    );
  };

  const renderDropZone = () => {
    return (
      <div
        className={`d-flex flex-column justify-content-center
      align-items-center text-center rounded dropZoneContainer font-weight-light m-0 p-0  ${dropzoneClassName}`}
        {...getRootProps()}
      >
        {!disabled ? <input {...getInputProps()} /> : null}
        {renderFile()}
      </div>
    );
  };

  const renderSelectedFile = () => {
    if (uploadedFile) {
      return (
        <div
          className={`d-flex flex-column justify-content-center
        align-items-center text-center rounded dropZoneContainer ${selectedFileClassName}`}
        >
          {renderSelectedFileContainer(uploadedFile)}
          <div className="dropzone-overlay">
            <div className="dropzone-text">
              <FontAwesomeIcon
                className="pointer"
                icon={faTrash}
                size="4x"
                onClick={() => {
                  if (!disabled) {
                    setUploadedFile(null);
                  }
                }}
              />
            </div>
          </div>
        </div>
      );
    }
    return null;
  };

  function isServiceAttachment(obj: any): obj is IServiceAttachment {
    return 'url' in obj && 'type' in obj;
  }

  const renderSelectedFileContainer = (
    selectedFile: UploadedFile | IServiceAttachment
  ) => {
    if (isServiceAttachment(selectedFile)) {
      return <img src={selectedFile.url} className="dropzone-image-fit" />;
    } else {
      switch (selectedFile.type) {
        case 'image/jpeg':
          return (
            <img src={selectedFile.preview} className="dropzone-image-fit" />
          );
        default:
          return (
            <p className={`font-size-small m-0 font-weight-light`}>
              {selectedFile.name}
            </p>
          );
      }
    }
  };

  return (
    <div className={`row m-0 p-0 align-items-center`}>
      <p
        className={`m-0 p-0 font-size-small ${uploadedFile ? '' : 'pointer'} ${
          disabled && 'not-allowed'
        }`}
      >
        {uploadedFile ? renderSelectedFile() : renderDropZone()}
        <div className="attachment-error">{errors}</div>
      </p>
    </div>
  );
};

export type { UploadedFile };
export { DropZone };
