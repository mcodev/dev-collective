import Button from '@/components/Button/Button';
import {
  Wrapper,
  Container,
  HeroContainer,
  WhatWeDoContainer,
  HeroContentDetails,
  HeroCommercialTitle,
  HeroTitle,
  HeroDescription,
  HeroImagesContainer,
  HeroImage,
  HeroBackgroundSplashImage,
  HeroBackgroundSplashWrapper,
  HeroImageWrapper,
  HeroBackgroundImagesWrapper,
  DottedCircleWrapper,
  DottedCircleImage,
  MotionSpiralFullCircleWrapper,
  MotionPinkHorizontalDotsWrapper,
  DedicatedTeamWaveWrapper,
  DedicatedTeamWaveImage,
  WhatWeDoCardIcon,
  WhatWeDoCardTitle,
  FirstWhatWeDoCard,
  SecondWhatWeDoCard,
  ThirdWhatWeDoCard,
  WhatWeDoCardDescription,
  CardsWrapper,
  WhatWeDoCommercialTitle,
  WhatWeDoTitle,
  FirstFindOutMoreButton,
  SecondFindOutMoreButton,
  ThirdFindOutMoreButton,
  StrippedCircleGreenImage,
} from './DedicatedTeamHero.styles';
import MotionIcon from '@/components/MotionIcon/MotionIcon';
import { useLanguageContext } from '@/contexts/LanguageProvider';

const scrollToFaqSection = () => {
  window.scrollTo({
    top: 3100,
    behavior: 'smooth',
  });
};

const DedicatedTeamHero = (): JSX.Element => {
  const { translate } = useLanguageContext();

  return (
    <Wrapper>
      <HeroBackgroundImagesWrapper>
        <HeroBackgroundSplashWrapper>
          <HeroBackgroundSplashImage
            src={'dedicatedTeamBgHero.webp'}
            alt="background splash image"
            fill
            priority
          />
        </HeroBackgroundSplashWrapper>

        <DottedCircleWrapper>
          <DottedCircleImage
            src={'dottedCircleFullPurple.webp'}
            alt="a dotted circle with purple color as splash image"
            fill
            priority
          />
        </DottedCircleWrapper>

        <StrippedCircleGreenImage
          src={'strippedCircleGreen.webp'}
          alt="a striped circle with green color"
          height={76}
          width={76}
        />

        <MotionSpiralFullCircleWrapper>
          <MotionIcon iconName="spiralFullPurple" direction="horizontal" />
        </MotionSpiralFullCircleWrapper>

        <MotionPinkHorizontalDotsWrapper>
          <MotionIcon iconName="pinkHorizontalDots" direction="vertical" />
        </MotionPinkHorizontalDotsWrapper>

        <DedicatedTeamWaveWrapper>
          <DedicatedTeamWaveImage
            src={'dedicatedTeamWave.webp'}
            alt="a waved shaped image with purple color"
            fill
            priority
          />
        </DedicatedTeamWaveWrapper>
      </HeroBackgroundImagesWrapper>

      <Container>
        <HeroContainer>
          <HeroContentDetails>
            <HeroCommercialTitle>
              {translate('dedicatedTeamCommercialTitle')}
            </HeroCommercialTitle>

            <HeroTitle className="heroTitle">
              <span>{translate('dedicated')}</span>
              <p>{translate('developmentTeam')}</p>
            </HeroTitle>

            <HeroDescription>
              {translate('dedicatedTeamHeroDescription')}
            </HeroDescription>

            <Button title={translate('getStarted')} urlRoute="/contact" />
          </HeroContentDetails>

          <HeroImagesContainer>
            <HeroImageWrapper>
              <HeroImage
                src={'dedicatedTeamMainImage.webp'}
                alt="hero image"
                fill
                priority
              />
            </HeroImageWrapper>
          </HeroImagesContainer>
        </HeroContainer>

        <WhatWeDoContainer>
          <WhatWeDoCommercialTitle>
            {translate('dedicatedTeamBenefits')}
          </WhatWeDoCommercialTitle>

          <WhatWeDoTitle className="heroTitle">
            <span>{translate('dedicatedTeamWhatYouGet')}</span>
          </WhatWeDoTitle>

          <CardsWrapper>
            <FirstWhatWeDoCard>
              <WhatWeDoCardIcon
                src="dedicatedTeamHero/analogClock.webp"
                alt="an icon displaying a screen"
                width={60}
                height={60}
              />

              <WhatWeDoCardTitle>
                {translate('dedicatedTeamTimeEfficiency')}
              </WhatWeDoCardTitle>

              <WhatWeDoCardDescription>
                {translate('dedicatedTeamTimeEfficiencyDescription')}
              </WhatWeDoCardDescription>

              <FirstFindOutMoreButton onClick={scrollToFaqSection}>
                {translate('findOutMoreButton')}
              </FirstFindOutMoreButton>
            </FirstWhatWeDoCard>

            <SecondWhatWeDoCard>
              <WhatWeDoCardIcon
                src="dedicatedTeamHero/saveMoney5.webp"
                alt="an icon displaying a screen"
                width={60}
                height={60}
              />

              <WhatWeDoCardTitle>
                {translate('dedicatedTeamCostEfficiency')}
              </WhatWeDoCardTitle>

              <WhatWeDoCardDescription>
                {translate('dedicatedTeamCostEfficiencyDescription')}
              </WhatWeDoCardDescription>

              <SecondFindOutMoreButton onClick={scrollToFaqSection}>
                {translate('findOutMoreButton')}
              </SecondFindOutMoreButton>
            </SecondWhatWeDoCard>

            <ThirdWhatWeDoCard>
              <WhatWeDoCardIcon
                src="dedicatedTeamHero/contentIcon.webp"
                alt="an icon displaying a screen"
                width={60}
                height={60}
              />

              <WhatWeDoCardTitle>
                {translate('dedicatedTeamBondedTeam')}
              </WhatWeDoCardTitle>

              <WhatWeDoCardDescription>
                {translate('dedicatedTeamBondedTeamDescription')}
              </WhatWeDoCardDescription>

              <ThirdFindOutMoreButton onClick={scrollToFaqSection}>
                {translate('findOutMoreButton')}
              </ThirdFindOutMoreButton>
            </ThirdWhatWeDoCard>
          </CardsWrapper>
        </WhatWeDoContainer>
      </Container>
    </Wrapper>
  );
};

export default DedicatedTeamHero;
