import { useEffect, useState } from 'react';
import { PageContainer } from '../../components/shared';
import { PaymentService } from '../../services/';

function Payment() {
  const [htmlContent, setHtmlContent] = useState('');
  useEffect(() => {
    PaymentService.initiatePayment('34386526-3453-11ed-b058-06c5d7e2e3f6').then(
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
