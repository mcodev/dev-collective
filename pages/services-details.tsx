import { SERVICES_DETAILS } from '@/modules/constants';
import PageHero from '@/sections/PageHero/PageHero';
import {
  Wrapper,
  YellowCircleImage,
  RightSideBar,
  AngleRightIcon,
  LeftSideBar,
  ArrowRightIcon,
  ServicesNavigationCard,
  ServicesList,
  ListItem,
  CardTitle,
  Container,
  ServiceImageWrapper,
  ServiceImage,
  FirstDescription,
  SecondDescription,
  KeyFactorWrapper,
  KeyFactors,
  KeyFactor,
  KeyFactorContent,
  KeyFactorTitle,
  KeyFactorDescription,
  ServiceTitle,
  ListItemTitle,
  KeyTitle,
  KeyFactorIconWrapper,
  LightPurpleCircle,
  KeyFactorIcon,
  KeyBenefitsList,
  DottedCircleLightBrownImage,
  KeyBenefitDescription,
  DottedCircleLightBrownWrapper,
  KeyBenefit,
  AnchorScrollTop,
  ConclusionParagraph,
} from '@/styles/pages/services-details';
import {
  faCircleArrowRight,
  faAngleRight,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { ServiceType } from '@/types/common';
import { useLanguageContext } from '@/contexts/LanguageProvider';

const ServicesDetails = (): JSX.Element => {
  const router = useRouter();
  const { translate } = useLanguageContext();
  const [selectedService, setSelectedService] = useState<ServiceType | null>(
    null
  );
  const [hoveredService, setHoveredService] = useState<string>('');

  const anchorRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (router.isReady && selectedService === null) {
      const serviceQuery = (router.query.service || 'design') as string;

      const service = SERVICES_DETAILS.find((s) => s.link === serviceQuery);
      setSelectedService(service || SERVICES_DETAILS[0]);
    }
  }, [router]);

  return (
    <>
      <PageHero pageTitle="servicesDetails" />

      <Wrapper>
        {selectedService && (
          <Container>
            <AnchorScrollTop ref={anchorRef} />

            <DottedCircleLightBrownWrapper>
              <DottedCircleLightBrownImage
                alt="DottedCircleLightBrownImage"
                src={`../../dottedCircleLightBrown.webp`}
                fill
              />
            </DottedCircleLightBrownWrapper>

            <LeftSideBar>
              <ServicesNavigationCard>
                <CardTitle>Services</CardTitle>

                <ServicesList>
                  {SERVICES_DETAILS.map((service) => (
                    <ListItem
                      key={service.key}
                      onMouseOver={() => {
                        setHoveredService(service.key);
                      }}
                      onMouseLeave={() => {
                        setHoveredService('');
                      }}
                      onClick={() => {
                        router.push(
                          {
                            pathname: `/services-details`,
                            query: { service: service.link },
                          },
                          undefined,
                          { shallow: true }
                        );
                        setSelectedService(service);

                        if (window.innerWidth <= 992) {
                          anchorRef.current?.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start',
                          });
                        }
                      }}
                    >
                      <ListItemTitle
                        $isHovered={hoveredService === service.key}
                        $isSelected={selectedService.key === service.key}
                      >
                        {translate(service.title)}
                      </ListItemTitle>

                      <AngleRightIcon
                        icon={faAngleRight}
                        size="sm"
                        $isHovered={hoveredService === service.key}
                      />

                      <ArrowRightIcon
                        icon={faArrowRight}
                        size="sm"
                        $isHovered={hoveredService === service.key}
                      />
                    </ListItem>
                  ))}
                </ServicesList>
              </ServicesNavigationCard>
            </LeftSideBar>

            <RightSideBar>
              <ServiceImageWrapper>
                <ServiceImage
                  alt="serviceImage"
                  src={`../../servicesDetailsPage/services/${selectedService.image}`}
                  fill
                />
              </ServiceImageWrapper>

              <ServiceTitle>{translate(selectedService.title)}</ServiceTitle>

              <FirstDescription>
                {translate(selectedService.firstDescription)}
              </FirstDescription>

              <SecondDescription>
                {translate(selectedService.secondDescription)}
              </SecondDescription>

              <KeyTitle> {translate('servicesKeyFactors')}</KeyTitle>

              <KeyFactorWrapper>
                <KeyFactors>
                  {selectedService.keyFactors.map((keyFactor) => (
                    <KeyFactor key={keyFactor.title}>
                      <KeyFactorIconWrapper>
                        <LightPurpleCircle>
                          <KeyFactorIcon icon={keyFactor.icon} size="2xl" />
                        </LightPurpleCircle>
                      </KeyFactorIconWrapper>

                      <KeyFactorContent>
                        <KeyFactorTitle>
                          {translate(keyFactor.title)}
                        </KeyFactorTitle>
                        <KeyFactorDescription>
                          {translate(keyFactor.description)}
                        </KeyFactorDescription>
                      </KeyFactorContent>
                    </KeyFactor>
                  ))}
                </KeyFactors>
              </KeyFactorWrapper>

              <KeyTitle>{translate('servicesKeyBenefits')}</KeyTitle>

              <KeyBenefitsList>
                {selectedService.keyBenefits.map((keyBenefit) => (
                  <KeyBenefit key={keyBenefit.title}>
                    <FontAwesomeIcon
                      icon={faCircleArrowRight}
                      size="lg"
                      style={{ color: '#4A4F61' }}
                    />

                    <KeyBenefitDescription>
                      {translate(keyBenefit.description)}
                    </KeyBenefitDescription>
                  </KeyBenefit>
                ))}
              </KeyBenefitsList>

              <ConclusionParagraph>
                {selectedService?.endingParagraph || ''}
              </ConclusionParagraph>
            </RightSideBar>
          </Container>
        )}

        <YellowCircleImage
          alt="yellowCircle"
          src={`../../greenCircle.webp`}
          width={120}
          height={120}
        />
      </Wrapper>
    </>
  );
};

export default ServicesDetails;
