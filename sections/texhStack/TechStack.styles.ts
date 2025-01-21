import styled from 'styled-components';
import { colors, spacing } from '@/styles/theme';
import Image from 'next/image';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.mildBG};
  padding: 120px 0;

  @media (max-width: 715px) {
    padding-top: 60px;
    padding-bottom: 60px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  z-index: 1;
  gap: 120px;
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
  max-width: 600px;

  h1 {
    margin-bottom: 20px;
  }

  h2 {
    margin-bottom: 28px;
  }
`;

export const ContentWrapper = styled.div``;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  //   touch-action: pan-y;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 48px 54px;
  background-color: ${colors.white};
  border-radius: 20px;
  box-shadow: 0 0 50px 0 rgba(29, 35, 58, 0.07);
  z-index: 2;
  width: 100%;
  min-width: 260px;

  @media (max-width: 1400px) {
    padding: 32px 38px;
  }

  @media (max-width: 1400px) {
    padding: 32px 38px;
  }
`;

export const CardTitle = styled.h3`
  font-size: 24px;
  font-weight: 500;
  margin-top: 30px;
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

export const Counter = styled.span<{ active?: boolean }>`
  background-color: ${({ active }) =>
    active ? colors.primary : colors.mildPink};
  width: ${({ active }) => (active ? '30px' : '10px')};
  height: 10px;
  border-radius: 5px;
  -webkit-transition: all 0.3s ease-in-out;

  cursor: pointer;
`;

export const StrippedCircleImage = styled(Image).attrs({
  draggable: false,
  priority: true,
})`
  position: absolute;
  top: 20%;
  left: 10%;

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
  left: -4%;

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
  right: 4%;

  max-width: 24px;
`;

export const MotionCircleContainer = styled.div`
  position: absolute;
  top: 25%;
  right: 24%;

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
