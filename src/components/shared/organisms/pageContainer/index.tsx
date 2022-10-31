import { Header } from '../../../';
import Footer from '../../../organisms/footer/Footer';

interface IProps {
  children: React.ReactElement;
  className?: string;
}
function PageContainer({ children, className }: IProps) {
  return (
    <div style={{ zIndex: 10 }}>
      <Header />
      <div className={`page-container ${className}`}>{children}</div>
      <Footer />
    </div>
  );
}

export { PageContainer };
