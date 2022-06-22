import { AddPeopleForm } from '../../components';
import { ViewConsultantProfile } from '../../components/organisms/viewConsProfile';
import { PageContainer } from '../../components/shared';

const ConsultantProfile = () => {
    return (
        <PageContainer>
            <div>
                <ViewConsultantProfile />
            </div>
        </PageContainer>
    );
}

export { ConsultantProfile };