import styled from 'styled-components';

import { colors } from '@/styles/theme';
import Link from 'next/link';

export const Wrapper = styled.div``;

export const AddressSection = styled.div`
  display: flex;
  position: relative;
  padding: 120px 24px 0px 24px;
  justify-content: center;
`;

export const Container = styled.div`
  display: flex;
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
    flex-direction: column;
  }
`;

export const ContactWrapper = styled.div`
  position: relative;
  padding: 105px 90px 60px 125px;
  margin-right: 85px;
  max-width: 560px;
  min-height: 560px;

  flex: 0 0 auto;
  width: 50%;
  display: flex;
  flex-direction: column;
  color: #fff;

  gap: 40px;

  &::after {
    position: absolute;
    content: '';
    left: 0;
    top: 0;
    background: #1d233a;
    opacity: 0.9;
    width: 100%;
    height: 100%;
    border-radius: 113px 191px 276px 166px;
    -webkit-border-radius: 113px 191px 276px 166px;
    z-index: -1;
  }

  &::before {
    position: absolute;
    content: '';
    left: 40px;
    z-index: -2;
    top: 40px;
    background: ${colors.primary};
    opacity: 0.9;
    width: 100%;
    height: 100%;
    border-radius: 100px 100px 288px 164px;
    -webkit-border-radius: 100px 100px 288px 164px;
  }

  @media (max-width: 993px) {
    padding: 90px 45px 30px 90px;
    margin-right: 60px;
  }

  @media (max-width: 767px) {
    width: 100%;
    margin-right: 0;
    margin-left: -20px;
  }
`;

export const ContactDetails = styled.div`
  display: flex;
  color: white;
`;

export const TitleWrapper = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;

  h2 {
    font-size: 50px;
    position: relative;
    padding-bottom: 100px;
  }

  svg {
    width: 31.25px;
    height: 50px;
    color: rgb(65, 70, 86);
    position: absolute;
    left: 0;
    bottom: 0;
  }

  @media (max-width: 1024px) {
    h2 {
      font-size: 45px;
    }
  }

  @media (max-width: 993px) {
    h2 {
      font-size: 38px;
    }
  }

  @media (max-width: 767px) {
    margin-top: 100px;
    width: 100%;

    svg {
      left: 47%;
    }
  }

  @media (max-width: 425px) {
    h2 {
      font-size: 35px;
    }
  }
`;

export const Row = styled.div`
  display: flex;
  max-width: 380px;
`;

export const IconWrapper = styled.div<{ iconColor: keyof typeof colors }>`
  padding-top: 4px;

  svg {
    color: ${(props) => colors[props.iconColor]};
  }
`;

export const DetailsWrapper = styled.div`
  margin-left: 15px;
`;

export const Title = styled.h5`
  position: relative;
  font-size: 20px;
  font-weight: 400;
  display: inline-block;
  margin-bottom: 20px;

  &::after {
    position: absolute;
    content: '';
    left: 0;
    bottom: -5px;
    background: ${colors.primary};
    width: 100%;
    height: 1px;
  }
`;

export const Details = styled(Link)`
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  color: #fff;
  text-decoration: none;
`;
