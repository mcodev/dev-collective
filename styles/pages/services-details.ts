import styled from 'styled-components';
import { colors, spacing, borderRadius } from '@/styles/theme';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Wrapper = styled.div`
  position: relative;
  padding: 120px 0 230px 0;
  width: 100%;
  display: flex;
  margin: 0 auto;
`;

export const Container = styled.div`
  max-width: 1320px;
  width: 100%;
  display: flex;
  margin: 0 auto;

  @media (max-width: 992px) {
    flex-direction: column-reverse;
    align-items: center;
  }

  @media (max-width: 575px) {
    padding: 0 ${spacing.sm12};
  }
`;

export const LeftSideBar = styled.div`
  max-width: 440px;
  width: 100%;
  padding: 0 ${spacing.sm12};

  @media (max-width: 992px) {
    max-width: 696px;
    align-items: center;
    padding: 0;
  }

  @media (max-width: 767px) {
    max-width: 540px;
  }
`;

export const RightSideBar = styled.div`
  position: relative;
  max-width: 880px;
  min-width: 660px;
  width: 100%;
  padding: 0 ${spacing.sm18} 0 ${spacing.sm12};
  z-index: 2;
  line-height: 26px;

  @media (max-width: 1400px) {
    max-width: 760px;
  }

  @media (max-width: 1200px) {
    max-width: 646px;
  }

  @media (max-width: 992px) {
    max-width: 696px;
    min-width: auto;
    padding: 0;
  }

  @media (max-width: 767px) {
    max-width: 540px;
  }

  @media (max-width: 575px) {
  }
`;

export const AnchorScrollTop = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  background-color: red;
`;

export const ServicesNavigationCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${spacing.lg} ${spacing.lg40};
  margin-right: 30px;
  box-shadow: 0 0 50px 0 rgba(29, 35, 58, 0.1);
  border-radius: ${borderRadius.md};
  line-height: 26px;

  @media (max-width: 992px) {
    margin-right: 0;
  }
`;

export const CardTitle = styled.span`
  color: ${colors.primary};
  font-size: 22px;
  font-weight: 600;
  width: fit-content;
  margin-bottom: ${spacing.mdl};

  &::after {
    content: '';
    display: block;
    height: 1px;
    background-color: ${colors.primary};
    margin-top: ${spacing.xs6};
  }
`;

export const ServicesList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 35px;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${colors.darkGray};
  font-weight: 600;
  font-size: 17px;
  cursor: pointer;
  position: relative;
`;

export const ListItemTitle = styled.span<{
  $isHovered: boolean;
  $isSelected: boolean;
}>`
  ${({ $isSelected }) => $isSelected && `color: ${colors.primary};`}
  ${({ $isHovered }) => $isHovered && `color: ${colors.primary};`}
  transition: all 0.3s ease-in-out;
`;

export const AngleRightIcon = styled(FontAwesomeIcon)<{
  $isHovered: boolean;
}>`
  position: absolute;
  width: 14px;
  height: 16px;
  opacity: 1;
  right: -3px;
  color: #4a4f61;

  ${({ $isHovered }) =>
    $isHovered &&
    `
  transform: translate3d(8px, 0px, 0px);
  opacity: 0;
  color: ${colors.primary};
  `}
  transition: all 0.3s ease-in-out;
`;

export const ArrowRightIcon = styled(FontAwesomeIcon)<{
  $isHovered: boolean;
}>`
  position: absolute;
  width: 14px;
  height: 16px;
  opacity: 0;
  right: 2px;
  color: #4a4f61;
  transform: translate3d(-20px, 0px, 0px);

  ${({ $isHovered }) =>
    $isHovered &&
    `
  transform: translate3d(2px, 0px, 0px);
  opacity: 1;
  color: ${colors.primary};
  `}
  transition: all 0.3s ease-in-out;
