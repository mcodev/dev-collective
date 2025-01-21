import styled from 'styled-components';
import { colors } from '../../styles/theme';
import Image from 'next/image';

export const Wrapper = styled.div`
  position: relative;
  background-color: ${colors.secondaryDark};
  padding: 140px 0px;
  overflow: hidden;
`;

export const Container = styled.div`
  position: relative;
  max-width: 1320px;
  width: 100%;
  margin: 190px auto 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.3s ease-in-out;
  padding: 0 12px;

  @media (max-width: 1400px) {
    max-width: 1140px;
  }

  @media (max-width: 1200px) {
    max-width: 960px;
    margin-top: 156px;
  }

  @media (max-width: 992px) {
    max-width: 720px;
    margin-top: 102px;
  }

  @media (max-width: 767px) {
    max-width: 540px;
  }
`;

export const HeroContainer = styled.div`
  width: 100%;
  height: 732px;
  background-color: transparent;
  display: flex;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

export const HeroContentDetails = styled.div`
  max-width: 660px;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

export const HeroCommercialTitle = styled.h2`
  color: ${colors.primary};
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 20px;
  text-transform: uppercase;

  @media (max-width: 1200px) {
    font-size: 18px;
  }

  @media (max-width: 992px) {
  }

  @media (max-width: 767px) {
  }

  @media (max-width: 575px) {
  }
`;

export const HeroTitle = styled.h4`
  color: ${colors.white};
  margin-bottom: 20px;
  line-height: 1.2;

  > span {
    &::after {
      background: ${colors.primary};
    }
  }

  @media (max-width: 1200px) {
    font-size: 50px;
    margin-bottom: 24px;
  }

  @media (max-width: 992px) {
    font-size: 40px;
  }

  @media (max-width: 767px) {
  }

  @media (max-width: 575px) {
  }
`;

export const HeroDescription = styled.p`
  max-width: 450px;
  width: 100%;
  margin-bottom: 44px;
  color: white;
  line-height: 1.7;

  @media (max-width: 1400px) {
    max-width: 432px;
  }

  @media (max-width: 992px) {
    max-width: 320px;
  }

  @media (max-width: 767px) {
    max-width: 440px;
  }
`;

export const HeroImagesContainer = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  padding: 0 12px;
`;

export const HeroBackgroundImagesWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const HeroImageWrapper = styled.div`
  position: relative;
  width: 584px;
  height: 447px;
  z-index: 3;
  transform: translate(68px, -34px);

  @media (max-width: 1400px) {
    width: 574px;
    height: 440px;
    transform: translate(40px, -30px);
  }

  @media (max-width: 1200px) {
    width: 484px;
    height: 370px;
    transform: translate(40px, -11px);
  }

  @media (max-width: 992px) {
    width: 364px;
    height: 278px;
    transform: translate(40px, 39px);
  }

  @media (max-width: 767px) {
    width: 454px;
    height: 347px;
    transform: translate(-10px, 6px);
  }

  @media (max-width: 575px) {
    width: 80vw;
    height: 70vw;
    transform: translate(26px, 66px);
  }
`;

export const HeroImage = styled(Image)`
  position: absolute;
`;

export const HeroBackgroundSplashWrapper = styled.div`
  position: absolute;
  top: 16px;
  right: 10%;
  width: 750px;
  height: 617px;
  z-index: 1;

  @media (max-width: 1700px) {
    right: 3%;
  }

  @media (max-width: 1400px) {
    right: 1%;
  }

  @media (max-width: 1200px) {
    right: -154px;
    top: 4px;
  }

  @media (max-width: 992px) {
    right: -166px;
    top: 10px;
  }

  @media (max-width: 767px) {
    right: 0;
    top: 350px;
  }

  @media (max-width: 575px) {
    right: -160px;
    top: 350px;
  }
`;

export const HeroBackgroundSplashImage = styled(Image)`
  position: absolute;
`;

export const DottedCircleWrapper = styled.div`
  position: absolute;
  top: 160px;
  right: 31%;
  width: 311px;
  height: 275px;
  z-index: 1;

  @media (max-width: 1700px) {
    right: 28%;
  }

  @media (max-width: 1200px) {
    top: 112px;
    right: 25%;
  }

  @media (max-width: 992px) {
    top: 118px;
    right: 18%;
  }

  @media (max-width: 767px) {
    top: 480px;
    left: 100px;
  }

  @media (max-width: 575px) {
    width: 50vw;
    height: 50vw;
    left: 60px;
  }
