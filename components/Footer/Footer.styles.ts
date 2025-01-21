import styled from 'styled-components';
import { colors, spacing } from '@/styles/theme';
import Image from 'next/image';
import Link from 'next/link';

export const Wrapper = styled.div``;

export const WorkTogetherWrapper = styled.div`
  background-color: ${colors.mildBG};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  ::after {
    content: '';
    position: absolute;
    bottom: -31px;
    left: 0;
    width: 55%;
    height: 31px;
    background-color: #f2dac0;
    border-bottom-right-radius: 32px;
  }

  & > ::after {
    display: none;
  }

  @media (max-width: 575px) {
    ::after {
      width: 70%;
    }
  }
`;

export const WorkTogetherDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 160px 0;
  width: 100%;

  h4 {
    margin-bottom: ${spacing.sm20};
  }

  h2 {
    margin-bottom: ${spacing.mdl};
    text-align: center;
  }

  button {
    margin-top: 15px;
  }
`;

export const WaveImage = styled(Image).attrs({
  draggable: false,
  priority: true,
})`
  position: absolute;
  top: 21%;
  left: 20%;

  max-width: 109px;

  @media (max-width: 875px) {
    display: none;
  }
`;

export const DotsImage = styled(Image).attrs({
  draggable: false,
  priority: true,
})`
  position: absolute;
  top: 70%;
  right: 22%;

  max-width: 49px;

  @media (max-width: 875px) {
    display: none;
  }
`;

export const WorkImageContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: -23%;
  right: 9%;
  max-width: 466px;
  max-height: 430px;
  z-index: 1;

  min-width: 200px;

  @media (max-width: 1700px) {
    max-width: 30%;
    right: 4%;
    top: -30%;
  }

  @media (max-width: 768px) {
    top: -35%;
  }
`;

export const WorkImage = styled(Image).attrs({
  draggable: false,
  priority: true,
})`
  object-fit: contain;
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

export const WorkImageSecondary = styled(Image).attrs({
  draggable: false,
  priority: true,
})`
  object-fit: contain;
`;

export const FooterWrapper = styled.footer`
  background-color: ${colors.darkBg};
  padding: 160px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 2;
  width: 100%;
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
  }
`;

export const MainContent = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 992px) {
    flex-wrap: wrap;
  }
`;

export const Copyright = styled.p`
  margin-top: 50px;
  color: ${colors.white};
  z-index: 2;
  align-self: flex-start;
  padding: 0 ${spacing.sm12};
`;

export const LogoColumn = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 ${spacing.sm12};
  width: 100%;
  min-width: 250px;
  max-width: 416px;

  @media (max-width: 992px) {
    max-width: 100%;
    margin-bottom: 60px;
  }
`;

export const LogoDescription = styled.p`
  color: ${colors.white};
  margin-bottom: 40px;
  margin-top: 20px;
  max-width: 300px;
`;

export const SocialButtonsWrapper = styled.div`
  display: flex;
  gap: 30px;
`;

export const SocialButton = styled(Link)`
  background-color: ${colors.primary};
  color: ${colors.white};
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    svg {
      transition: opacity 0.3s ease-in-out;

      opacity: 0.5;
    }
  }
`;

export const LinksColumn = styled.div`
  padding: 0 ${spacing.sm12};
  display: flex;
  flex-direction: column;
  min-width: 136px;

  @media (max-width: 768px) {
    width: 50%;
  }

  @media (max-width: 425px) {
    width: 100%;
    margin-top: 60px;
  }
`;

export const ContactColumn = styled.div`
  padding: 0 ${spacing.sm12};
  display: flex;
  flex-direction: column;
  color: ${colors.white};
  height: inherit;
  width: 100%;
  max-width: 416px;

  p {
    margin-bottom: 20px;
  }

  a {
    color: ${colors.white};
    margin-bottom: 20px;
    text-decoration: none;
  }

  @media (max-width: 1200px) {
    max-width: 280px;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    margin-top: 60px;
  }
`;

export const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: space-between;
  height: 100%;
`;

export const ColumnTitle = styled.h5`
  font-family:
    Open Sans,
    sans-serif;
  font-size: 18px;
  font-weight: 600;
  color: #7432ff;
  display: inline-block;
  position: relative;
  margin-bottom: 36px;

  &::after {
    content: '';
    position: absolute;
    bottom: -${spacing.xs4};
    left: 0;
    width: 50px;
    height: 1px;
    background: #7432ff;
    color: #fff;
    text-shadow: none;
  }
`;

export const ColumnDiv = styled.div`
  color: ${colors.white};
  cursor: pointer;
  text-decoration: none;
  margin-bottom: 20px;
`;

export const ColumnLink = styled(Link)`
  color: ${colors.white};
  cursor: pointer;
  text-decoration: none;
  margin-bottom: 20px;
`;

export const IconLink = styled(Link)<{ color: 'green' | 'primary' }>`
  svg {
    color: ${({ color }) =>
      color === 'green' ? colors.lightGreen : colors.primary};
    margin-right: 10px;
  }
`;

export const SpiralImage = styled(Image).attrs({
  draggable: false,
  priority: true,
})`
  position: absolute;
  top: 0%;
  right: 12%;
  max-width: 100%;
`;

export const BottomImage = styled(Image).attrs({
  draggable: false,
  priority: true,
})`
  position: absolute;
  bottom: 0%;
  right: 8%;
  /* width: auto;
  height: auto; */
  /* max-width: 100%; */

  @media (max-width: 768px) {
    right: 0;
    max-height: 250px;
  }

  @media (max-width: 425px) {
    right: 0;
    max-height: 150px;
  }
`;
