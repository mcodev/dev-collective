import styled from 'styled-components';
import { colors } from '@/styles/theme';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const getLinkColor = (
  isLanding: boolean,
  isPageScrolled: boolean,
  isDedicatedTeamPage: boolean
) => {
  if (isLanding) {
    return colors.secondaryDark;
  }

  if (isDedicatedTeamPage) {
    return colors.white;
  }

  return isPageScrolled ? colors.secondaryDark : colors.white;
};

const getBackgroundColor = (
  isLanding: boolean,
  isPageScrolled: boolean,
  isDedicatedTeamPage: boolean
) => {
  if (isLanding) {
    return isPageScrolled ? colors.white : 'transparent';
  }

  if (isDedicatedTeamPage) {
    return colors.darkBg;
  }

  return isPageScrolled ? colors.white : 'transparent';
};

export const Wrapper = styled.div<{
  $isPageScrolled: boolean;
  isDedicatedTeamPage: boolean;
  isLandingPage: boolean;
}>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 95px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;

  background-color: ${({
    $isPageScrolled,
    isDedicatedTeamPage,
    isLandingPage,
  }) =>
    getBackgroundColor(isLandingPage, $isPageScrolled, isDedicatedTeamPage)};

  box-shadow: ${({ $isPageScrolled }) =>
    $isPageScrolled ? '0 0 70px 0 rgba(29,35,58,.12)' : 'none'};

  transition:
    box-shadow 0.2 ease-out,
    background-color 0.2s ease-out;

  @media (max-width: 1200px) {
    height: 109px;
    padding: 16px 0;
  }

  @media (max-width: 767px) {
    height: 81px;
    padding: 16px 0;
  }
`;

export const CompanyName = styled.div`
  cursor: pointer;

  &:active {
    opacity: 0.7;
  }
`;

export const Container = styled.div`
  max-width: 1320px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 12px;

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

export const NavigationRoutesWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavigationRoutes = styled.div`
  height: 100%;
  display: flex;
  gap: 41px;
  margin-right: 44px;

  @media (max-width: 1200px) {
    display: none;
  }
`;

export const StyledLink = styled(Link)<{
  $isExitingHover: boolean;
  $isLanding: boolean;
  $isDedicatedTeamPage: boolean;
  $isPageScrolled: boolean;
  $hasNavigationMounted: boolean;
}>`
  position: relative;
  display: inline;
  font-family: 'Poppins', sans-serif;
  text-decoration: none;
  font-size: 15px;
  color: ${({ $isLanding, $isPageScrolled, $isDedicatedTeamPage }) =>
    getLinkColor($isLanding, $isPageScrolled, $isDedicatedTeamPage)};
  height: 100%;
  padding: 12px 0;
  pointer-events: ${({ $isExitingHover }) =>
    $isExitingHover ? 'none' : 'all'};

  ${({ $hasNavigationMounted }) =>
    $hasNavigationMounted && `transition: color 0.4s ease-in-out;`}

  &:hover {
    color: ${({ $isLanding, $isDedicatedTeamPage }) =>
      $isLanding || $isDedicatedTeamPage ? colors.primary : colors.mildPink};
    transition: color 0.3s ease-in-out;
  }
`;

export const SubMenuWrapper = styled.div<{
  isExitingHover: boolean;
}>`
  position: absolute;
  display: flex;
  top: 60px;
  left: 0;
  flex-direction: column;
  visibility: 0;

  @keyframes fadeRightToLeft {
    from {
      opacity: 0;
      transform: translateX(40px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes fadeLeftToRight {
    from {
      opacity: 1;
      transform: translateX(0px);
    }
    to {
      opacity: 0;
      transform: translateX(30px);
    }
  }

  ${({ isExitingHover }) =>
    isExitingHover
      ? `
    animation: fadeLeftToRight 0.3s ease-out;
    pointer-events: 'none';
  `
      : `animation: fadeRightToLeft 0.3s ease-out;`}
`;

export const SubMenuExtension = styled.div`
  background-color: transparent;
  position: absolute;
  top: -36px;
  height: 40px;
  width: 60px;
`;

export const SubMenu = styled.div<{ $isDedicatedTeamPage: boolean }>`
  width: 220px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 26px 36px;
  background-color: ${({ $isDedicatedTeamPage }) =>
    $isDedicatedTeamPage ? '#232745' : colors.white};
  border-radius: 12px;
  z-index: 12;
  box-shadow: 0 0 70px 0 rgba(29, 35, 58, 0.12);
  color: ${({ $isDedicatedTeamPage }) =>
    $isDedicatedTeamPage ? colors.white : colors.secondaryDark};
`;

export const SubMenuLinks = styled.li`
  list-style-type: none;
  width: fit-content;
  overflow: hidden;

  &::after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background-color: ${colors.primary};
    // TODO: Fix this to animate correctly
    /* transform: translate(calc(100%), -3px); */
    transform: translate(0, -3px);
  }

  &:hover {
    color: ${colors.primary};
    cursor: pointer;

    &::after {
      width: 100%;
      transition: width 0.3s ease-in-out;
    }

    transition: color 0.6s ease-in-out;
  }
`;

export const ButtonWrapper = styled.div`
  transform: translate(0px, -2px);

  @media (max-width: 767px) {
    display: none;
  }
`;

export const StyledBurger = styled(FontAwesomeIcon)<{
  $isDedicatedPage: boolean;
}>`
  color: ${({ $isDedicatedPage }) =>
    $isDedicatedPage ? colors.white : colors.secondaryDark};
  margin-left: 50px;
  cursor: pointer;

  @media (min-width: 1200px) {
    display: none;
  }
`;

export const Overlay = styled.div<{
  $isOverlayVisible: boolean;
  $isMenuOpen: boolean;
}>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${colors.black};
  opacity: 0.5;
  z-index: 3;
  ${({ $isOverlayVisible, $isMenuOpen }) =>
    ($isOverlayVisible || $isMenuOpen) && `pointer-events: 'none';`}

  visibility: ${({ $isOverlayVisible }) =>
    $isOverlayVisible ? 'visible' : 'hidden'};
`;
