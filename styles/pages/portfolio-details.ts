import styled from 'styled-components';
import Image from 'next/image';
import { colors } from '../../styles/theme';
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
  flex-direction: column;
  margin: 0 auto;

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

export const ImagesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 72px;
`;

export const PrimaryImageWrapper = styled.div`
  position: relative;
  width: 856px;
  height: 679px;
  border-radius: 16px;
  overflow: hidden;

  @media (max-width: 1400px) {
    width: 736px;
    height: 679px;
  }

  @media (max-width: 1200px) {
    width: 616px;
    height: 600px;
  }

  @media (max-width: 992px) {
    width: 456px;
    height: 485px;
  }

  @media (max-width: 767px) {
    width: 516px;
    height: 400px;
  }
`;

export const PrimaryImage = styled(Image)`
  position: absolute;
  object-fit: cover;
`;

export const SecondaryImagesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 767px) {
    display: none;
  }
`;

export const SecondImageWrapper = styled.div`
  position: relative;
  width: 416px;
  height: 323px;
  border-radius: 16px;
  overflow: hidden;

  @media (max-width: 1400px) {
    width: 356px;
    height: 323px;
  }

  @media (max-width: 1200px) {
    width: 296px;
    height: 284px;
  }

  @media (max-width: 992px) {
    width: 216px;
    height: 226px;
  }

  /* @media (max-width: 767px) {
    display: none;
  } */
`;

export const SecondImage = styled(Image)`
  position: absolute;
  object-fit: cover;
`;

export const ThirdImageWrapper = styled.div`
  position: relative;
  width: 416px;
  height: 323px;
  border-radius: 16px;
  overflow: hidden;

  @media (max-width: 1400px) {
    width: 356px;
    height: 323px;
  }

  @media (max-width: 1200px) {
    width: 296px;
    height: 284px;
  }

  @media (max-width: 992px) {
    width: 216px;
    height: 226px;
  }

  /* @media (max-width: 767px) {
    display: none;
  } */
`;

export const ThirdImage = styled(Image)`
  position: absolute;
  object-fit: cover;
`;

export const ProjectInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

export const ProjectInfoCard = styled.div`
  max-width: 416px;
  width: 100%;
  padding: 45px 47px 20px;
  height: fit-content;
  border-radius: 16px;
  background-color: #e6edff;
  transition: all 0.3s ease-in-out;

  @media (max-width: 1400px) {
    max-width: 356px;
  }

  @media (max-width: 1200px) {
    max-width: 346px;
    padding: 40px 42px 15px;
  }

  @media (max-width: 992px) {
    max-width: 276px;
    padding: 30px 30px 5px;
  }

  @media (max-width: 767px) {
    max-width: 100%;
    padding: 45px 47px 20px;
    margin-bottom: 40px;
  }
`;

export const ProjectDetailsWrapper = styled.div`
  max-width: 746px;
  width: 100%;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease-in-out;

  @media (max-width: 1400px) {
    max-width: 641px;
  }

  @media (max-width: 1200px) {
    max-width: 536px;
  }

  @media (max-width: 992px) {
    max-width: 396px;
  }

  @media (max-width: 767px) {
    max-width: 100%;
  }
`;

export const ProjectInfoCardHeader = styled.div`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 48px;

  @media (max-width: 992px) {
    font-size: 21px;
  }
`;

export const ProjectTopicWrapper = styled.div`
  margin-bottom: 30px;
`;

export const ShowCaseTitle = styled.h4`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 8px;

  @media (max-width: 992px) {
    font-size: 17px;
  }
`;

export const ShowCaseDescription = styled.p``;

export const ShowCaseLink = styled(Link)`
  text-decoration: none;
  color: ${colors.primary};
`;

export const PrimaryShowCaseTitle = styled.h2`
  font-size: 45px;
  font-weight: 700;
  margin-bottom: 20px;
  transition: all 0.3s ease-in-out;

  @media (max-width: 1200px) {
    font-size: 40px;
  }

  @media (max-width: 992px) {
    font-size: 35px;
  }
`;

export const PrimaryShowCaseDescription = styled.p`
  max-width: 90%;
  line-height: 26px;
  margin-bottom: 12px;

  @media (max-width: 992px) {
    max-width: 100%;
  }
`;

export const SecondaryShowCaseDescription = styled.p`
  max-width: 90%;
  line-height: 26px;
  margin-bottom: 40px;

  @media (max-width: 992px) {
    max-width: 100%;
  }
`;

export const ProjectKeypointsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const KeyPoint = styled.div`
  display: flex;
`;

export const KeyPointImageWrapper = styled.div<{
  backgroundColor?: 'blue' | 'red' | 'green' | 'purple';
}>`
  min-width: 86px;
  max-width: 86px;
  height: 86px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 24px;
  overflow: hidden;
  margin-right: 24px;
  background-color: ${({ backgroundColor }) => {
    if (backgroundColor === 'blue') return colors.bluePurple;
    if (backgroundColor === 'red') return 'red';
    if (backgroundColor === 'green') return colors.lightGreen;
    if (backgroundColor === 'purple') return colors.primary;
    return '#e6edff';
  }};
`;

export const KeyPointImage = styled(Image)`
  border-radius: 24px;
`;

export const KeyPointDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  line-height: 26px;
`;

export const KeyPointTitle = styled.h4`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 8px;

  @media (max-width: 992px) {
    font-size: 20px;
  }
`;

export const KeyPointDescription = styled.p`
  margin-bottom: 40px;
`;

export const EndingParagraph = styled.p`
  line-height: 26px;
`;
