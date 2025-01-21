import React from 'react';
import {
  ContentBgImage,
  ContentWrapper,
  CrossImage,
  DottedCircleImage,
  EmptyCircleImage,
  GreenCircleImage,
  Container,
  OvalSpiralImage,
  SpiralCircleImage,
  StrippedCircleImage,
  WaveImage,
  WomanImage,
  Wrapper,
  MotionCircleContainer,
  MotionDotsContainer,
} from './Hero.styles';
import Button from '@/components/Button/Button';
import MotionIcon from '@/components/MotionIcon/MotionIcon';
import { useLanguageContext } from '@/contexts/LanguageProvider';

const Hero = () => {
  const { translate } = useLanguageContext();

  return (
    <Wrapper>
      <Container>
        <ContentWrapper>
          <h1 className="sectionSubtitle">{translate('heroTitle')}</h1>

          <h2 className="heroTitle">
            <span>{translate('heroSubtitle1')}</span> <br />
            {translate('heroSubtitle2')}
          </h2>

          <p>{translate('heroDescription')}</p>

          <Button
            title={translate('getStarted')}
            urlRoute="/contact"
            hasColorTransition
          />
        </ContentWrapper>
      </Container>

      <MotionCircleContainer>
        <MotionIcon iconName="purpleCircle" direction="vertical" zIndex={1} />
      </MotionCircleContainer>

      <MotionDotsContainer>
        <MotionIcon iconName="whiteDots" direction="horizontal" zIndex={1} />
      </MotionDotsContainer>

      <ContentBgImage
        src="heroDetailsBg.webp"
        alt="heroDetailsBg"
        width={845}
        height={675}
        priority
      />

      <WaveImage
        src="blackWave.webp"
        alt="blackWave"
        width={109}
        height={50.34}
        priority
      />

      <SpiralCircleImage
        src="spiralFull.webp"
        alt="spiralFull"
        width={119}
        height={119}
        priority
      />

      <EmptyCircleImage
        src="emptyCircle.webp"
        alt="emptyCircle"
        width={606}
        height={606}
        priority
      />

      <DottedCircleImage
        src="dottedCircle.webp"
        alt="dottedCircle"
        width={285}
        height={322}
        priority
      />

      <GreenCircleImage />

      <WomanImage
        src="/hero/woman1.webp"
        alt="woman"
        width={340}
        height={510}
        priority
      />

      <StrippedCircleImage
        src="strippedCircle.webp"
        alt="strippedCircle"
        width={86}
        height={86}
        priority
      />

      <OvalSpiralImage
        src="spiralOval.webp"
        alt="spiralOval"
        width={246}
        height={438}
        priority
      />

      <CrossImage
        src="blueCross.webp"
        alt="blueCross"
        width={24}
        height={24}
        priority
      />
    </Wrapper>
  );
};

export default Hero;
