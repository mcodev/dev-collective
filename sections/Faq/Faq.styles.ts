import styled from 'styled-components';
import { colors, spacing } from '../../styles/theme';
import Image from 'next/image';

export const Wrapper = styled.div`
  width: 100%;
  padding: 105px 0 60px 0;
  background-color: ${colors.white};
  position: relative;

  @media (max-width: 575px) {
    padding: 64px 0;
  }
`;

export const Container = styled.div`
  position: relative;
  max-width: 1320px;
  width: 100%;
  margin: 0 auto;
  padding: 120px ${spacing.sm12};
  display: flex;

  @media (max-width: 1400px) {
    max-width: 1140px;
  }

  @media (max-width: 1200px) {
    max-width: 960px;
  }

  @media (max-width: 992px) {
    max-width: 720px;
    flex-direction: column;
  }

  @media (max-width: 767px) {
    max-width: 540px;
  }

  @media (max-width: 575px) {
    max-width: 528px;
    padding: 24px 12px;
  }
`;

export const PurpleCircle = styled(Image)`
  position: absolute;
  left: 41%;
  bottom: 260px;
  z-index: 2;
  mix-blend-mode: multiply;

  @media (max-width: 1200px) {
    left: 330px;
    bottom: 340px;
  }

  @media (max-width: 992px) {
    display: none;
  }
`;

export const LightPinkCircle = styled(Image)`
  position: absolute;
  right: -8px;
  top: 86px;
  z-index: 3;
  mix-blend-mode: multiply;

  @media (max-width: 767px) {
    top: 60px;
    right: 24px;
  }

  @media (max-width: 575px) {
    top: -40px;
  }
`;

export const EmptyBlackCircle = styled(Image)`
  position: absolute;
  left: -30px;
  bottom: -120px;
  z-index: -1;

  @media (max-width: 1200px) {
    left: -30px;
    bottom: -100px;
  }

  @media (max-width: 992px) {
    display: none;
  }
`;

export const PeopleImageWrapper = styled.div`
  position: absolute;
  top: 360px;
  left: -12px;
  max-width: 564px;
  width: 100%;
  height: 366px;
  margin-left: 24px;
  border-radius: 20px;
  border-top-left-radius: 150px;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: -24px;
    left: -24px;
    width: 94.8%;
    height: 326px;
    background-color: rgb(197, 246, 23);
    mix-blend-mode: multiply;
    border-radius: 40px;
    border-top-left-radius: 170px;
    z-index: 1;

    @media (max-width: 1200px) {
      height: 272px;
    }
  }

  @media (max-width: 1400px) {
    max-width: 514px;
    height: 366px;
  }

  @media (max-width: 1200px) {
    max-width: 360px;
    height: 300px;
  }

  @media (max-width: 992px) {
    position: relative;
    max-width: 100%;
    display: block;
    top: auto;
    left: auto;
    margin-bottom: 64px;
  }

  @media (max-width: 767px) {
    margin-left: 0;
  }
`;

export const PeopleImage = styled(Image).attrs({
  draggable: false,
})`
  border-radius: 20px;
  border-top-left-radius: 150px;
  object-fit: cover;
`;

export const FaqCard = styled.div`
  position: relative;
  max-width: 908px;
  width: 100%;
  background-color: ${colors.white};
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);
  margin-left: auto;
  border-radius: 32px;
  padding: 86px 82px 86px 272px;

  @media (max-width: 1400px) {
    max-width: 780px;
    padding-left: 238px;
    padding-right: 70px;
  }

  @media (max-width: 1200px) {
    max-width: 720px;
    padding-left: 186px;
  }

  @media (max-width: 992px) {
    padding-left: 82px;
  }

  @media (max-width: 767px) {
    padding: 32px 16px 16px 16px;
  }

  @media (max-width: 575px) {
    padding: 0;
    box-shadow: none;
    border-radius: 0;
  }
`;

export const MotionDotsContainer = styled.div`
  position: absolute;
  top: 64px;
  left: 120px;

  @media (max-width: 992px) {
    left: 90%;
  }

  @media (max-width: 767px) {
    left: 85%;
    top: 24px;
  }

  @media (max-width: 575px) {
    display: none;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DescriptiveTitle = styled.h3`
  font-size: 20px;
  color: ${colors.primary};
  margin-bottom: 20px;
  text-transform: uppercase;

  @media (max-width: 575px) {
    font-size: 18px;
  }
`;

export const FaqTitle = styled.h4`
  font-size: 50px;

  @media (max-width: 767px) {
    font-size: 38px;
  }

  @media (max-width: 575px) {
    font-size: 35px;
  }
`;

export const FaqSubTitle = styled.h4`
  font-size: 50px;
  font-weight: 600;
  margin-bottom: 44px;

  @media (max-width: 767px) {
    font-size: 38px;
  }

  @media (max-width: 575px) {
    font-size: 35px;
  }
`;

export const FaqQuestionsWrapper = styled.div`
  padding: 26px 40px 6px 40px;
  background-color: ${colors.primary};
  border-radius: 20px;
`;

export const QuestionRow = styled.div<{
  isLastElement: boolean;
}>`
  display: flex;
  flex-direction: column;
  color: ${colors.white};
  border-bottom: ${(props) =>
    props.isLastElement ? 'none' : `1px solid ${colors.lightPurple}`};

  margin-bottom: ${(props) => (props.isLastElement ? '0px' : '28px')};
  padding-bottom: 6px;
`;

export const QuestionHeadLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  margin-bottom: 24px;
  cursor: pointer;

  @media (max-width: 575px) {
    font-size: 16px;
  }
`;

export const QuestionHeadLineTitle = styled.h4`
  max-width: 90%;
  font-weight: 500;

  @media (max-width: 575px) {
    max-width: 90%;
  }
`;

export const ExpansionIcon = styled.span`
  font-size: 32px;
`;

export const AccordionCollapse = styled.div<{
  isExpanded: boolean;
  contentHeight: number;
}>`
  height: ${(props) => (props.isExpanded ? `${props.contentHeight}px` : '0px')};
  overflow: hidden;
  transition: height 0.3s ease-in-out;
  transform: translateY(-12px);
`;

export const QuestionContent = styled.p`
  font-size: 16px;
  line-height: 24px;
  padding-bottom: 16px;
`;
