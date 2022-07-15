import { HomeScreen } from '../../components';
import { PageContainer } from '../../components/shared';
import { FreeTextInputWizard } from '../../components/shared/molecules/Cards';

function Home() {
  return (
    <PageContainer>
      <div>
        <HomeScreen />
        <FreeTextInputWizard
          modalIsOpen={false}
          questions={[
            {
              questionTitle: 'Briefly description about the problem',
              maxLength: 350,
            },
            {
              questionTitle: 'Why do you choose me as your consultant?',
              maxLength: 450,
            },
          ]}
        />
      </div>
    </PageContainer>
  );
}

export { Home };
