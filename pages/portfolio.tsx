import PageHero from '@/sections/PageHero/PageHero';
import Portfolio from '@/sections/Portfolio/Portfolio';

const PortfolioPage = (): JSX.Element => {
  return (
    <>
      <PageHero pageTitle="projects" />
      <Portfolio />
    </>
  );
};

export default PortfolioPage;
