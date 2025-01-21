import styled from 'styled-components';
import Image from 'next/image';
import { colors } from '../../styles/theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

export const Wrapper = styled.div`
  position: relative;
  padding: 120px 0 230px 0;
  width: 100%;
  display: flex;
  margin: 0 auto;
`;

export const Container = styled.div`
  max-width: 1320px;
  padding: 0 12px;
  width: 100%;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;

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
    flex-direction: column;
  }
`;

export const TeamMemberImageWrapper = styled.div`
  position: relative;
  width: 519px;
  height: 633px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  transition: all 0.3s ease-in-out;

  @media (max-width: 1400px) {
    width: 451px;
    height: 600px;
  }

  @media (max-width: 1200px) {
    width: 376px;
    height: 500px;
  }

  @media (max-width: 992px) {
    width: 276px;
    height: 350px;
  }

  @media (max-width: 767px) {
    width: 516px;
    height: 633px;
    margin-bottom: 200px;
  }

  @media (max-width: 575px) {
    max-width: 516px;
    width: 100%;
    height: 600px;
  }

  @media (max-width: 500px) {
    height: 500px;
  }

  @media (max-width: 450px) {
    height: 400px;
  }
`;

export const TeaMemberImage = styled(Image)`
  position: absolute;
  border-radius: 20px;
`;

export const TeamMemberDetails = styled.div`
  max-width: 660px;
  width: 100%;

  @media (max-width: 1400px) {
    max-width: 546px;
  }

  @media (max-width: 1200px) {
  }

  @media (max-width: 992px) {
    max-width: 366px;
  }

  @media (max-width: 767px) {
    max-width: 516px;
  }
`;

export const Title = styled.h2`
  font-size: 45px;
  font-weight: 600;
  margin-bottom: 30px;

  @media (max-width: 1200px) {
    font-size: 40px;
  }

  @media (max-width: 992px) {
    font-size: 35px;
  }
`;

export const FirstDescription = styled.p`
  max-width: 90%;
  margin-bottom: 25px;
  line-height: 26px;
  color: ${colors.darkGray};
`;

export const SecondDescription = styled.p`
  max-width: 90%;
  line-height: 26px;
  margin-bottom: 64px;
  color: ${colors.darkGray};
`;

export const ShowCaseSkillsWrapper = styled.div`
  display: flex;

  @media (max-width: 575px) {
    gap: 16px;
  }
`;

export const ShowCaseSkillWrapper = styled.div<{
  isFirst?: boolean;
  isLast?: boolean;
}>`
  max-width: 200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-left: ${({ isFirst }) => (isFirst ? '0' : '40px')};
  padding-right: ${({ isLast }) => (isLast ? '0' : '40px')};
  border-right: ${({ isLast }) =>
    isLast ? 'none' : `1px solid ${colors.black}`};

  @media (max-width: 992px) {
    padding-left: ${({ isFirst }) => (isFirst ? '0' : '32px')};
    padding-right: ${({ isLast }) => (isLast ? '0' : '32px')};
  }

  @media (max-width: 575px) {
    padding: 0;
    border: none;
  }
`;

export const AchievedNumber = styled.span`
  font-size: 45px;
  font-weight: 600;
  margin-bottom: 10px;

  @media (max-width: 1400px) {
    font-size: 40px;
  }

  @media (max-width: 1200px) {
    font-size: 35px;
  }
`;

export const ShowCaseSkillTitle = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${colors.primary};
`;

export const ShowCaseCard = styled.div`
  position: absolute;
  border-radius: 20px;
  background-color: ${colors.primary};
  max-width: 80%;
  width: 100%;
  height: 108px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 600;
  color: ${colors.white};
  z-index: 10;
  opacity: 0.8;
  bottom: -33px;

  @media (max-width: 1400px) {
    max-width: 90%;
  }

  @media (max-width: 767px) {
    max-width: 80%;
  }
`;

export const PositionTitle = styled.span`
  position: absolute;
  bottom: -10px;
  left: 24%;
  font-size: 18px;
  font-weight: 600;
  color: ${colors.white};
  z-index: 30;

  @media (max-width: 1200px) {
    font-size: 16px;
  }
`;

export const SocialsCard = styled.div`
  position: absolute;
  bottom: -110px;
  height: 147px;
  width: 65%;
  background-color: ${colors.primary};
  border-radius: 20px;
  display: flex;
  padding: 86px 48px 0px 32px;
  justify-content: space-between;
  color: ${colors.white};
  z-index: 20;
  font-size: 18px;
  font-weight: 600;
  opacity: 0.8;

  @media (max-width: 1400px) {
    width: 75%;
  }

  @media (max-width: 1200px) {
    font-size: 16px;
  }

  @media (max-width: 992px) {
    padding: 86px 16px 0px 16px;
  }

  @media (max-width: 767px) {
    max-width: 65%;
    padding: 86px 48px 0px 32px;
  }
`;

export const SocialMediaLink = styled(Link)`
  position: relative;
  width: 38px;
  height: 38px;
  background-color: transparent;
  border: 1px solid white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  @media (max-width: 992px) {
    width: 32px;
    height: 32px;
  }

  @media (max-width: 767px) {
    width: 38px;
    height: 38px;
  }
`;

export const SocialIcon = styled(FontAwesomeIcon).attrs({
  color: colors.white,
  size: 'sm',
})`
  z-index: 2;
  transition: color 1s ease-in;
  border-radius: 50%;
`;
