import { useParams } from 'react-router-dom';
import { LoginForm, SignUpForm } from '../../components';
import { PageContainer } from '../../components/shared';

interface IProps {
  path?: string;
}

const AUTH_PATHS = {
  LOGIN: 'login',
  SIGN_UP: 'signup',
};

const AuthForm = ({ path }: IProps) => {
  switch (path) {
    case AUTH_PATHS.LOGIN:
      return <LoginForm />;
    case AUTH_PATHS.SIGN_UP:
      return <SignUpForm />;
    default:
      return <div />;
  }
};

function Auth() {
  const { authForm } = useParams();
  return (
    <PageContainer>
      <AuthForm path={authForm} />
    </PageContainer>
  );
}

export { Auth };
