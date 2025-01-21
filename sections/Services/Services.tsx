import MotionIcon from '@/components/MotionIcon/MotionIcon';

import ServiceCard from './ServiceCard/ServiceCard';
import {
  Wrapper,
  ServicesWrapper,
  Container,
  ContentWrapper,
  ServicesWave,
  SpiralHalf,
  SectionTitle,
  SectionSubTitle,
  DotsWrapper,
  ServicesWaveWrapper,
} from './Services.styles';
import { useRouter } from 'next/router';
import { SERVICES_DETAILS } from '@/modules/constants';
import { useLanguageContext } from '@/contexts/LanguageProvider';

const Services = (): JSX.Element => {
  const router = useRouter();
  const { translate } = useLanguageContext();

  return (
    <Wrapper>
      <ServicesWaveWrapper>
        <ServicesWave
          alt="waveImage"
          src="../../servicesWave.webp"
          fill
          priority
        />
      </ServicesWaveWrapper>

      <DotsWrapper>
        <MotionIcon iconName="greenDots" direction="horizontal" />
      </DotsWrapper>

      <SpiralHalf>
        <MotionIcon iconName="spiralHalf" direction="vertical" />
      </SpiralHalf>

      <Container>
        <ContentWrapper>
          <SectionSubTitle className="sectionSubtitle">
            {translate('servicesSection')}
          </SectionSubTitle>

          <SectionTitle className="sectionTitle">
            <span> {translate('whatWeDo')}</span>
          </SectionTitle>
        </ContentWrapper>

        <ServicesWrapper>
          {SERVICES_DETAILS.map((service) => (
            <ServiceCard
              key={service.key}
              icon={service.icon}
              title={translate(service.title)}
              description={translate(service.description)}
              onClick={() =>
                router.push(`/services-details/?service=${service.link}`)
              }
            />
          ))}
        </ServicesWrapper>
      </Container>
    </Wrapper>
  );
};

export default Services;
