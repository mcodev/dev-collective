import BrandSuccessBanner from '@/sections/BrandSuccessBanner/BrandSuccessBanner';
import Faq from '@/sections/Faq/Faq';
import PageHero from '@/sections/PageHero/PageHero';
import Services from '@/sections/Services/Services';

const FAQ_QUESTIONS = [
  {
    key: 1,
    title: 'servicesPageFaqFirstQuestion',
    description: 'servicesPageFaqFirstQuestionDescription',
  },
  {
    key: 2,
    title: 'servicesPageFaqSecondQuestion',
    description: 'servicesPageFaqSecondQuestionDescription',
  },
  {
    key: 3,
    title: 'servicesPageFaqThirdQuestion',
    description: 'servicesPageFaqThirdQuestionDescription',
  },
  {
    key: 4,
    title: 'servicesPageFaqFourthQuestion',
    description: 'servicesPageFaqFourthQuestionDescription',
  },
];

const ServicesPage = (): JSX.Element => {
  return (
    <>
      <PageHero pageTitle="services" />
      <Services />
      <BrandSuccessBanner />
      <Faq content={FAQ_QUESTIONS} />
    </>
  );
};

export default ServicesPage;
