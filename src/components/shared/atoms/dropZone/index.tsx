import { faTrash, faUpload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useCallback, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';

interface IProps {
  setUploadedFile: (file: File | null) => void;
  uploadedFile?: File | null;
  disabled?: boolean;
  allowMultiple?: boolean;
}

const FILE_UPLOAD_MAX_SIZE = 52428800;

const DropZone: React.FunctionComponent<IProps> = ({
  setUploadedFile,
  uploadedFile,
  disabled,
  allowMultiple = false
}): JSX.Element => {
  const [errors, setErrors] = useState('');
  const onDrop = useCallback(
    (acceptedFiles, fileRejections) => {
      setUploadedFile(acceptedFiles);
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
    multiple: allowMultiple
  });

  useEffect(() => {
    if (uploadedFile === null) {
      setUploadedFile(null);
    }
  }, [setUploadedFile, uploadedFile]);

  const renderFile = () => {
    if (isDragActive) {
      return (
        <p className={`font-size-small pt-2 font-weight-light`}>
          Drop the files here ...
        </p>
      );
    }
    return (
      <>
        <FontAwesomeIcon className="" icon={faUpload} size="lg" />
        <p className={`font-size-small pt-1 font-weight-light`}>
          Drop the file here or Click to upload
        </p>
      </>
    );
  };

  const renderDropZone = () => {
    return (
      <div
        className={` d-flex flex-column justify-content-center
      align-items-center text-center rounded dropZoneContainer font-weight-light p-1`}
        {...getRootProps()}
        style={{ height: 80, minWidth: 350 }}
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
          className={` d-flex flex-row justify-content-center
        align-items-center text-center p-2 rounded dropZoneContainer `}
          style={{ height: 80, minWidth: 350 }}
        >
          <p className={`font-size-small pr-2 m-0 font-weight-light`}>
            {uploadedFile.name}
          </p>
          <FontAwesomeIcon
            className="pointer"
            icon={faTrash}
            size="1x"
            onClick={() => {
              if (!disabled) {
                setUploadedFile(null);
              }
            }}
          />
        </div>
      );
    }

    return null;
  };

  return (
    <div className={`row m-0 align-items-center`}>
      <p
        className={`m-0 font-size-small bold ${uploadedFile ? '' : 'pointer'} ${
          disabled && 'not-allowed'
        }`}
      >
        {uploadedFile ? renderSelectedFile() : renderDropZone()}
        <div className="attachment-error">{errors}</div>
      </p>
    </div>
  );
};

export { DropZone };
