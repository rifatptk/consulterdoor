import { PageContainer } from '../../components/shared';
import './_index.scss';

import Hero from './Hero';
import TopRatedConsultants from './TopRatedConsultants';

function UserProfile() {
  return (
    <PageContainer>
      <>
        <Hero />
        <TopRatedConsultants />
      </>
    </PageContainer>
  );
}

export { UserProfile };
