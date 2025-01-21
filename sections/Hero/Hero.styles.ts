import styled from 'styled-components';
import { colors, spacing } from '@/styles/theme';
import Image from 'next/image';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 1080px;
  background-color: ${colors.mildBG};

  @media (max-width: 767px) {
    min-height: 1380px;
    align-items: flex-start;
    padding-top: 181px;
  }

  @media (max-width: 425px) {
    padding-top: 165px;
    min-height: 1100px;
  }
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  z-index: 6;

  max-width: 1320px;

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
    margin: 0 12px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  z-index: 6;
  padding: 0 ${spacing.sm12};

  & h1 {
    margin-bottom: ${spacing.sm20};
    font-size: 20px;
    font-weight: 700;
  }

  & h2 {
    margin-bottom: ${spacing.mdl};
  }

  & p {
    margin-bottom: 45px;
    max-width: 500px;

    @media (max-width: 780px) {
      max-width: 350px;
    }
  }

  @media (max-width: 768px) {
    & h4 {
      font-size: 18px;
    }

    & h2 {
      font-size: 35px;
    }
  }

  @media (max-width: 767px) {
    width: 100%;
    padding: 0;

    p {
      max-width: 100%;
    }
  }
`;

export const ContentBgImage = styled(Image).attrs({
  draggable: false,
})`
  position: absolute;
  top: 18%;
  left: 6%;
  max-width: 69%;

  @media (max-width: 1700px) {
    left: 0%;
  }

  @media (max-width: 1440px) {
    left: -5%;
  }

  @media (max-width: 767px) {
    left: 0%;
    top: 5%;
    max-width: 100%;
    width: 100%;
    height: 450px;
  }
`;

export const WaveImage = styled(Image).attrs({
  draggable: false,
})`
  position: absolute;
  bottom: 34%;
  right: 44%;

  max-width: 109px;

  @media (max-width: 1440px) {
    display: none;
  }
`;

export const SpiralCircleImage = styled(Image).attrs({
  draggable: false,
})`
  position: absolute;
  bottom: 20%;
  right: 29%;

  max-width: 119px;
  z-index: 4;

  @media (max-width: 1440px) {
    right: 35%;
  }

  @media (max-width: 1440px) {
    max-width: 80px;
    max-height: 80px;
  }

  @media (max-width: 767px) {
    bottom: 10%;
    right: 65%;
  }

  @media (max-width: 588px) {
    display: none;
  }
`;

export const EmptyCircleImage = styled(Image).attrs({
  draggable: false,
})`
  position: absolute;
  top: 20%;
  right: 4%;

  max-width: 606px;

  @media (max-width: 1350px) {
    display: none;
  }
`;

export const DottedCircleImage = styled(Image).attrs({
  draggable: false,
})`
  position: absolute;
  top: 32%;
  right: 23%;

  max-width: 285px;

  @media (max-width: 992px) {
    max-width: 270px;
    max-height: 400px;
    right: 13%;
  }

  @media (max-width: 767px) {
    top: 520px;
    right: 45%;
  }
`;

export const GreenCircleImage = styled.div`
  position: absolute;
  top: 18%;
  right: 4%;

  width: 437px;
  height: 437px;
  background-color: rgba(197, 246, 23, 1);
  mix-blend-mode: multiply;
  border-radius: 50%;

  max-width: 437px;

  z-index: 3;

  @media (max-width: 1350px) {
    max-width: 300px;
    height: 300px;
  }

  @media (max-width: 767px) {
    top: 500px;
    right: 5%;
    max-width: 250px;
    max-height: 250px;
  }
`;

export const WomanImage = styled(Image).attrs({
  draggable: false,
})`
  position: absolute;
  top: 30%;
  right: 10%;

  border-radius: 190px;

  object-fit: cover;
  outline: 20px solid ${colors.mildPink};

  max-width: 340px;
  z-index: 2;

  @media (max-width: 1440px) {
    right: 8%;
  }

  @media (max-width: 992px) {
    right: 5%;
    max-width: 270px;
    max-height: 400px;
  }

  @media (max-width: 767px) {
    top: 600px;
    right: 20%;
  }
`;

export const StrippedCircleImage = styled(Image).attrs({
  draggable: false,
})`
  position: absolute;
  top: 16%;
  right: 10%;

  max-width: 86px;
  z-index: 3;

  @media (max-width: 767px) {
    top: 450px;
    right: 5%;
  }
`;

export const OvalSpiralImage = styled(Image).attrs({
  draggable: false,
})`
  position: absolute;
  bottom: 10%;
  right: 0%;

  max-width: 246px;

  @media (max-width: 1350px) {
    max-width: 200px;
    max-height: 400px;
    bottom: 15%;
  }

  @media (max-width: 767px) {
    right: 0%;
    top: 650px;
  }
`;

export const CrossImage = styled(Image).attrs({
  draggable: false,
})`
  position: absolute;
  top: 18%;
  right: 4%;

  max-width: 24px;

  @media (max-width: 1440px) {
    display: none;
  }
`;

export const WorkImageSecondaryContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: -5.5%;
  left: 8%;
  max-width: 451px;
  z-index: 1;
  max-height: 340px;

  min-width: 200px;

  @media (max-width: 1700px) {
    max-width: 30%;
    bottom: -5.5%;
    left: 2%;
  }

  @media (max-width: 1400px) {
    bottom: -8.5%;
  }

  @media (max-width: 1200px) {
    bottom: -12.5%;
  }

  @media (max-width: 1024px) {
    bottom: -15%;
  }

  @media (max-width: 870px) {
    bottom: -16.5%;
  }

  @media (max-width: 768px) {
    bottom: -23.2%;
  }
`;

export const MotionCircleContainer = styled.div`
  position: absolute;
  top: 28%;
  right: 40%;

  z-index: 5;

  img {
    width: 66px;
    height: 66px;

    @media (max-width: 1350px) {
      width: 40px;
      height: 40px;
    }
  }

  @media (max-width: 767px) {
    top: 60%;
    right: 80%;
  }

  @media (max-width: 588px) {
    display: none;
  }
`;

export const MotionDotsContainer = styled.div`
  position: absolute;
  top: 28%;
  right: 25%;

  z-index: 8;

  @media (max-width: 767px) {
    top: 60%;
    right: 50%;
  }

  @media (max-width: 588px) {
    display: none;
  }
`;