`;

export const DottedCircleImage = styled(Image)`
  position: absolute;
`;

export const StrippedCircleGreenImage = styled(Image)`
  position: absolute;
  top: 80px;
  right: 12%;

  @media (max-width: 1700px) {
    right: 6%;
  }

  @media (max-width: 1200px) {
    top: 40px;
  }

  @media (max-width: 767px) {
    right: 7%;
    top: 400px;
  }

  @media (max-width: 575px) {
    display: none;
  }
`;

export const MotionSpiralFullCircleWrapper = styled.div`
  position: absolute;
  top: 532px;
  right: calc(68% - 25vw);
  z-index: 2;

  @media (max-width: 1200px) {
    top: 410px;
    right: 48%;
  }

  @media (max-width: 992px) {
    display: none;
  }
`;

export const MotionPinkHorizontalDotsWrapper = styled.div`
  position: absolute;
  top: 300px;
  right: 13.5%;
  z-index: 2;

  @media (max-width: 1700px) {
    right: 8%;
  }

  @media (max-width: 1200px) {
    display: none;
  }
`;

export const DedicatedTeamWaveWrapper = styled.div`
  position: absolute;
  top: 492px;
  right: 9%;
  width: 839px;
  height: 798px;
  z-index: 2;

  @media (max-width: 1700px) {
    right: 1%;
  }

  @media (max-width: 1200px) {
    top: 432px;
    right: -83px;
  }

  @media (max-width: 992px) {
    top: 328px;
    right: -68px;
  }

  @media (max-width: 767px) {
    width: 751px;
    height: 714px;
    top: 658px;
    right: 6px;
  }

  @media (max-width: 575px) {
    width: 100vw;
    height: 140vw;
    top: 658px;
    right: 6px;
  }
`;

export const DedicatedTeamWaveImage = styled(Image)`
  position: absolute;
`;

export const WhatWeDoContainer = styled.div`
  width: 100%;
  height: 722px;
  margin-top: 65px;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  z-index: 2;

  &::before {
    content: '';
    position: absolute;
    bottom: 186px;
    left: -214px;
    width: 776px;
    height: 776px;
    border-radius: 50%;
    background-color: #232745;
    z-index: -1;

    @media (max-width: 1400px) {
      width: 650px;
      height: 650px;
      bottom: 314px;
      left: -92px;
    }

    @media (max-width: 1200px) {
      width: 500px;
      height: 500px;
      bottom: 308px;
      left: -148px;
    }

    @media (max-width: 992px) {
      width: 400px;
      height: 400px;
      top: 480px;
      bottom: auto;
      left: -88px;
    }

    @media (max-width: 767px) {
      width: 430px;
      height: 430px;
      top: 956px;
      left: -110px;
    }

    @media (max-width: 575px) {
      width: 360px;
      height: 360px;
      top: 1000px;
      left: -80px;
    }
  }

  @media (max-width: 1200px) {
    margin-top: -32px;
    height: 658px;
  }

  @media (max-width: 991px) {
    margin-top: -104px;
    height: auto;
  }

  @media (max-width: 767px) {
    margin-top: 380px;
  }
`;

export const WhatWeDoCommercialTitle = styled.h2`
  color: ${colors.primary};
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 16px;
  text-transform: uppercase;

  @media (max-width: 1200px) {
    font-size: 18px;
  }
`;

export const WhatWeDoTitle = styled.h4`
  color: ${colors.white};
  line-height: 1.3;
  margin-bottom: 80px;
  font-size: 50px;

  > span {
    &::after {
      background: ${colors.primary};
    }
  }

  @media (max-width: 1200px) {
    font-size: 45px;
  }

  @media (max-width: 992px) {
    font-size: 38px;
  }

  @media (max-width: 575px) {
    font-size: 35px;
  }
`;

export const CardsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 992px) {
    flex-direction: column;
    gap: 40px;
  }
`;

const WhatWeDoCard = styled.div`
  position: relative;
  width: 416px;
  height: 498.8px;
  border-radius: 20px;
  padding: 65px 70px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: all 0.3s ease-in-out;

  @media (max-width: 1400px) {
    width: 356px;
    height: 504px;
    padding: 55px 60px;
  }

  @media (max-width: 1200px) {
    width: 296px;
    height: 452px;
    padding: 30px 35px;
  }

  @media (max-width: 992px) {
    width: 100%;
    height: auto;
    padding: 65px 70px;
  }

  @media (max-width: 575px) {
    padding: 40px 45px;
  }
`;

