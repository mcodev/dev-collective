import React from 'react';
import {
  Card,
  CardContainer,
  CardTitle,
  Container,
  ContentWrapper,
  CrossImage,
  EmptyCircleImage,
  Header,
  MotionCircleContainer,
  StrippedCircleImage,
  Wrapper,
} from './TechStack.styles';
import MotionIcon from '@/components/MotionIcon/MotionIcon';
import Image from 'next/image';
import { useLanguageContext } from '@/contexts/LanguageProvider';

const CARDS_DATA = [
  {
    title: 'Next.js',
    icon: 'next.svg',
  },
  {
    title: 'React Native',
    icon: 'native.svg',
  },
  {
    title: 'Express.js',
    icon: 'express.webp',
  },
];

const TechStack = () => {
  const { translate } = useLanguageContext();

  return (
    <Wrapper>
      <Container>
        <Header>
          <h1 className="sectionSubtitle">{translate('technologies')}</h1>
          <h2 className="heroTitle">
            <span>{translate('ourTechStack')}</span>
          </h2>
          <p>{translate('techStackDescription')}</p>
        </Header>

        <ContentWrapper>
          <CardContainer>
            {CARDS_DATA.map((card, index) => (
              <Card key={index}>
                <Image
                  src={`/${card.icon}`}
                  alt={card.title}
                  width={80}
                  height={80}
                  priority
                />
                <CardTitle>{card.title}</CardTitle>
              </Card>
            ))}
          </CardContainer>
        </ContentWrapper>

        <StrippedCircleImage
          src="strippedCircle.webp"
          alt="strippedCircle"
          width={104}
          height={104}
        />

        <EmptyCircleImage
          src="emptyCircle.webp"
          alt="emptyCircle"
          width={346}
          height={345}
        />

        <CrossImage
          src="blueCross.webp"
          alt="blueCross"
          width={24}
          height={24}
        />

        <MotionCircleContainer>
          <MotionIcon
            iconName="greenCircle"
            direction="horizontal"
            zIndex={1}
          />
        </MotionCircleContainer>
      </Container>
    </Wrapper>
  );
};

export default TechStack;
