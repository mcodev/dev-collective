import styled from 'styled-components';
import { colors } from '../../styles/theme';
import Image from 'next/image';

export const Wrapper = styled.div`
  background-color: ${colors.mildBG};
`;

export const Container = styled.div`
  position: relative;
  max-width: 1320px;
  width: 100%;
  margin: 0 auto;
  padding: 120px 12px;
  display: flex;
  flex-direction: column;
  align-items: center;

  transition: all 0.3s ease-in-out;
  @media (max-width: 1400px) {
    max-width: 1140px;
  }

  @media (max-width: 1200px) {
    max-width: 960px;
  }

  @media (max-width: 992px) {
    max-width: 720px;
  }

  @media (max-width: 767px) {
    max-width: 540px;
  }

  @media (max-width: 575px) {
    max-width: 528px;

    padding-top: 60px;
    padding-bottom: 60px;
  }
`;

export const BannerTitle = styled.h2`
  margin-bottom: 20px;
  font-size: 20px;
  color: ${colors.primary};
  font-weight: 600;
`;

export const BannerPromotionText = styled.p`
  margin-bottom: 32px;
  font-size: 50px;
  text-align: center;

  @media (max-width: 1200px) {
    font-size: 45px;
  }

  @media (max-width: 992px) {
    & > span::after {
      background-color: transparent;
    }
  }

  @media (max-width: 767px) {
    font-size: 38px;
  }

  @media (max-width: 575px) {
    font-size: 35px;
  }
`;

export const BannerDescription = styled.p`
  max-width: 600px;
  text-align: center;
  margin-bottom: 100px;
  color: ${colors.darkGray};
`;

export const EmptyCircleImage = styled(Image)`
  position: absolute;
  left: calc(18% - 20vw);
  top: 250px;

  @media (max-width: 1200px) {
  }

  @media (max-width: 992px) {
    top: 420px;
  }

  @media (max-width: 767px) {
    top: 400px;
  }

  @media (max-width: 575px) {
    top: 420px;
    left: -80px;
  }
`;

export const MotionStripedCircleContainer = styled.div`
  position: absolute;
  top: 180px;
  left: 16px;

  @media (max-width: 1400px) {
    left: calc(24% - 25vw);
    top: 220px;
  }

  @media (max-width: 992px) {
    top: 380px;
  }

  @media (max-width: 575px) {
    display: none;
  }
`;

export const MotionGreenCircleContainer = styled.div`
  position: absolute;
  top: 300px;
  right: calc(50% - 25vw);

  & > img {
    width: 64px;
    height: 64px;
  }

  @media (max-width: 992px) {
    top: 360px;
  }

  @media (max-width: 575px) {
    right: calc(50% - 10vw);
  }

  @media (max-width: 375px) {
    display: none;
  }
`;

export const ImagesContainer = styled.div`
  position: relative;
  height: 540px;
  max-width: 1010px;
  width: 100%;

  @media (max-width: 992px) {
    height: 380px;
  }

  @media (max-width: 767px) {
  }

  @media (max-width: 575px) {
  }
`;

export const FirstBannerImageWrapper = styled.div`
  position: absolute;
  width: 485px;
  height: 485px;
  border-radius: 50%;
  top: 40px;
  left: 64px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    scale: 1.12;
    background-color: ${colors.secondaryDark};
    border-radius: 50%;
    opacity: 0.9;
  }

  @media (max-width: 1400px) {
    width: 461px;
    height: 461px;

    &::before {
      scale: 1.1;
    }
  }

  @media (max-width: 1200px) {
    width: 380px;
    height: 380px;
    left: 160px;
  }

  @media (max-width: 992px) {
    width: 322px;
    height: 322px;

    left: 72px;
  }

  @media (max-width: 767px) {
    width: 285px;
    height: 285px;
    left: 16px;
  }

  @media (max-width: 575px) {
    width: 51dvw;
    height: 51dvw;
    left: 0;
  }
`;

