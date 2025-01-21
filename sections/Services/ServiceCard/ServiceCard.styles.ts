import styled from 'styled-components';
import { colors, borderRadius, spacing } from '../../../styles/theme';
import Image from 'next/image';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding: 65px 70px;
  background-color: ${colors.darkerPurple};
  border-radius: ${borderRadius.xl};
  line-height: 26px;
  z-index: 2;

  transition: all 0.4s ease-in-out;

  &:hover {
    transform: translate(0, -12px);
    background-color: ${colors.bluePurple};
  }

  @media (max-width: 1400px) {
    padding: 55px 60px;
  }

  @media (max-width: 1200px) {
    height: 498.8px;
    padding: 65px 70px;
  }

  @media (max-width: 992px) {
    padding: 40px 45px;
  }

  @media (max-width: 767px) {
    width: 100%;
    height: 472.8px;
    padding: 65px 70px;
  }

  @media (max-width: 575px) {
    min-height: 422px;
    padding: 40px 45px;
    height: 100%;
  }
`;

export const IconWrapper = styled.div`
  position: relative;
  z-index: 1;
  height: 60px;
  margin-bottom: 40px;
`;

export const ServiceIcon = styled(Image).attrs({
  width: 60,
  height: 60,
  draggable: false,
  priority: true,
})<{ title: string }>`
  margin-left: 10px;
  ${({ title }) => title === 'App Development' && `height : 71.94px`};
`;

export const PinkDot = styled.div`
  position: absolute;
  bottom: -${spacing.sm16};
  left: 0;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${colors.primary};
  z-index: -1;
`;

export const Content = styled.div`
  font-family: 'Poppins', sans-serif;
  display: flex;
  flex-direction: column;
  color: ${colors.white};
  margin-bottom: 40px;
  max-height: 236px;
  min-height: 236px;
  overflow: hidden;

  @media (max-width: 1200px) {
    margin-bottom: 0px;
  }

  @media (max-width: 992px) {
    max-height: 260px;
    min-height: 260px;
  }

  @media (max-width: 767px) {
    max-height: 220px;
    min-height: 220px;
  }

  @media (max-width: 575px) {
    max-height: 260px;
    min-height: 260px;
  }
`;

export const Title = styled.h3`
  font-size: 24px;
  margin-bottom: 32px;
`;

export const Description = styled.p``;

export const ActionButton = styled.button`
  min-width: 188px;
  max-width: 188px;
  min-height: 56px;
  max-height: 56px;
  border-radius: 24px;
  border: none;
  background-color: ${colors.secondaryDark};
  color: ${colors.lightGray};
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: ${colors.darkPurple};
    color: ${colors.mildPurple};

    transition: all 0.5s ease-in-out;
  }
`;
