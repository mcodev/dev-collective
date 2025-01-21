import styled from 'styled-components';
import { colors, spacing } from '@/styles/theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

export const Wrapper = styled.div<{
  isMenuOpen: boolean;
  isOverlayVisible: boolean;
}>`
  width: 286px;
  background-color: ${colors.secondaryDark};
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  z-index: 12;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  visibility: hidden;
  padding: 30px;
  overflow-y: scroll;
  scrollbar-width: none;

  @keyframes openSideMenu {
    from {
      transform: translateX(300px);
    }
    to {
      transform: translateX(0);
    }
  }

  @keyframes closeSideMenu {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(300px);
    }
  }

  ${({ isMenuOpen }) =>
    isMenuOpen
      ? `animation: openSideMenu 0.3s ease-out; visibility: visible;`
      : `pointer-events : 'none'`}

  ${({ isOverlayVisible }) =>
    !isOverlayVisible && `animation: closeSideMenu 0.2s ease-in;`}
`;

export const CloseIcon = styled(FontAwesomeIcon).attrs({
  color: 'white',
})`
  cursor: pointer;
  margin-bottom: 56px;
  transform: translate(0, 2px);
`;

export const ChevronLeftIcon = styled(FontAwesomeIcon).attrs({
  color: 'white',
})<{ $isExpanded?: boolean }>`
  cursor: pointer;
  width: 30px;
  height: 16px;

  color: ${({ $isExpanded }) => ($isExpanded ? colors.primary : colors.white)};

  transform: ${({ $isExpanded }) =>
    $isExpanded ? 'rotate(-90deg)' : 'rotate(0deg)'};

  transition:
    color 0.2s ease-out 0.4s,
    transform 0.3s ease-in-out;
`;

export const Container = styled.div`
  width: 100%;
  font-size: 15px;
`;

export const RoutesWrapper = styled.div`
  margin-bottom: 36px;
`;

export const RouteWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Route = styled.div`
  height: 47px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid ${colors.darkPurple};
`;

export const RouteLink = styled(Link)<{ $isSubLink?: boolean }>`
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  text-decoration: none;

  padding: ${({ $isSubLink }) => ($isSubLink ? '10px 0 10px 20px' : '0')};
  color: ${colors.white};
  cursor: pointer;

  &:hover {
    color: ${colors.primary};
    transition: color 0.4s ease-in-out;
  }
`;

export const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 26px;
  color: ${colors.white};
  margin-bottom: 36px;
`;

export const ContactIcon = styled(FontAwesomeIcon).attrs({
  color: colors.lightPurple,
  size: '1x',
})`
  margin-right: ${spacing.sm12};
`;

export const ContactInfo = styled(Link)`
  display: flex;
  align-items: flex-start;
  color: ${colors.white};
  cursor: pointer;
  text-decoration: none;
`;

export const AddressInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.xs8};
`;

export const SocialMedia = styled.div`
  display: flex;
  gap: ${spacing.sm16};
`;

export const SocialMediaLink = styled(Link)`
  position: relative;
  width: 38px;
  height: 38px;
  background-color: ${colors.darkPurple};
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  &::before {
    position: absolute;
    content: '';
    background: ${colors.primary};
    width: 100%;
    height: 100%;
    top: 0;
    left: -38px;
    opacity: 1;
    transition: all 0.3s ease-in-out;
  }

  &:hover {
    cursor: pointer;

    &::before {
      left: 0;
    }

    svg {
      color: ${colors.lightPurple};
      transition: color 0.5s ease-in;
    }
  }
`;

export const SocialIcon = styled(FontAwesomeIcon).attrs({
  color: colors.white,
  size: 'sm',
})`
  z-index: 2;
  transition: color 1s ease-in;
`;
