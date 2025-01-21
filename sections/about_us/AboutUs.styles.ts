import styled from 'styled-components';
import { colors, spacing } from '@/styles/theme';
import Image from 'next/image';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 120px 0;
  width: 100%;
  position: relative;

  @media (max-width: 992px) {
    padding-bottom: 240px;
  }

  @media (max-width: 810px) {
    padding-left: 20px;
    padding-right: 20px;
  }

  @media (max-width: 620px) {
    padding-bottom: 0px;
    padding-top: 60px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1320px;
  position: relative;
  margin-bottom: 80px;
  padding: 0 14px;

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
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: relative;
  margin-top: 40px;

  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

export const DisplayContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  max-width: 800px;

  h4 {
    margin-bottom: ${spacing.sm20};
  }

  h2 {
    margin-bottom: 40px;
  }

  @media (max-width: 1200px) {
    max-width: 100%;
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 631px;
  max-height: 409px;
  position: relative;

  &::before {
    width: 500px;
    position: absolute;
    content: '';
    top: -22px;
    left: -23px;
    width: 597px;
    height: 364px;
    background: #f2dac0;
    border-radius: 171px 41px 41px 41px;
    -webkit-border-radius: 171px 41px 41px 41px;
  }

  @media (max-width: 1200px) {
    max-width: 42vw;
    max-height: 100%;

    &::before {
      width: 90%;
      height: 95%;
    }
  }

  @media (max-width: 992px) {
    max-width: 80%;
  }

  @media (max-width: 810px) {
    max-width: 100%;
  }
`;

export const MainImage = styled(Image).attrs({
  draggable: false,
  priority: true,
})`
  border-radius: 150px 20px 20px 20px;
  position: relative;
  height: 100%;
  width: 100%;

  @media (max-width: 1200px) {
    max-width: 100%;
    max-height: 100%;
  }
`;

export const GreenCircle = styled.div`
  position: absolute;
  bottom: 18%;
  left: 39%;

  width: 251px;
  height: 251px;
  background-color: rgba(197, 246, 23, 1);
  mix-blend-mode: multiply;

  border-radius: 50%;

  max-width: 251px;

  z-index: 3;

  @media (max-width: 1200px) {
    width: 200px;
    height: 200px;
    left: 33%;
  }

  @media (max-width: 992px) {
    bottom: 62%;
    left: 62%;
    width: 251px;
    height: 251px;
  }

  @media (max-width: 810px) {
    left: 65%;
    top: -10%;
  }

  @media (max-width: 776px) {
    display: none;
  }
`;

export const MotionIconWrapper = styled.div`
  position: absolute;
  bottom: 70px;
  left: -7%;

  @media (max-width: 1570px) {
    left: -3%;
  }

  @media (max-width: 992px) {
    bottom: 55%;
    left: -5%;
  }

  @media (max-width: 776px) {
    display: none;
  }
`;

export const ContentDetails = styled.div`
  max-width: 526px;
  margin-top: -24px;

  @media (max-width: 1400px) {
    max-width: 440px;
  }

  @media (max-width: 992px) {
    margin-top: 30px;
    max-width: 100%;
  }
`;

export const DetailsTitle = styled.p`
  margin-bottom: 40px;
`;

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.sm16};
`;

export const ListItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${spacing.sm16};

  svg {
    padding-top: 2px;
  }
`;

export const Counter = styled.div`
  position: absolute;
  right: 16%;
  bottom: 13%;
  background: ${colors.primary};
  width: 811px;
  height: 207px;
  z-index: 3;
  border-radius: 20px 20px 80px 20px;
  -webkit-border-radius: 20px 20px 80px 20px;
  -moz-border-radius: 20px 20px 80px 20px;
  -ms-border-radius: 20px 20px 80px 20px;
  -o-border-radius: 20px 20px 80px 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1200px) {
    height: 140px;
    width: 700px;
  }

  @media (max-width: 992px) {
    bottom: 120px;
    margin-left: auto;
    margin-right: auto;
    right: 0;
    left: 0;
  }

  @media (max-width: 757px) {
    width: 90%;
  }

  @media (max-width: 620px) {
    display: none;
  }
`;

export const CounterItem = styled.div<{ hasDivider: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 200px;
  ${({ hasDivider }) =>
    hasDivider && `border-right: 1px solid ${colors.white};`}
`;

export const CounterTitle = styled.p`
  font-size: 18px;
  color: ${colors.mildPink};
  margin-bottom: 0;

  @media (max-width: 757px) {
    font-size: 2.38vw;
  }
`;

export const CounterNumber = styled.p`
  color: ${colors.white};
  font-weight: 700;
  font-size: 45px;
  margin-bottom: 10px;

  @media (max-width: 757px) {
    font-size: 5.9vw;
  }
`;
