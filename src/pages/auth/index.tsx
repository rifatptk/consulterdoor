import { useParams } from 'react-router-dom';
import { LoginForm, SignUpForm, ValidationForm } from '../../components';
import { PageContainer } from '../../components/shared';

interface IProps {
  path?: string;
}

const AUTH_PATHS = {
  LOGIN: 'login',
  SIGN_UP: 'signup',
  VALIDATE: 'validate',
};

const AuthForm = ({ path }: IProps) => {
  switch (path) {
    case AUTH_PATHS.LOGIN:
      return <LoginForm />;
    case AUTH_PATHS.SIGN_UP:
      return <SignUpForm />;
    case AUTH_PATHS.VALIDATE:
      return <ValidationForm />;
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
