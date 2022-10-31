import { PageContainer } from '../../components/shared';
import './_index.scss';

import Hero from './Hero';
import TopRatedConsultants from './TopRatedConsultants';

type Props = {};

function UserProfile({}: Props) {
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
