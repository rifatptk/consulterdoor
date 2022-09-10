import { useEffect, useState } from 'react';
import { PageContainer } from '../../components/shared';
import { PaymentService } from '../../services/';

function Payment() {
  const [htmlContent, setHtmlContent] = useState('');
  useEffect(() => {
    PaymentService.initiatePayment('7aec8dcc-2872-11ed-9b74-06c5d7e2e3f6').then(
      (result) => {
        setHtmlContent(result.html);
      }
    );
  }, []);
  return (
    <PageContainer>
      <div>
        <div
          dangerouslySetInnerHTML={{
            __html: htmlContent,
          }}
        />
      </div>
    </PageContainer>
  );
}

export { Payment };
