import { useEffect, useState } from 'react';
import {
  Wrapper,
  Container,
  NavigationRoutesWrapper,
  NavigationRoutes,
  StyledLink,
  SubMenu,
  SubMenuWrapper,
  SubMenuExtension,
  SubMenuLinks,
  ButtonWrapper,
  StyledBurger,
  Overlay,
  CompanyName,
} from './NavigationBar.styles';
import Button, { ButtonVariantType } from '../Button/Button';
import { ROUTES } from '@/modules/constants';
import { useRouter } from 'next/router';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import SideMenu from './SideMenu/SideMenu';
import LanguageSelector from './LanguageSelector/LanguageSelector';
import { useLanguageContext } from '@/contexts/LanguageProvider';
import Image from 'next/image';

const BASIC_ROUTES: {
  key: string;
  label: string;
  path: string;
}[] = [
  ROUTES.home,
  ROUTES.about,
  ROUTES.portfolio,
  ROUTES.services,
  ROUTES.contact,
];

export const SUB_NAVIGATION_ROUTES: {
  [key: string]: {
    label: string;
    path: string;
  }[];
} = {
  // home: [
  //   { label: 'company', path: '/' },
  //   { label: 'dedicatedTeam', path: '/dedicated-team' },
  // ],
  // services: [
  //   { label: 'services', path: '/services' },
  //   { label: 'servicesDetails', path: '/services-details' },
  // ],
  // portfolio: [
  //   { label: 'Portfolio', path: '/portfolio' },
  //   { label: 'Portfolio-details', path: '/portfolio-details' },
  // ],
};

const SCROLL_OFFSET = 100;

const NavigationBar = (): JSX.Element => {
  const [isPageScrolled, setIsPageScrolled] = useState(false);
  const [hoveredRoute, setHoveredRoute] = useState<string | null>(null);
  const [isExitingHover, setIsExitingHover] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isOverlayVisible, setIsOverlayVisible] = useState<boolean>(false);
  const [hasNavigationMounted, setHasNavigationMounted] =
    useState<boolean>(false);
  const router = useRouter();
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const isLanding = router.pathname === '/';
  const isDedicatedTeamPage = router.pathname === '/dedicated-team';

  const { translate } = useLanguageContext();

  const getButtonVariant = (): ButtonVariantType => {
    if (isLanding || isDedicatedTeamPage) {
      return 'primary';
    }

    return isPageScrolled ? 'primary' : 'secondary';
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > SCROLL_OFFSET && !isPageScrolled) {
        setIsPageScrolled(true);
        setIsDropdownVisible(false);
      } else {
        setIsPageScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setHasNavigationMounted(true);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      setIsOverlayVisible(false);
    }
  }, [router]);

  const handleDropDownVisibility = (value: boolean) => {
    setIsDropdownVisible(value);
  };

  return (
    <Wrapper
      $isPageScrolled={isPageScrolled}
      isDedicatedTeamPage={isDedicatedTeamPage}
      isLandingPage={isLanding}
    >
      <Overlay $isOverlayVisible={isOverlayVisible} $isMenuOpen={isMenuOpen} />

      <Container>
        <CompanyName onClick={() => router.push('/')}>
          <Image
            src="/logo_full.webp"
            alt="logo"
            width={200}
            height={50}
            priority
            draggable={false}
          />
        </CompanyName>

        <NavigationRoutesWrapper>
          <NavigationRoutes>
            {BASIC_ROUTES.map((route) => {
              const isRouteIncludedInHoveredRoutes = Object.keys(
                SUB_NAVIGATION_ROUTES
              ).includes(route.key);

              return (
                <StyledLink
                  key={route.label}
                  href={route.path}
                  $isExitingHover={isExitingHover}
                  $isLanding={isLanding}
                  $isPageScrolled={isPageScrolled}
                  $isDedicatedTeamPage={isDedicatedTeamPage}
                  $hasNavigationMounted={hasNavigationMounted}
                  onMouseOver={() => {
                    if (isRouteIncludedInHoveredRoutes) {
                      setHoveredRoute(route.key);
                      setIsExitingHover(false);
                    }
                    setIsDropdownVisible(false);
                  }}
                  onMouseLeave={() => {
                    if (isRouteIncludedInHoveredRoutes) {
                      setIsExitingHover(true);
                      setTimeout(() => {
                        setHoveredRoute(null);
                        setIsExitingHover(false);
                      }, 300);
                    }
                  }}
                >
                  {translate(route.label)}

                  {hoveredRoute === route.key && (
                    <SubMenuWrapper isExitingHover={isExitingHover}>
                      <SubMenuExtension />

                      <SubMenu $isDedicatedTeamPage={isDedicatedTeamPage}>
                        {SUB_NAVIGATION_ROUTES[route.key].map((r) => (
                          <SubMenuLinks
                            key={r.label}
                            onClick={(e) => {
                              e.preventDefault();
                              router.push(r.path);
                              setHoveredRoute(null);
                            }}
                          >
                            {translate(r.label)}
                          </SubMenuLinks>
                        ))}
                      </SubMenu>
                    </SubMenuWrapper>
                  )}
                </StyledLink>
              );
            })}
          </NavigationRoutes>

          <LanguageSelector
            handleDropDownVisibility={handleDropDownVisibility}
            isDropdownVisible={isDropdownVisible}
          />

          <ButtonWrapper>
            <Button
              // title="Get A Quote"
              title={translate('getAQuote')}
              urlRoute="contact"
              variant={getButtonVariant()}
            />
          </ButtonWrapper>

          <StyledBurger
            icon={faBars}
            $isDedicatedPage={isDedicatedTeamPage}
            size="2xl"
            onClick={() => {
              setTimeout(() => setIsMenuOpen(true), 300);
              setIsOverlayVisible(true);
            }}
          />
        </NavigationRoutesWrapper>
      </Container>

      <SideMenu
        isMenuOpen={isMenuOpen}
        isOverlayVisible={isOverlayVisible}
        onClose={() => {
          setTimeout(() => setIsMenuOpen(false), 200);
          setIsOverlayVisible(false);
        }}
      />
    </Wrapper>
  );
};

export default NavigationBar;
