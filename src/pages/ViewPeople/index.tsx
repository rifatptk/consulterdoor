import { ConsultantCard, ServiceCard } from '../../components/molecules/cards';
import { PageContainer } from '../../components/shared';

function ViewPeople() {
  return (
    <PageContainer>
      <div className="row align-items-center">
        <div className="col align-self-center col-md-4 col-sm-12 m-0 mt-5 p-0">
          <ServiceCard />
        </div>
        <div className="col align-self-center col-md-4 col-sm-12 m-0 mt-5 p-0">
          <ConsultantCard />
        </div>
      </div>
    </PageContainer>
  );
}

export { ViewPeople };