`;

export const ServiceImageWrapper = styled.div`
  position: relative;
  height: 563px;
  width: 100%;
  border-radius: ${borderRadius.xl};
  margin-bottom: 60px;

  @media (max-width: 992px) {
    height: 500px;
  }

  @media (max-width: 767px) {
    height: 400px;
  }

  @media (max-width: 575px) {
    height: 350px;
  }
`;

export const ServiceImage = styled(Image)`
  border-radius: ${borderRadius.xl};
`;

export const DottedCircleLightBrownWrapper = styled.div`
  position: absolute;
  top: 324px;
  right: 0;
  max-width: 281px;
  width: 100%;
  height: 563px;

  transition: top 0.4s ease-in-out;

  @media (max-width: 1200px) {
    top: 200px;
  }

  @media (max-width: 992px) {
    top: 120px;
  }

  @media (max-width: 767px) {
    top: 80px;
  }

  @media (max-width: 575px) {
    top: 30px;
    height: 524px;
  }
`;

export const DottedCircleLightBrownImage = styled(Image)``;

export const YellowCircleImage = styled(Image)`
  position: absolute;
  top: 86px;
  left: 34.5%;
  z-index: 2;
  mix-blend-mode: multiply;
  transition: all 0.4s ease-in-out;

  @media (max-width: 992px) {
    left: 5%;
    top: 60px;
  }
`;

export const ServiceTitle = styled.h2`
  margin-bottom: 50px;
  font-size: 45px;
  color: ${colors.secondaryDark};
  font-weight: 600;

  transition: all 0.3s ease-in-out;

  @media (max-width: 1200px) {
    font-size: 38px;
  }

  @media (max-width: 575px) {
    font-size: 30px;
    margin-bottom: 30px;
  }
`;

export const FirstDescription = styled.p`
  padding-right: 65px;
  margin-bottom: 24px;

  @media (max-width: 992px) {
    padding-right: 30px;
  }

  @media (max-width: 767px) {
    padding-right: 0;
  }
`;

export const SecondDescription = styled.p`
  padding-right: 65px;
  margin-bottom: 72px;

  @media (max-width: 992px) {
    padding-right: 30px;
  }

  @media (max-width: 767px) {
    padding-right: 0;
  }
`;

export const KeyTitle = styled.h3`
  font-size: 28px;
  margin-bottom: 48px;

  @media (max-width: 575px) {
    font-size: 23px;
  }
`;

export const KeyFactorWrapper = styled.div`
  display: flex;
`;

export const KeyFactors = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 36px 8px;
  margin-bottom: 69px;
`;

export const KeyFactor = styled.div`
  width: 100%;
  display: flex;
  gap: 15px;

  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

export const KeyFactorIconWrapper = styled.div`
  height: 100%;
  margin-right: 30px;
`;

export const LightPurpleCircle = styled.div`
  position: relative;
  min-width: 31px;
  width: 31px;
  height: 31px;
  border-radius: 50%;
  background-color: #e3dcff;
  margin-top: 12px;
`;

export const KeyFactorIcon = styled(FontAwesomeIcon)`
  position: absolute;
  top: -16px;
  right: -14px;
  max-width: 30px;
  max-height: 30px;
  color: ${colors.primary};
`;

export const LockIcon = styled(KeyFactorIcon)`
  right: -10px;
  top: -14px;
`;

export const FileLinesIcon = styled(KeyFactorIcon)`
  right: -6px;
  top: -14px;
`;

export const KeyFactorContent = styled.div`
  transform: translate(0, -6px);
`;

export const KeyFactorTitle = styled.h5`
  font-size: 18px;
  margin-bottom: 15px;
`;

export const KeyFactorDescription = styled.p`
  width: 80%;
  line-height: 26px;
`;

export const KeyBenefitsList = styled.ul`
  margin-bottom: 32px;
  margin-top: -6px;
`;

export const KeyBenefit = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;
  padding-bottom: 15px;
`;

export const KeyBenefitDescription = styled.p`
  height: 100%;
`;

export const ConclusionParagraph = styled.p`
  margin-bottom: ${spacing.lg40};

  @media (max-width: 992px) {
    margin-bottom: 74px;
  }
`;
