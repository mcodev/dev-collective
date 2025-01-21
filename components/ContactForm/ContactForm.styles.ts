import styled from 'styled-components';
import { colors, spacing } from '@/styles/theme';

export const Wrapper = styled.div`
  margin-top: -304px;
  background: #fff;
  position: absolute;
  margin-left: 18px;
  z-index: 5;
  padding: 67px 62px;
  border-radius: 20px;
  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;
  -ms-border-radius: 20px;
  -o-border-radius: 20px;
  box-shadow: 0 0 100px 0 rgba(29, 35, 58, 0.1);
  z-index: 9;
  width: 100%;
  max-width: 724px;
  margin-right: -570px;
  top: 100%;

  @media (max-width: 1400px) {
    max-width: 613px;
    margin-right: -500px;
  }

  @media (max-width: 1200px) {
    max-width: 613px;
    margin-right: -300px;
  }

  @media (max-width: 992px) {
    margin-right: -120px;
    top: 150%;
  }

  @media (max-width: 767px) {
    margin-right: -20px;
    max-width: 498px;
    padding: 40px 40px;
  }

  @media (max-width: 563px) {
    max-width: calc(100% - 36px);
    margin-right: 0;
    margin-left: 0;
    top: 100%;
  }
`;

export const Title = styled.h4`
  font-size: 24px;
  font-weight: 600;
  color: #1d233a;
  margin-bottom: 40px;

  @media (max-width: 767px) {
    font-size: 20px;
    margin-bottom: 20px;
  }
`;

export const FormWrapper = styled.form`
  input,
  textarea {
    background: #eef3ff;
    color: #4a4f61;
    font-weight: 500;
    border: none;
    webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    -ms-border-radius: 10px;
    -o-border-radius: 10px;
    padding: 16px 24px;
    line-height: 1.5;
    font-size: 1rem;
    border-radius: 10px;
    font-family: inherit;
  }

  input:focus,
  textarea:focus {
    outline: none;
  }

  input::placeholder,
  textarea::placeholder {
    opacity: 0.5;
    font-size: 0.9rem;
  }

  input:nth-child(1) {
    width: calc(50% - 10px);
    margin-right: 10px;
  }

  input:nth-child(2) {
    width: calc(50% - 10px);
    margin-left: 10px;
  }

  input:nth-child(3) {
    width: 100%;
    margin: 40px 0;
  }

  textarea {
    width: 100%;
    height: 244px;
    resize: none;
    margin-bottom: 40px;
  }

  @media (max-width: 563px) {
    input:nth-child(1),
    input:nth-child(2) {
      width: 100%;
      margin-right: 0;
      margin-left: 0;
    }

    input:nth-child(2) {
      margin-top: 20px;
    }

    input:nth-child(3) {
      margin: 20px 0;
    }

    textarea {
      margin-bottom: 20px;
    }
  }
`;

export const MandatoryInput = styled.input<{ isInvalid: boolean }>`
  ${(props) =>
    props.isInvalid &&
    `
    outline: 1px solid red;
  `}
`;

export const MandatoryText = styled.textarea<{ isInvalid: boolean }>`
  ${(props) =>
    props.isInvalid &&
    `
    outline: 1px solid red;
  `}
`;
