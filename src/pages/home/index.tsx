import { HomeScreen } from '../../components';
import { PageContainer } from '../../components/shared';
import { FreeTextInputWizard } from '../../components/shared/molecules/Cards';

function Home() {
  return (
    <PageContainer>
      <div>
        <HomeScreen />
        <FreeTextInputWizard
          modalIsOpen={true}
          modalTitle="Brief description about your problem"
        />
      </div>
    </PageContainer>
  );
}

export { Home };
