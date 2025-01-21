import styled from 'styled-components';
import Image from 'next/image';
import next from 'next';

export const Wrapper = styled.div`
  border-radius: 0 0 10px 10px;
  width: 636px;
  height: 740px;
  background-color: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 30px 40px 0 rgba(29, 35, 58, 0.1);

  @media (max-width: 1400px) {
    width: 546px;
    height: 660px;
  }

  @media (max-width: 1200px) {
    width: 456px;
    height: 597px;
  }

  @media (max-width: 992px) {
    width: 696px;
    height: 790px;
  }

  @media (max-width: 767px) {
    width: 516px;
    height: 658px;
  }

  @media (max-width: 575px) {
    width: 100dvw;
    height: fit-content;
  }

  cursor: pointer;
`;

export const PortfolioImageWrapper = styled.div`
  width: 100%;
  height: 75%;
  border-radius: 20px;
  position: relative;
  overflow: hidden;

  & > img {
    &:hover {
      scale: 1.05;
    }
    transition: all 1.5s ease-in-out;
  }

  @media (max-width: 1400px) {
    height: 72%;
  }

  @media (max-width: 1200px) {
    height: 66.5%;
  }

  @media (max-width: 992px) {
    height: 76%;
  }

  @media (max-width: 767px) {
    height: 68.5%;
  }

  @media (max-width: 575px) {
    height: 79dvw;
  }
`;

export const PortfolioDetails = styled.div`
  padding: 40px 56px;
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (max-width: 1200px) {
    padding: 35px 50px;
  }

  @media (max-width: 992px) {
    padding: 40px 56px;
  }

  @media (max-width: 575px) {
    padding: 30px 40px;
  }
`;

export const Title = styled.h3`
  font-size: 28px;

  @media (max-width: 992px) {
    font-size: 26px;
  }

  @media (max-width: 767px) {
    font-size: 24px;
  }
`;

export const Description = styled.p`
  line-height: 26px;
`;
