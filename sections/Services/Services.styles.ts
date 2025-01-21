import styled from 'styled-components';
import { colors, spacing } from '../../styles/theme';
import Image from 'next/image';

export const Wrapper = styled.section`
  position: relative;
  width: 100%;
  background-color: ${colors.secondaryDark};
  z-index: 1;
`;

export const Container = styled.div`
  max-width: 1320px;
  width: 100%;
  margin: 0 auto;
  padding: 120px ${spacing.sm12};

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
  }
`;

export const ContentWrapper = styled.div`
  font-family: 'Poppins', sans-serif;
  margin-bottom: 84px;
`;

export const SectionSubTitle = styled.h4`
  font-size: 20px;
  margin-bottom: ${spacing.sm20};

  transition: all 0.4s ease-in-out;

  @media (max-width: 1200px) {
    font-size: 18px;
  }
`;

export const SectionTitle = styled.h2`
  color: white;
  text-align: left;

  span::after {
    background-color: ${colors.primary};
  }

  transition: all 0.4s ease-in-out;

  @media (max-width: 1200px) {
    font-size: 45px;
  }

  @media (max-width: 992px) {
    font-size: 38px;
  }

  @media (max-width: 575px) {
    font-size: 35px;

    span::after {
      background-color: transparent;
    }
  }
`;

export const ServicesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: ${spacing.lg36} ${spacing.md};

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 767px) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: ${spacing.lg};
  }
`;

export const ServicesWaveWrapper = styled.div`
  max-width: 1103px;
  width: 100%;
  height: 18%;
  position: absolute;
  top: 0;
  right: 11%;
  z-index: -1;

  @media (max-width: 1200px) {
    height: 12%;
  }

  @media (max-width: 992px) {
    height: 10%;
  }

  @media (max-width: 767px) {
    height: 5%;
  }

  @media (max-width: 575px) {
    height: 3%;
  }
`;

export const ServicesWave = styled(Image).attrs({
  priority: true,
})``;

export const SpiralHalf = styled.div`
  > img:first-child {
    position: absolute;
    top: 39%;
    right: 0;
  }
`;

export const DotsWrapper = styled.div`
  > img:first-child {
    position: absolute;
    top: 13%;
    right: 16%;

    @media (max-width: 1400px) {
      top: 15%;
    }

    @media (max-width: 1200px) {
      top: 13%;
    }

    @media (max-width: 992px) {
      top: 9%;
    }

    @media (max-width: 767px) {
      top: 5%;
    }

    @media (max-width: 575px) {
      top: 6%;
    }
  }
`;
