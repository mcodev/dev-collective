import React from 'react';
import {
  Container,
  Content,
  Description,
  GreenDots,
  ImageWrapper,
  MainImage,
  SectionSubtitle,
  SpiralImageContainer,
  StaticCircle,
  Title,
  WaveImageContainer,
  Wrapper,
} from './ExperienceBanner.styles';
import Button from '@/components/Button/Button';
import MotionIcon from '@/components/MotionIcon/MotionIcon';
import { useLanguageContext } from '@/contexts/LanguageProvider';

const ExperienceBanner = () => {
  const { translate } = useLanguageContext();

  return (
    <Container>
      <Wrapper>
        <Content>
          <SectionSubtitle className="sectionSubtitle">
            {translate('experienceTitle')}
          </SectionSubtitle>

          <Title className="sectionTitle">
            <span> {translate('experienceSubtitle1')}</span> <br />
            {translate('experienceSubtitle2')}
          </Title>

          <Description>{translate('experienceDescription')}</Description>

          <Button title={translate('startAProject')} urlRoute="/contact" />
        </Content>

        <ImageWrapper>
          <MainImage
            src="womanGreen.webp"
            alt="working"
            width={624}
            height={457}
            priority
          />

          <SpiralImageContainer>
            <MotionIcon
              iconName="spiralFull"
              direction="horizontal"
              zIndex={0}
            />
          </SpiralImageContainer>

          <WaveImageContainer>
            <MotionIcon iconName="wave" direction="vertical" zIndex={2} />
          </WaveImageContainer>

          <GreenDots
            src={'greenDots.webp'}
            width={84}
            height={28.5}
            alt="green dots"
            priority
          />

          <StaticCircle
            src={'strippedCircleForDarkBg.webp'}
            width={105}
            height={105}
            alt="circle"
            priority
          />
        </ImageWrapper>
      </Wrapper>
    </Container>
  );
};

export default ExperienceBanner;
