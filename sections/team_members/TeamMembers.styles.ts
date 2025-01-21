import styled from 'styled-components';
import { colors, spacing } from '@/styles/theme';
import Image from 'next/image';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.mildBG};
  padding: 120px 0;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  z-index: 1;
  gap: 80px;
  position: relative;

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

  @media (max-width: 715px) {
    justify-content: center;
  }
`;

export const Header = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin-bottom: 20px;
  }

  h2 {
    margin-bottom: 28px;
  }

  p {
    max-width: 600px;
  }
`;

export const ContentWrapper = styled.div`
  width: 100%;
  margin-bottom: 100px;
`;

export const CardContainer = styled.div`
  display: grid;
  gap: 40px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 2;
  background-color: transparent;
  // cursor: pointer;
  border-radius: 20px;

  img {
    border-radius: 20px;
    object-fit: cover;
  }
`;

export const CardDetails = styled.div`
  border-radius: 20px;
  background-color: ${colors.primary};
  width: 100%;
  max-width: 276px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${colors.white};
  height: 94px;
  margin-top: -53px;
  position: relative;
  z-index: 10;
  opacity: 0.98;

  ::before {
    position: absolute;
    content: '';
    left: 0;
    background: #7432ff;
    opacity: 0.5;
    height: 30px;
    width: 100%;
    border-radius: 20px;
    -webkit-border-radius: 20px 20px 0 0;
    top: -13px;
  }

  ::after {
    position: absolute;
    content: '';
    left: 0;
    background: #7432ff;
    opacity: 0.5;
    height: 30px;
    width: 100%;
    border-radius: 20px;
    -webkit-border-radius: 0 0 20px 20px;
    bottom: -13px;
  }
`;

export const CardTitle = styled.h3`
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 5px;
`;

export const CardDescription = styled.p`
  font-size: 16px;
  font-weight: 400;
  text-align: center;
`;

export const CounterWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  gap: 10px;

  transition: opacity 0.3s;
  transform: translateZ(0);
`;

export const MotionStrippedCircleImage = styled.div`
  position: absolute;
  top: 15%;
  left: 0%;

  max-width: 119px;
  z-index: 4;

  @media (max-width: 992px) {
    left: -10%;
  }
`;

export const EmptyCircleImage = styled(Image).attrs({
  draggable: false,
  priority: true,
})`
  position: absolute;
  top: 26%;
  left: -10%;

  max-width: 606px;

  @media (max-width: 992px) {
    left: -14%;
  }
`;

export const CrossImage = styled(Image).attrs({
  draggable: false,
  priority: true,
})`
  position: absolute;
  top: 10%;
  right: 10%;

  max-width: 24px;

  @media (max-width: 992px) {
    top: 17%;
    right: 10%;
  }
`;

export const MotionCircleContainer = styled.div`
  position: absolute;
  top: 25%;
  right: 18%;

  img {
    width: 64px;
    height: 64px;
  }

  @media (max-width: 1224px) {
    right: 20%;
  }

  @media (max-width: 992px) {
    right: 10%;
  }

  @media (max-width: 768px) {
    right: 30%;
  }
`;
