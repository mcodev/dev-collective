import MotionIcon from '@/components/MotionIcon/MotionIcon';
import {
  Wrapper,
  Container,
  BannerTitle,
  BannerDescription,
  BannerPromotionText,
  ImagesContainer,
  FirstBannerImageWrapper,
  FirstBannerImage,
  SecondBannerImage,
  ThirdBannerImage,
  SecondBannerImageWrapper,
  ThirdBannerImageWrapper,
  NumericCircleLeft,
  NumericCircleRight,
  SuccessfulNumber,
  MotionGreenCircleContainer,
  MotionStripedCircleContainer,
  SuccessDescription,
  EmptyCircleImage,
} from './BrandSuccessBanner.styles';
import { useLanguageContext } from '@/contexts/LanguageProvider';

const BrandSuccessBanner = (): JSX.Element => {
  const { translate } = useLanguageContext();

  return (
    <Wrapper>
      <Container>
        <BannerTitle>{translate('brandBannerTitle')}</BannerTitle>

        <BannerPromotionText className="heroTitle">
          <span>{translate('brandBannerSubtitle')}</span>
        </BannerPromotionText>

        <BannerDescription>
          {translate('brandBannerDescription')}
        </BannerDescription>

        <EmptyCircleImage
          width={346}
          height={346}
          src={'emptyCircleExtraPink.webp'}
          alt="a circle image"
          priority
        />

        <MotionStripedCircleContainer>
          <MotionIcon
            iconName="strippedCircleBlack"
            direction="vertical"
            zIndex={1}
          />
        </MotionStripedCircleContainer>

        <MotionGreenCircleContainer>
          <MotionIcon
            iconName="greenCircle"
            direction="horizontal"
            zIndex={1}
          />
        </MotionGreenCircleContainer>

        <ImagesContainer>
          <FirstBannerImageWrapper>
            <FirstBannerImage
              src="/brand_success/chart.webp"
              alt="chart"
              fill
              priority
            />
          </FirstBannerImageWrapper>

          <SecondBannerImageWrapper>
            <SecondBannerImage
              src="/brand_success/keyboard.webp"
              alt="keyboard"
              fill
              priority
            />
          </SecondBannerImageWrapper>

          <ThirdBannerImageWrapper>
            <ThirdBannerImage
              src="/brand_success/screen.webp"
              alt="screen"
              fill
              priority
            />
          </ThirdBannerImageWrapper>
        </ImagesContainer>

        <NumericCircleLeft>
          <SuccessfulNumber>2024</SuccessfulNumber>
          <SuccessDescription>{translate('activeSince')}</SuccessDescription>
        </NumericCircleLeft>

        <NumericCircleRight>
          <SuccessfulNumber>10+</SuccessfulNumber>
          <SuccessDescription>{translate('partners')}</SuccessDescription>
        </NumericCircleRight>
      </Container>
    </Wrapper>
  );
};

export default BrandSuccessBanner;
