import styled from 'styled-components';
import { colors, spacing } from '../../styles/theme';

export const Wrapper = styled.section`
  position: relative;
  width: 100%;
  padding-top: 115px;
  padding-bottom: 230px;

  @media (max-width: 575px) {
    padding: 0 ${spacing.sm12};
  }
`;

export const Container = styled.div`
  max-width: 1320px;
  width: 100%;
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

  @media (max-width: 575px) {
    max-width: 536px;
    margin: 0;
  }
`;

export const PageTitle = styled.h1`
  text-align: center;
  margin-bottom: 32px;
`;

export const ShowCaseTitle = styled.h2`
  text-align: center;
  margin-bottom: 64px;
`;

export const PortfolioCardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
`;
