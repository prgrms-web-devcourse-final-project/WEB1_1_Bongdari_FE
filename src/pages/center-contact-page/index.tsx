import { PageWrapper } from './indexCss';
import ContactDescription from './ui/contact-description';
import ContactForm from './ui/contact-form';

const CenterContactPage = () => {
  return (
    <PageWrapper>
      <ContactDescription />
      <ContactForm />
    </PageWrapper>
  );
};

export default CenterContactPage;
