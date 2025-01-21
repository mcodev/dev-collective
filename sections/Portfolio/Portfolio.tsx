import { PORTFOLIO_PROJECTS } from '@/modules/constants';
import {
  Wrapper,
  PortfolioCardsWrapper,
  Container,
  PageTitle,
  ShowCaseTitle,
} from './Portfolio.styles';
import PortfolioCard from './PortfolioCard/PortfolioCard';
import { useLanguageContext } from '@/contexts/LanguageProvider';

const Portfolio = (): JSX.Element => {
  const { translate } = useLanguageContext();

  return (
    <Wrapper>
      <Container>
        <PageTitle className="sectionSubtitle">
          {translate('portfolio')}
        </PageTitle>

        <ShowCaseTitle className="heroTitle">
          <span>{translate('someOfOurAmazingWorks')}</span>
        </ShowCaseTitle>

        {/* Categories selection with state */}

        <PortfolioCardsWrapper>
          {PORTFOLIO_PROJECTS.map((project) => (
            <PortfolioCard
              key={project.key}
              projectKey={project.key}
              title={project.title}
              description={translate(project.minimizedDescription)}
              imageDetails={project.coreImageDetails}
            />
          ))}
        </PortfolioCardsWrapper>
      </Container>
    </Wrapper>
  );
};

export default Portfolio;
