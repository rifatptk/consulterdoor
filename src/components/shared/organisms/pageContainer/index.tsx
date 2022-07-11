import { Header } from '../../../';

interface IProps {
  children: React.ReactElement;
}
function PageContainer({ children }: IProps) {
  return (
    <div>
      <Header />
      <div className="container m-0 p-0">{children}</div>
    </div>
  );
}

export { PageContainer };