export const FirstWhatWeDoCard = styled(WhatWeDoCard)`
  background-color: #d4c5ff;

  &::before {
    content: '';
    position: absolute;
    top: 100px;
    left: 66px;
    width: 40px;
    height: 40px;
    background-color: #b19cff;
    border-radius: 50%;
    z-index: 0;

    @media (max-width: 1400px) {
      top: 90px;
    }

    @media (max-width: 1200px) {
      top: 70px;
      left: 40px;
    }

    @media (max-width: 992px) {
      top: 100px;
      left: 66px;
    }

    @media (max-width: 575px) {
      top: 80px;
      left: 46px;
    }
  }

  &:hover {
    transform: translateY(-12px);
  }
`;

export const SecondWhatWeDoCard = styled(WhatWeDoCard)`
  background-color: #fff5e8;
  transform: translateY(-92px);

  &::before {
    content: '';
    position: absolute;
    top: 100px;
    left: 66px;
    width: 40px;
    height: 40px;
    background-color: #f2dac0;
    border-radius: 50%;
    z-index: 0;

    @media (max-width: 1400px) {
      top: 90px;
    }

    @media (max-width: 1200px) {
      top: 70px;
      left: 40px;
    }

    @media (max-width: 992px) {
      top: 100px;
      left: 66px;
    }

    @media (max-width: 575px) {
      top: 80px;
      left: 46px;
    }
  }

  &:hover {
    transform: translateY(-104px);

    @media (max-width: 992px) {
      transform: translateY(-12px);
    }
  }

  @media (max-width: 992px) {
    transform: none;
  }
`;

export const ThirdWhatWeDoCard = styled(WhatWeDoCard)`
  background-color: #e5ffcf;
  transform: translateY(-184px);

  &::before {
    content: '';
    position: absolute;
    top: 100px;
    left: 66px;
    width: 40px;
    height: 40px;
    background-color: #c2ea9b;
    border-radius: 50%;
    z-index: 0;

    @media (max-width: 1400px) {
      top: 90px;
    }

    @media (max-width: 1200px) {
      top: 70px;
      left: 40px;
    }

    @media (max-width: 992px) {
      top: 100px;
      left: 66px;
    }

    @media (max-width: 575px) {
      top: 80px;
      left: 46px;
    }
  }

  &:hover {
    transform: translateY(-196px);

    @media (max-width: 992px) {
      transform: translateY(-12px);
    }
  }

  @media (max-width: 992px) {
    transform: none;
  }
`;

export const WhatWeDoCardIcon = styled(Image)`
  margin-bottom: 40px;
  margin-left: 10px;
  z-index: 2;
`;

export const WhatWeDoCardTitle = styled.span`
  margin-bottom: 32px;
  font-size: 24px;
  font-weight: 600;

  @media (max-width: 992px) {
    font-size: 32px;
  }

  @media (max-width: 575px) {
    font-size: 24px;
  }
`;

export const WhatWeDoCardDescription = styled.p`
  line-height: 1.7;
  min-height: 160px;
  overflow: hidden;

  @media (max-width: 1400px) {
    margin-bottom: 12px;
  }

  @media (max-width: 992px) {
    font-size: 18px;
  }

  @media (max-width: 575px) {
    font-size: 16px;
  }
`;

const FindOutMoreButton = styled.button`
  min-width: 188px;
  max-width: 188px;
  min-height: 56px;
  max-height: 56px;
  text-align: center;
  border-radius: 50px;
  outline: none;
  border: none;
  font-weight: 500;
  font-size: 16px;
  color: ${colors.darkerPurple};
  transition: all 0.4s ease-in-out;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    cursor: pointer;
    scale: 1.03;
  }

  @media (max-width: 992px) {
    font-size: 18px;
  }

  @media (max-width: 575px) {
    font-size: 16px;
  }
`;

export const FirstFindOutMoreButton = styled(FindOutMoreButton)`
  background-color: #b19cff;

  // on hover change the color with transition
`;

export const SecondFindOutMoreButton = styled(FindOutMoreButton)`
  background-color: #f2dac0;
`;

export const ThirdFindOutMoreButton = styled(FindOutMoreButton)`
  background-color: #c2ea9b;
`;
