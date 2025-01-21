import PageHero from '@/sections/PageHero/PageHero';
import {
  AddressSection,
  ContactWrapper,
  Container,
  Details,
  DetailsWrapper,
  IconWrapper,
  Row,
  Title,
  TitleWrapper,
  Wrapper,
} from '@/styles/pages/contact';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDownLong } from '@fortawesome/free-solid-svg-icons';
import {
  faPaperPlane,
  faPhone,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';
import { colors } from '@/styles/theme';
import LikeWhatYouSee from '@/sections/like_what_you_see/LikeWhatYouSee';
import { CONTACT_INFO } from '@/modules/constants';
import { useLanguageContext } from '@/contexts/LanguageProvider';

const CONTACT_DATA = [
  {
    title: 'address',
    details: CONTACT_INFO.address,
    icon: faLocationDot,
    iconColor: 'white',
    href: CONTACT_INFO.google_maps,
  },
  // {
  //   title: 'phone',
  //   details: CONTACT_INFO.phone,
  //   icon: faPhone,
  //   iconColor: 'lightGreen',
  //   href: `tel:${CONTACT_INFO.phone}`,
  // },
  {
    title: 'emailUs',
    details: CONTACT_INFO.email,
    icon: faPaperPlane,
    iconColor: 'primary',
    href: `mailto:${CONTACT_INFO.email}`,
  },
];

const Contact = () => {
  const { translate } = useLanguageContext();

  return (
    <Wrapper>
      <PageHero pageTitle="contactUs" />

      <AddressSection>
        <Container>
          <ContactWrapper>
            {CONTACT_DATA.map((data, index) => (
              <Row key={index}>
                <IconWrapper iconColor={data.iconColor as keyof typeof colors}>
                  <FontAwesomeIcon icon={data.icon} />
                </IconWrapper>

                <DetailsWrapper>
                  <Title>{translate(data.title)}</Title>
                  <br />
                  <Details href={data.href} target="_blank" rel="noreferrer">
                    {data.title === 'address'
                      ? translate(data.details)
                      : data.details}
                  </Details>
                </DetailsWrapper>
              </Row>
            ))}
          </ContactWrapper>

          <TitleWrapper>
            <h2 className="heroTitle">
              <span>{translate('contactTitle1')}</span> <br />
              {translate('contactTitle2')}
              <FontAwesomeIcon icon={faArrowDownLong} />
            </h2>
          </TitleWrapper>
        </Container>
      </AddressSection>

      <LikeWhatYouSee type="contact" />
    </Wrapper>
  );
};

export default Contact;
