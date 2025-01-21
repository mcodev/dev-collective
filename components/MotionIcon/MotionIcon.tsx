import React from 'react';
import { StyledImage } from './MotionIcon.styles';
import { MotionIconProps } from './MotionIconTypes';

const MotionIcon = ({ direction, zIndex = 0, iconName }: MotionIconProps) => {
  return (
    <StyledImage
      src={`${iconName}.webp`}
      alt={iconName}
      direction={direction}
      z_index={zIndex}
      image_name={iconName}
    />
  );
};

export default MotionIcon;
