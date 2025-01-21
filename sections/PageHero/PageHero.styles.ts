import styled from 'styled-components';
import { colors } from '@/styles/theme';
import Link from 'next/link';

export const Wrapper = styled.div`
  height: 640px;
  background-color: ${colors.primary};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  @media (max-width: 1200px) {
    height: 540px;
  }
`;

export const ImagesWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`;

export const LogoBackgroundWrapper = styled.div`
  max-width: 564px;
  max-height: 159px;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  right: 66.4%;
  z-index: 2;

  transition: right 0.3s ease-in-out;

  @media (max-width: 1400px) {
    right: 60%;
  }

  @media (max-width: 1200px) {
    right: 55%;
  }

  @media (max-width: 992px) {
    right: 50%;
  }

  @media (max-width: 767px) {
    right: 35%;
    max-height: 18dvw;
  }

  @media (max-width: 575px) {
    right: 29%;
    top: -18px;
    max-height: 32dvw;
    rotate: 3deg;
  }
`;

export const BackgroundHeroImageWrapper = styled.div`
  position: absolute;
  max-width: 771px;
  max-height: 543px;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;

  @media (max-width: 1200px) {
    max-height: 67dvw;
  }
`;

export const LeftDotsWrapper = styled.div`
  max-width: 198px;
  max-height: 323.39px;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 141px;
  z-index: 1;
`;

export const DownLollipopWrapper = styled.div`
  max-width: 270px;
  max-height: 158.14px;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 21%;
  bottom: 0;
  z-index: 1;

  @media (max-width: 575px) {
    right: -10%;
    left: auto;
  }
`;

export const StraightLinesWrapper = styled.div`
  max-width: 119px;
  max-height: 118.73px;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 154px;
  right: 56.3%;
  z-index: 1;

  transition: all 0.3s ease-in-out;
  @media (max-width: 1400px) {
    right: 45%;
  }

  @media (max-width: 1200px) {
    right: 38%;
  }

  @media (max-width: 992px) {
    right: 35%;
  }

  @media (max-width: 767px) {
    display: none;
  }
`;

export const MiddleDotsWrapper = styled.div`
  max-width: 28px;
  max-height: 118.88px;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 256px;
  right: 37%;
  z-index: 1;

  @media (max-width: 992px) {
    right: 45%;
  }

  @media (max-width: 767px) {
    right: 20%;
  }

  @media (max-width: 575px) {
    right: 5%;
  }
`;

export const RightShellWrapper = styled.div`
  max-width: 285px;
  max-height: 446.81px;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 136px;
  right: 0;
  z-index: 1;

  @media (max-width: 767px) {
    display: none;
  }
`;

export const HeroNavigationDetails = styled.div`
  max-width: 1320px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 12px;
  z-index: 3;

  transition: all 0.3s ease-in-out;

  @media (max-width: 1400px) {
    max-width: 1140px;
  }

  @media (max-width: 1200px) {
    height: 540px;
    max-width: 960px;
  }

  @media (max-width: 992px) {
    max-width: 724px;
  }

  @media (max-width: 767px) {
    max-width: 540px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 19px;
  }

  @media (max-width: 575px) {
  }
`;

export const PageDetails = styled.div`
  color: ${colors.white};
  font-size: 60px;
  font-weight: 900;

  @media (max-width: 1400px) {
    font-size: 50px;
  }

  @media (max-width: 1200px) {
    font-size: 45px;
  }

  @media (max-width: 992px) {
    font-size: 40px;
  }

  @media (max-width: 767px) {
    font-size: 32px;
  }

  @media (max-width: 575px) {
    font-size: 30px;
  }
`;

export const NavigationDetails = styled.div`
  display: flex;
  align-items: center;

  gap: 5px;

  svg {
    color: white;
    width: 30px;
    height: 20px;
  }
`;

export const HomeLink = styled(Link)`
  font-size: 20px;
  font-weight: normal;
  color: ${colors.mildPink};

  text-decoration: none;
`;

export const CurrentPage = styled.span`
  font-size: 20px;
  font-weight: normal;
  color: ${colors.white};
`;
