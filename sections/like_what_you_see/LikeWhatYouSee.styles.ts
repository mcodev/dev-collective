import styled from 'styled-components';
import { colors, spacing } from '@/styles/theme';
import Image from 'next/image';

export const Wrapper = styled.div<{ type: 'likeWhatYouSee' | 'contact' }>`
  margin-top: 480px;
  margin-bottom: ${({ type }) =>
    type === 'likeWhatYouSee' ? '480px' : '650px'};
  position: relative;
  height: 578px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1400px) {
    height: 495px;
  }

  @media (max-width: 1200px) {
    height: 428px;
  }

  @media (max-width: 990px) {
    height: 392px;
  }

  @media (max-width: 992px) {
    ${({ type }) =>
      type === 'contact' &&
      `
      margin-bottom: 750px;
      `};
  }

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: ${colors.primary};
    mix-blend-mode: multiply;
    z-index: 1;
  }

  @media (max-width: 716px) {
    margin-top: 300px;
    margin-bottom: ${({ type }) =>
      type === 'likeWhatYouSee' ? '350px' : '650px'};
  }

  @media (max-width: 563px) {
    height: 800px;

    ${({ type }) =>
      type === 'contact' &&
      `
      margin-bottom: 500px;
      `};
  }
`;

export const LeftRow = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  z-index: 0;

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
`;

export const LeftImage = styled(Image).attrs({
  draggable: false,
})`
  margin-top: -158px;
  -webkit-border-radius: 20px 200px 20px 20px;
  object-fit: cover;
  filter: grayscale(100%);

  @media (max-width: 1400px) {
    height: 652px;
    width: 447px;
  }

  @media (max-width: 1200px) {
    height: 535px;
    width: 413px;
    margin-top: -107px;
  }

  @media (max-width: 990px) {
    height: 500px;
    width: 381px;
    margin-left: 20px;
  }

  @media (max-width: 716px) {
    height: 335px;
    width: 281px;
  }
`;

export const RightImageWrapper = styled.div`
  position: relative;

  margin-top: -628px;
  position: absolute;
  right: 25%;
  z-index: 7;

  &::before {
    position: absolute;
    content: '';
    width: 350px;
    height: 315px;
    right: -26%;
    top: -53px;
    border-radius: 175px 20px 20px 20px;
    -webkit-border-radius: 175px 20px 20px 20px;
    -moz-border-radius: 175px 20px 20px 20px;
    -ms-border-radius: 175px 20px 20px 20px;
    -o-border-radius: 175px 20px 20px 20px;
    background: #c5f617;
    mix-blend-mode: multiply;
    z-index: 1;
  }

  @media (max-width: 1400px) {
    &::before {
      width: 350px;
      height: 329px;
    }
  }

  @media (max-width: 1200px) {
    margin-top: -500px;
    right: 22%;

    &::before {
      width: 322px;
      height: 265px;
    }
  }

  @media (max-width: 990px) {
    margin-top: -433px;
    right: 10%;

    &::before {
      right: -16%;
      width: 248px;
      height: 203px;
    }
  }

  @media (max-width: 768px) {
    right: 50px;
  }

  @media (max-width: 716px) {
    &::before {
      width: 180px;
      height: 180px;
    }
  }

  @media (max-width: 563px) {
    &::before {
      display: none;
    }
  }

  @media (max-width: 563px) {
    right: 20px;
    margin-top: -80px;
  }
`;

export const RightImage = styled(Image).attrs({
  draggable: false,
})`
  object-fit: cover;
  -webkit-border-radius: 175px 20px 20px 20px;
  z-index: 7;

  @media (max-width: 1400px) {
    width: 324px;
    height: 415px;
  }

  @media (max-width: 1200px) {
    width: 302px;
    height: 350px;
  }

  @media (max-width: 990px) {
    height: 255px;
    width: 262px;
  }

  @media (max-width: 716px) {
    height: 250px;
    width: 204px;
  }

  @media (max-width: 563px) {
    height: 360px;
    width: 280px;
  }
`;

export const LikeWhatYouSeeCard = styled.div`
  background-color: ${colors.darkBg};
  color: ${colors.white};
  z-index: 7;
  width: 55%;
  position: absolute;
  right: 0;
  bottom: -140px;
  padding: 60px 80px 40px 80px;
  -webkit-border-radius: 20px 0 0 132px;
  height: fit-content;

  h4 {
    margin-bottom: ${spacing.sm20};
    color: ${colors.white};
  }

  h2 {
    margin-bottom: ${spacing.mdl};
    color: ${colors.white};

    span::after {
      background: ${colors.primary};
    }
  }

  p {
    margin-bottom: 45px;
    max-width: 650px;
  }

  @media (max-width: 1400px) {
    width: 65%;
  }

  @media (max-width: 1200px) {
    bottom: -200px;

    h4 {
      margin-bottom: 20px;
      font-size: 18px;
    }

    h2 {
      margin-bottom: 20px;
      font-size: 45px;
    }
  }

  @media (max-width: 990px) {
    bottom: -250px;
    padding: 40px 60px 20px 60px;
    width: 85%;

    h2 {
      margin-bottom: 15px;
      font-size: 38px;
    }

    p {
      margin-bottom: 30px;
    }
  }

  @media (max-width: 716px) {
    width: 100%;
    -webkit-border-radius: 10px 100px 0 0;
    bottom: -220px;
  }

  @media (max-width: 563px) {
    bottom: -230px;

    h2 {
      font-size: 30px;
    }

    p {
      margin-bottom: 20px;
    }
  }
`;

export const GreenCircleImage = styled(Image).attrs({
  draggable: false,
})<{ type: 'likeWhatYouSee' | 'contact' }>`
  position: absolute;
  z-index: 8;
  opacity: 0.8;

  ${({ type }) =>
    type === 'likeWhatYouSee'
      ? `
    right: 5%;
      top: 240px;

      @media (max-width: 1400px) {
        top: 160px;
      }

      @media (max-width: 1000px) {
        display: none;
      }
    `
      : `
      left: 13%;
      top: -200px;

      @media (max-width: 1000px) {
        display: none;
      }
  `}
`;

export const StrippedCircleImage = styled(Image).attrs({
  draggable: false,
})`
  position: absolute;
  left: 35%;
  bottom: -180px;
  z-index: 8;

  @media (max-width: 1400px) {
    left: 22%;
    bottom: -150px;
  }

  @media (max-width: 990px) {
    display: none;
  }
`;

export const MotionCircleContainer = styled.div`
  position: absolute;
  right: 32%;
  top: 150px;
  z-index: 6;

  img {
    width: 286px;
    height: 286px;
  }

  @media (max-width: 1400px) {
    top: 100px;
    right: 35%;
  }

  @media (max-width: 875px) {
    right: 40%;
  }

  @media (max-width: 716px) {
    right: 65%;
  }

  @media (max-width: 563px) {
    right: calc(0% + 286px);
  }
`;

export const MotionDotsContainer = styled.div`
  position: absolute;
  left: 41%;
  top: -200px;
  z-index: 8;

  @media (max-width: 1400px) {
    left: 42%;
  }

  @media (max-width: 1200px) {
    left: 43%;
  }

  @media (max-width: 990px) {
    left: 55%;
  }

  @media (max-width: 768px) {
    left: 51%;
  }

  @media (max-width: 563px) {
    left: calc(100% - 40px);
  }
`;
