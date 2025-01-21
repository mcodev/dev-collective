import { useLanguageContext } from '@/contexts/LanguageProvider';
import { PORTFOLIO_PROJECTS } from '@/modules/constants';
import PageHero from '@/sections/PageHero/PageHero';
import {
  Wrapper,
  Container,
  PrimaryImageWrapper,
  PrimaryImage,
  SecondaryImagesWrapper,
  SecondImageWrapper,
  SecondImage,
  ThirdImageWrapper,
  ThirdImage,
  ProjectInfoWrapper,
  ProjectInfoCard,
  ProjectInfoCardHeader,
  ShowCaseTitle,
  ProjectDetailsWrapper,
  ShowCaseDescription,
  PrimaryShowCaseTitle,
  PrimaryShowCaseDescription,
  ProjectKeypointsWrapper,
  KeyPoint,
  KeyPointImage,
  KeyPointDetails,
  KeyPointTitle,
  KeyPointDescription,
  ImagesWrapper,
  EndingParagraph,
  ProjectTopicWrapper,
  SecondaryShowCaseDescription,
  KeyPointImageWrapper,
  ShowCaseLink,
} from '@/styles/pages/portfolio-details';
import { useRouter } from 'next/router';

const PortfolioDetailsPage = (): JSX.Element => {
  const router = useRouter();
  const { project } = router.query;

  const { translate } = useLanguageContext();

  const selectedProject = PORTFOLIO_PROJECTS.find(
    (portfolioProject) => portfolioProject.key === project
  );

  return (
    <>
      <PageHero pageTitle="portfolioDetails" />

      <Wrapper>
        {selectedProject ? (
          <Container>
            <ImagesWrapper>
              <PrimaryImageWrapper>
                <PrimaryImage
                  src={selectedProject.firstImageDetails.src}
                  alt={selectedProject.firstImageDetails.alt}
                  fill
                  priority
                />
              </PrimaryImageWrapper>

              <SecondaryImagesWrapper>
                <SecondImageWrapper>
                  <SecondImage
                    src={selectedProject.secondaryImageDetails.src}
                    alt={selectedProject.secondaryImageDetails.alt}
                    fill
                    priority
                  />
                </SecondImageWrapper>

                <ThirdImageWrapper>
                  <ThirdImage
                    src={selectedProject.thirdImageDetails.src}
                    alt={selectedProject.thirdImageDetails.alt}
                    fill
                    priority
                  />
                </ThirdImageWrapper>
              </SecondaryImagesWrapper>
            </ImagesWrapper>

            <ProjectInfoWrapper>
              <ProjectInfoCard>
                <ProjectInfoCardHeader>
                  {translate('projectInfo')}
                </ProjectInfoCardHeader>

                {selectedProject.projectTopics.map((topic) => (
                  <ProjectTopicWrapper key={topic.title}>
                    <ShowCaseTitle>{translate(topic.title)}</ShowCaseTitle>

                    {topic.title !== 'projectUrl' ? (
                      <ShowCaseDescription>
                        {topic.description}
                      </ShowCaseDescription>
                    ) : (
                      <ShowCaseLink
                        href={topic.description}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {topic.description}
                      </ShowCaseLink>
                    )}
                  </ProjectTopicWrapper>
                ))}
              </ProjectInfoCard>

              <ProjectDetailsWrapper>
                <PrimaryShowCaseTitle>
                  {selectedProject.title}
                </PrimaryShowCaseTitle>

                <PrimaryShowCaseDescription>
                  {translate(selectedProject.firstDescription)}
                </PrimaryShowCaseDescription>

                <SecondaryShowCaseDescription>
                  {translate(selectedProject.secondDescription)}
                </SecondaryShowCaseDescription>

                <ProjectKeypointsWrapper>
                  {selectedProject.projectKeypoints.map((keyPoint) => (
                    <KeyPoint key={keyPoint.title}>
                      <KeyPointImageWrapper
                        backgroundColor={keyPoint.iconDetails.color as any}
                      >
                        <KeyPointImage
                          src={keyPoint.iconDetails.icon}
                          alt={keyPoint.iconDetails?.alt || ''}
                          width={56}
                          height={56}
                        />
                      </KeyPointImageWrapper>

                      <KeyPointDetails>
                        <KeyPointTitle>
                          {translate(keyPoint.title)}
                        </KeyPointTitle>

                        <KeyPointDescription>
                          {translate(keyPoint.description)}
                        </KeyPointDescription>
                      </KeyPointDetails>
                    </KeyPoint>
                  ))}
                </ProjectKeypointsWrapper>

                <EndingParagraph>
                  {selectedProject.endingParagraph}
                </EndingParagraph>
              </ProjectDetailsWrapper>
            </ProjectInfoWrapper>
          </Container>
        ) : (
          <div>{translate('noProjectInfo')}</div>
        )}
      </Wrapper>
    </>
  );
};

export default PortfolioDetailsPage;
