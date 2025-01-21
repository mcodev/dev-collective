import React from 'react';
import {
  BottomImage,
  ColumnLink,
  ColumnTitle,
  ContactColumn,
  ContactDetails,
  Copyright,
  DotsImage,
  FooterContent,
  FooterWrapper,
  IconLink,
  LinksColumn,
  LogoColumn,
  LogoDescription,
  MainContent,
  SocialButton,
  SocialButtonsWrapper,
  SpiralImage,
  WaveImage,
  WorkImage,
  WorkImageSecondary,
  WorkImageSecondaryContainer,
  WorkImageContainer,
  WorkTogetherDescription,
  WorkTogetherWrapper,
  Wrapper,
  ColumnDiv,
} from './Footer.styles';
import Button from '../Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane, faPhone } from '@fortawesome/free-solid-svg-icons';
import { CONTACT_INFO, SERVICES_DETAILS } from '@/modules/constants';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useLanguageContext } from '@/contexts/LanguageProvider';

const COMPANY = [
  {
    title: 'aboutUs',
    urlRoute: '/about',
  },
  // {
  //   title: 'Blog',
  //   urlRoute: '/blog',
  // },
  // {
  //   title: 'Careers',
  //   urlRoute: '/careers',
  // },
  {
    title: 'contact',
    urlRoute: '/contact',
  },
  // {
  //   title: 'Privacy Policy',
  //   urlRoute: '/privacy-policy',
  // },
];

const Footer = () => {
  const router = useRouter();
  const { translate } = useLanguageContext();

  return (
    <Wrapper>
      <WorkTogetherWrapper>
        <WorkTogetherDescription>
          <h4 className="sectionSubtitle">{translate('letsCollaborate')}</h4>
          <h2 className="sectionTitle">
            <span>{translate('wantASolution')} </span> <br />{' '}
            {translate('thatSucceeds')}
          </h2>

          <Button
            title={translate('estimate')}
            hasColorTransition
            urlRoute="/contact"
          />
        </WorkTogetherDescription>

        <WaveImage
          src="blackWave.webp"
          alt="blackWave"
          width={109}
          height={50.39}
          priority
        />

        <DotsImage
          src="purpleDotsThreeRowsVertical.webp"
          alt="purpleDotsThreeRowsVertical"
          width={49}
          height={84.54}
          priority
        />

        <WorkImageContainer>
          <WorkImage src="il1.webp" alt="illustration" fill priority />
        </WorkImageContainer>

        <WorkImageSecondaryContainer>
          <WorkImageSecondary src="il2.webp" alt="illustration" fill priority />
        </WorkImageSecondaryContainer>
      </WorkTogetherWrapper>

      <FooterWrapper>
        <FooterContent>
          <MainContent>
            <LogoColumn>
              <Image
                src="/logo_full.webp"
                alt="logo"
                width={200}
                height={50}
                priority
                draggable={false}
              />

              <LogoDescription>
                {translate('reachOutDescription')}
              </LogoDescription>

              {/* <SocialButtonsWrapper>
                <SocialButton href={CONTACT_INFO.fb} target="_blank">
                  <FontAwesomeIcon icon={faFacebookF} />
                </SocialButton>
                <SocialButton href={CONTACT_INFO.linkedin} target="_blank">
                  <FontAwesomeIcon icon={faLinkedin} />
                </SocialButton>
              </SocialButtonsWrapper> */}
            </LogoColumn>

            <LinksColumn>
              <ColumnTitle>{translate('ourServices')}</ColumnTitle>
              {SERVICES_DETAILS.map((service) => (
                <ColumnDiv
                  key={service.title}
                  onClick={() =>
                    router.push(`/services-details/?service=${service.link}`)
                  }
                >
                  {translate(service.title)}
                </ColumnDiv>
              ))}
            </LinksColumn>
            <LinksColumn>
              <ColumnTitle>{translate('company')}</ColumnTitle>
              {COMPANY.map((company) => (
                <ColumnLink key={company.title} href={company.urlRoute}>
                  {translate(company.title)}
                </ColumnLink>
              ))}
            </LinksColumn>
            {/* <ContactColumn>
              <ColumnTitle>{translate('stayConnected')}</ColumnTitle>

              <ContactDetails>
                <ColumnLink
                  href={CONTACT_INFO.google_maps}
                  target="_blank"
                  rel="noreferrer"
                >
                  {translate(CONTACT_INFO.address)}
                </ColumnLink>

                <IconLink
                  href={`tel:${CONTACT_INFO.phone}`}
                  target="_blank"
                  rel="noreferrer"
                  color="green"
                >
                  <FontAwesomeIcon icon={faPhone} /> {CONTACT_INFO.phone}
                </IconLink>

                <IconLink
                  href={`mailto:${CONTACT_INFO.email}`}
                  target="_blank"
                  rel="noreferrer"
                  color="primary"
                >
                  <FontAwesomeIcon icon={faPaperPlane} /> {CONTACT_INFO.email}
                </IconLink>
              </ContactDetails>
            </ContactColumn> */}
          </MainContent>

          <Copyright>{`Copyright © ${new Date().getFullYear()} Dev Collective`}</Copyright>
        </FooterContent>

        <SpiralImage
          src="spiralHalfBottom.webp"
          alt="spiral"
          width={320}
          height={167}
          priority
        />

        <BottomImage
          src="footer.webp"
          alt="footer"
          width={1300}
          height={316}
          priority
        />
      </FooterWrapper>
    </Wrapper>
  );
};

export default Footer;
