type IconNamesType =
  | 'purpleCircle'
  | 'blackDots'
  | 'greenCircle'
  | 'greenDots'
  | 'purpleDots'
  | 'spiralFull'
  | 'spiralFullPurple'
  | 'pinkHorizontalDots'
  | 'spiralHalf'
  | 'wave'
  | 'whiteDots'
  | 'strippedCircle'
  | 'purpleDots2RowsUneven'
  | 'strippedCircleBlack';

export type DirectionType = 'horizontal' | 'vertical';

export type MotionIconProps = {
  iconName: IconNamesType;
  direction: DirectionType;
  zIndex?: number;
};
