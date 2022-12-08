import { PageContainer } from '../../components/shared';
import Banner from './Banner';
import Description from './Description';
// import Reviews from './Reviews';
import Services from './Services';
import SimilarConsultants from './SimilarConsultants';
// import Services from './Services';
import Tabs from './Tabs';
import './_index.scss';

const ProfileView = () => {
  return (
    <PageContainer>
      <div id="profile-view" className="container">
        <Banner />
        <Description />
        <Services />
        <Tabs />
        {/* <Reviews /> */}
        <SimilarConsultants />
      </div>
    </PageContainer>
  );
};

export { ProfileView };
