import {
  Wrapper,
  CloseIcon,
  Container,
  RoutesWrapper,
  ContactDetails,
  SocialMediaLink,
  Route,
  RouteWrapper,
  RouteLink,
  ChevronLeftIcon,
  ContactInfo,
  ContactIcon,
  AddressInfo,
  SocialIcon,
  SocialMedia,
} from './SideMenu.styles';
import {
  faClose,
  faChevronLeft,
  faMapMarkerAlt,
  faPaperPlane,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import {
  faLinkedinIn,
  faInstagram,
  faFacebookF,
} from '@fortawesome/free-brands-svg-icons';
import { ROUTES, CONTACT_INFO } from '@/modules/constants';
import { useState } from 'react';
import { useLanguageContext } from '@/contexts/LanguageProvider';
type SideMenuPropsType = {
  isMenuOpen: boolean;
  isOverlayVisible: boolean;
  onClose: () => void;
};

const SideMenu = ({
  isMenuOpen,
  onClose,
  isOverlayVisible,
}: SideMenuPropsType): JSX.Element => {
  const [expandedRoutes, setExpandedRoutes] = useState<string[]>([]);
  const { translate } = useLanguageContext();

  return (
    <Wrapper isMenuOpen={isMenuOpen} isOverlayVisible={isOverlayVisible}>
      <CloseIcon icon={faClose} size="lg" onClick={onClose} />

      <Container>
        <RoutesWrapper>
          {Object.values(ROUTES).map((route) => (
            <RouteWrapper key={route.key}>
              <Route>
                <RouteLink href={route.path}>
                  {translate(route.label)}
                </RouteLink>
                {route?.subMenu && (
                  <ChevronLeftIcon
                    $isExpanded={expandedRoutes.includes(route.key)}
                    icon={faChevronLeft}
                    onClick={() => {
                      setExpandedRoutes((prev) =>
                        prev.includes(route.key)
                          ? prev.filter((key) => key !== route.key)
                          : [...prev, route.key]
                      );
                    }}
                  />
                )}
              </Route>

              <>
                {route.subMenu &&
                  expandedRoutes.includes(route.key) &&
                  route.subMenu.map((subRoute) => {
                    return (
                      <Route key={subRoute.label}>
                        <RouteLink href={subRoute.path} $isSubLink>
                          {translate(subRoute.label)}
                        </RouteLink>
                      </Route>
                    );
                  })}
              </>
            </RouteWrapper>
          ))}
        </RoutesWrapper>

        <ContactDetails>
          <AddressInfo>
            <ContactInfo
              href={CONTACT_INFO.google_maps}
              target="_blank"
              rel="noreferrer"
            >
              <ContactIcon icon={faMapMarkerAlt} size="lg" onClick={onClose} />
              <p>{translate(CONTACT_INFO.address)}</p>
            </ContactInfo>
          </AddressInfo>

          <ContactInfo
            href={`mailto:${CONTACT_INFO.email}`}
            target="_blank"
            rel="noreferrer"
          >
            <ContactIcon icon={faPaperPlane} />
            <p>{CONTACT_INFO.email}</p>
          </ContactInfo>

          <ContactInfo
            href={`tel:${CONTACT_INFO.phone}`}
            target="_blank"
            rel="noreferrer"
          >
            <ContactIcon icon={faPhone} />
            <p>{CONTACT_INFO.phone}</p>
          </ContactInfo>
        </ContactDetails>

        <SocialMedia>
          <SocialMediaLink href={CONTACT_INFO.fb} target="_blank">
            <SocialIcon icon={faFacebookF} />
          </SocialMediaLink>

          <SocialMediaLink href={CONTACT_INFO.linkedin} target="_blank">
            <SocialIcon icon={faLinkedinIn} />
          </SocialMediaLink>

          {/* <SocialMediaLink href={'/instagram'}>
            <SocialIcon icon={faInstagram} />
          </SocialMediaLink> */}
        </SocialMedia>
      </Container>
    </Wrapper>
  );
};

export default SideMenu;