export const FirstBannerImage = styled(Image)`
  object-fit: cover;
  border-radius: 50%;
  overflow: hidden;
  opacity: 0.8;
`;

export const SecondBannerImageWrapper = styled.div`
  position: absolute;
  bottom: 32px;
  left: 516px;
  width: 338px;
  height: 338px;
  border-radius: 50%;
  overflow: hidden;
  opacity: 0.8;
  z-index: 3;

  @media (max-width: 1400px) {
    width: 321x;
    height: 321px;
  }

  @media (max-width: 1200px) {
    width: 265px;
    height: 265px;
    bottom: 120px;
  }

  @media (max-width: 992px) {
    width: 224px;
    height: 224px;

    left: 370px;
    top: 150px;
  }

  @media (max-width: 767px) {
    width: 200px;
    height: 200px;
    left: 230px;
  }

  @media (max-width: 575px) {
    width: 36dvw;
    height: 36dvw;
    left: calc(60% - 32px);
    bottom: 240px;
  }
`;

export const SecondBannerImage = styled(Image)`
  object-fit: cover;
`;

export const ThirdBannerImageWrapper = styled.div`
  position: absolute;
  top: 40px;
  right: -12px;
  width: 255px;
  height: 255px;
  border-radius: 50%;
  z-index: 2;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    scale: 1.17;
    background-color: ${colors.lightGreen};
    border-radius: 50%;
    opacity: 0.9;
  }

  @media (max-width: 1400px) {
    width: 242px;
    height: 242px;
  }

  @media (max-width: 1200px) {
    width: 200px;
    height: 200px;
    right: 0;
  }

  @media (max-width: 992px) {
    width: 170px;
    height: 170px;
  }

  @media (max-width: 767px) {
    width: 150px;
    height: 150px;
  }

  @media (max-width: 575px) {
    width: 27dvw;
    height: 27dvw;
    right: 16px;
  }
`;

export const ThirdBannerImage = styled(Image)`
  object-fit: cover;
  border-radius: 50%;
  overflow: hidden;
  opacity: 0.8;
`;

const GenericCircle = styled.div`
  width: 223px;
  height: 223px;
  display: flex;
  flex-direction: column;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  gap: 16px;
  color: ${colors.white};
  opacity: 0.8;

  @media (max-width: 992px) {
    width: 175px;
    height: 175px;
  }

  @media (max-width: 767px) {
    width: 165px;
    height: 165px;
  }
`;

export const NumericCircleLeft = styled(GenericCircle)`
  position: absolute;
  bottom: 128px;
  left: 28px;
  background-color: ${colors.secondaryDark};

  @media (max-width: 992px) {
    bottom: 116px;
    left: calc(24% - 25vw);
  }

  @media (max-width: 575px) {
    left: 0;
  }
`;

export const NumericCircleRight = styled(GenericCircle)`
  position: absolute;
  bottom: 184px;
  right: calc(10% - 5vw);
  background-color: ${colors.primary};
  z-index: 3;
  opacity: 0.9;

  @media (max-width: 1200px) {
    bottom: 124px;
    right: calc(10% - 8vw);
  }

  @media (max-width: 992px) {
    bottom: 130px;
    right: calc(20% - 20vw);
  }

  @media (max-width: 767px) {
    bottom: 160px;
  }

  @media (max-width: 575px) {
    bottom: 60px;
    right: 6px;
  }
`;

export const SuccessfulNumber = styled.div`
  font-size: 45px;
  font-weight: 600;
  letter-spacing: -1.6px;

  @media (max-width: 992px) {
    font-size: 38px;
  }

  @media (max-width: 767px) {
    font-size: 32px;
  }
`;

export const SuccessDescription = styled.span`
  font-size: 18px;

  @media (max-width: 992px) {
    font-size: 16px;
  }

  @media (max-width: 767px) {
    font-size: 15px;
  }
`;
