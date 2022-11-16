import { SearchPannel } from '../../components/organisms/searchPannel';
import { PageContainer } from '../../components/shared';

function SearchPage() {
  return (
    <PageContainer>
      <div className="vh-100">
        <SearchPannel />
      </div>
    </PageContainer>
  );
}

export { SearchPage };
