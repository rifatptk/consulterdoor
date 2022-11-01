import { PageContainer } from '../../components/shared';
import TopRatedConsultants from '../userProfile/TopRatedConsultants';
import Banner from './Banner';
import Reviews from './Reviews';
import Tabs from './Tabs';
import './_index.scss';

type Props = {};

const ProfileView = (props: Props) => {
  return (
    <PageContainer>
      <div id="profile-view" className="container">
        <Banner />
        <Tabs />
        <Reviews />
        <TopRatedConsultants />
      </div>
    </PageContainer>
  );
};

export { ProfileView };
