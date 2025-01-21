import Image from 'next/image';
import styled from 'styled-components';
import { DirectionType } from './MotionIconTypes';

const DIMENSIONS_CHART = {
  purpleCircle: {
    width: 47.55,
    height: 47.55,
  },
  blackDots: {
    width: 49,
    height: 84.54,
  },
  greenCircle: {
    width: 47.55,
    height: 47.55,
  },
  greenDots: {
    width: 85,
    height: 28.84,
  },
  purpleDots: {
    width: 29,
    height: 85.45,
  },
  spiralFull: {
    width: 196,
    height: 196,
  },
  spiralFullPurple: {
    width: 119,
    height: 119,
  },
  spiralHalf: {
    width: 161,
    height: 320,
  },
  wave: {
    width: 109,
    height: 50.34,
  },
  whiteDots: {
    width: 84,
    height: 28.5,
  },
  strippedCircle: {
    width: 104,
    height: 104,
  },
  pinkHorizontalDots: {
    width: 29,
    height: 124,
  },
  purpleDots2RowsUneven: {
    width: 29,
    height: 124,
  },
  strippedCircleBlack: {
    width: 104,
    height: 104,
  },
};

export const StyledImage = styled(Image).attrs<{
  image_name: keyof typeof DIMENSIONS_CHART;
}>(({ image_name }) => ({
  width: DIMENSIONS_CHART[image_name]?.width || 0,
  height: DIMENSIONS_CHART[image_name]?.height || 0,
  draggable: false,
  priority: true,
}))<{
  direction: DirectionType;
  z_index: number;
}>`
  position: absolute;

  z-index: ${({ z_index }) => z_index};

  ${({ direction }) =>
    direction === 'vertical'
      ? `
       animation: moveUpDown 3s linear infinite;

        @keyframes moveUpDown {
            0% {
            transform: translateY(0);
            }
            50% {
            transform: translateY(+30px);
            }
            100% {
            transform: translateY(0);
            }
        }
    `
      : `
        animation: moveLeftRight 3s linear infinite;

        @keyframes moveLeftRight {
            0% {
            transform: translateX(0);
            }
            50% {
            transform: translateX(+30px);
            }
            100% {
            transform: translateX(0);
            }
        }
    `}
`;
