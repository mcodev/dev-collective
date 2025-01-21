import styled from 'styled-components';
import { ButtonVariantType, ButtonSizeType } from './Button';
import { colors, borderRadius } from '../../styles/theme';

const sizes = {
  xs: {
    width: '96px',
    height: '34px',
    fontSize: '14px',
  },
  sm: {
    width: '112px',
    height: '42px',
    fontSize: '14px',
  },
  smd: {
    width: '152px',
    height: '56px',
    fontSize: '16px',
  },
  md: {
    width: '158px',
    height: '56px',
    fontSize: '16px',
  },
  lg: {
    width: '172px',
    height: '56px',
    fontSize: '16px',
  },
  xl: {
    width: '186px',
    height: '56px',
    fontSize: '16px',
  },
};

const variants: {
  [key in ButtonVariantType]: {
    backgroundColor: string;
    color: string;
    borderRadius: string;
  };
} = {
  primary: {
    backgroundColor: colors.primary,
    color: colors.white,
    borderRadius: borderRadius.smd,
  },
  secondary: {
    backgroundColor: colors.secondaryDark,
    color: colors.white,
    borderRadius: borderRadius.smd,
  },
  primaryRounded: {
    backgroundColor: colors.primary,
    color: colors.white,
    borderRadius: borderRadius['3xl'],
  },
  secondaryRounded: {
    backgroundColor: 'blue',
    color: colors.white,
    borderRadius: borderRadius['3xl'],
  },
};

export const Wrapper = styled.button<{
  size: ButtonSizeType;
  variant: ButtonVariantType;
  hasColorTransition?: boolean;
  hasButtonMounted?: boolean;
}>`
  position: relative;
  min-width: ${({ size }) => sizes[size].width};
  max-width: ${({ size }) => sizes[size].width};
  min-height: ${({ size }) => sizes[size].height};
  max-height: ${({ size }) => sizes[size].height};
  font-size: ${({ size }) => sizes[size].fontSize};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: ${({ variant }) => variants[variant].color};
  border-radius: ${({ variant }) => variants[variant].borderRadius};
  background-color: ${({ variant }) => variants[variant].backgroundColor};
  overflow: hidden;
  border: none;

  border: none;

  ${({ hasButtonMounted }) =>
    hasButtonMounted && `transition: all 0.4s ease-in;`}

  &::before {
    position: absolute;
    content: '';
    color: red;
    background: hsla(0, 0%, 100%, 0.502);
    width: 50px;
    height: 155px;
    left: -75px;
    top: -50px;
    opacity: 0.2;
    z-index: 10;
    transform: rotate(35deg);
    transition: all 1s cubic-bezier(0.19, 1, 0.22, 1);
  }

  &:hover {
    cursor: pointer;

    ${({ variant, hasColorTransition }) =>
      (variant === 'primary' || variant === 'primaryRounded') &&
      hasColorTransition
        ? `background-color: ${colors.secondaryDark};
       color : ${colors.lightGreen};
      `
        : `color : ${colors.mildPink};`}

    &::before {
      left: 120%;
    }
  }
`;

export const Loader = styled.div`
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-top: 4px solid rgba(255, 255, 255, 0.7);
  border-radius: 50%;
  width: 24px;
  height: 24px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
