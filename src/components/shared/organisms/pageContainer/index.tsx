import { Header } from '../../../';

interface IProps {
  children: React.ReactElement;
  className?: string;
}
function PageContainer({ children, className }: IProps) {
  return (
    <div>
      <Header />
      <div className={`container page-container ${className}`}>{children}</div>
    </div>
  );
}

export { PageContainer };
