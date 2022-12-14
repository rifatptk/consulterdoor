import * as React from 'react';
import { FaPlus, FaUserAlt } from 'react-icons/fa';
import { formatString } from '../../../shared/utils';
import { TextLabel } from '../../shared';
interface IProps {
  data: any;
}

const ConsultantProfileImage: React.FunctionComponent<IProps> = ({
  data,
}: IProps): JSX.Element => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        marginTop: '2rem',
        flexDirection: 'column',
      }}
    >
      <button className="profile-main-image-container">
        {!data.profileImage ? (
          <div className="profile-image-icon-container">
            <FaUserAlt size={40} />
          </div>
        ) : (
          <img
            className="profile-main-image"
            style={{ width: '8rem', height: '8rem', borderRadius: '4rem' }}
            src={data.profileImage}
            alt="consult profile"
          />
        )}
        <div className="profile-image-add-icon-container">
          <FaPlus size={20} className="consultant-image-icons" />
        </div>
      </button>

      <TextLabel
        className="topic primary-font font-bold font-size-regular"
        style={{ lineHeight: '30px', marginTop: '10px' }}
        text={formatString(`${data.firstName} ${data.lastName}`, {
          titleCase: true,
        })}
      />
      <TextLabel
        className="text-center primary-font font-regular secondary-text-color font-size-small"
        style={{
          lineHeight: '20px',
        }}
        text={data.jobTitle}
      />
    </div>
  );
};

export { ConsultantProfileImage };
