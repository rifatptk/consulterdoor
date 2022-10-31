import { PageContainer } from '../../components/shared';
import './_index.scss';

import Hero from './Hero';

type Props = {};

function UserProfile({}: Props) {
  return (
    <PageContainer>
      <Hero />
    </PageContainer>
  );
}

export { UserProfile };
