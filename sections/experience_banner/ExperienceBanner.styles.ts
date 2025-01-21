import styled from 'styled-components';
import { colors, spacing } from '@/styles/theme';
import Image from 'next/image';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${colors.secondaryDark};
  overflow: hidden;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 120px 14px;
  width: 100%;
  position: relative;
  color: ${colors.white};
  max-width: 1320px;

  @media (max-width: 1200px) {
    max-width: 960px;
  }

  @media (max-width: 992px) {
    padding-bottom: 240px;
    flex-direction: column;
    max-width: 720px;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 120px;
  }

  @media (max-width: 810px) {
    padding-left: 20px;
    padding-right: 20px;
  }

  @media (max-width: 620px) {
    padding-bottom: 120px;
  }

  @media (max-width: 767px) {
    max-width: 540px;
    padding-bottom: 60px;
    padding-top: 60px;
  }
`;

export const Content = styled.div`
  max-width: 526px;
  min-width: 480px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 992px) {
    min-width: 100%;
  }
`;

export const SectionSubtitle = styled.h4`
  color: ${colors.mildPink};
  margin-bottom: ${spacing.sm20};
`;

export const Title = styled.h2`
  color: ${colors.white};
  margin-bottom: ${spacing.mdl};


 span::after {
 background: ${colors.primary}
 ;
`;

export const Description = styled.p`
  margin-bottom: 45px;
`;

export const ImageWrapper = styled.div`
  position: relative;
  padding-left: 122px;
  display: flex;
  align-items: center;

  @media (max-width: 1400px) {
    padding-left: 0px;
  }

  @media (max-width: 992px) {
    margin-top: 140px;
  }
`;

export const MainImage = styled(Image).attrs({
  draggable: false,
  priority: true,
})`
  object-fit: cover;
  z-index: 1;

  @media (max-width: 1200px) {
    max-width: 456px;
    max-height: 334px;
  }

  @media (max-width: 992px) {
    max-width: 100%;
    max-height: 100%;
  }

  @media (max-width: 767px) {
    width: 100%;
    height: 100%;
  }
`;

export const GreenDots = styled(Image).attrs({
  draggable: false,
})`
  position: absolute;
  bottom: 2%;
  left: 120px;

  @media (max-width: 1400px) {
    left: 0%;
  }
`;

export const StaticCircle = styled(Image).attrs({
  draggable: false,
})`
  position: absolute;
  bottom: -13%;
  right: 0%;
`;

export const SpiralImageContainer = styled.div`
  position: absolute;
  top: 0;
  left: 13%;

  @media (max-width: 1400px) {
    left: 0%;
  }
`;

export const WaveImageContainer = styled.div`
  position: absolute;
  top: -3%;
  right: 15%;

  @media (max-width: 1400px) {
    right: 20%;
  }
`;
