import { Header } from '../../../';
import Footer from '../../../organisms/footer/Footer';

interface IProps {
  children: React.ReactElement;
  className?: string;
  noFooter?: boolean;
}
function PageContainer({ children, className, noFooter }: IProps) {
  return (
    <div style={{ zIndex: 10 }}>
      <Header />
      <div className={`page-container ${className}`}>{children}</div>
      {!noFooter && <Footer />}
    </div>
  );
}

export { PageContainer };
