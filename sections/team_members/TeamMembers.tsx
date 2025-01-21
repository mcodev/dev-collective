import React from 'react';
import Image from 'next/image';
import {
  Card,
  CardContainer,
  CardDescription,
  CardDetails,
  CardTitle,
  Container,
  ContentWrapper,
  CrossImage,
  EmptyCircleImage,
  Header,
  MotionCircleContainer,
  MotionStrippedCircleImage,
  Wrapper,
} from './TeamMembers.styles';
import MotionIcon from '@/components/MotionIcon/MotionIcon';
import { useRouter } from 'next/router';
import { useLanguageContext } from '@/contexts/LanguageProvider';

const CARDS_DATA = [
  {
    key: '1',
    name: 'NikosSvanas',
    description: 'Full Stack Engineer',
    image: 'nick.webp',
  },
  {
    key: '2',
    name: 'DrososStaikos',
    description: 'Front End Developer',
    image: 'sakis.webp',
  },
  {
    key: '3',
    name: 'AndrewGorny',
    description: 'Front End Developer',
    image: 'andrew.webp',
  },
];

const TeamMembers = () => {
  const router = useRouter();
  const { translate } = useLanguageContext();

  return (
    <Wrapper>
      <Container>
        <Header>
          <h1 className="sectionSubtitle">{translate('teamMembers')}</h1>
          <h2 className="heroTitle">
            <span>{translate('meetOurTeam')}</span>
          </h2>
          <p>{translate('teamDescription')}</p>
        </Header>

        <ContentWrapper>
          <CardContainer>
            {CARDS_DATA.map((card, index) => (
              <Card
                key={index}
                //TODO - Uncomment this line to enable navigation to team member details page
                // onClick={() =>
                //   router.push(`/team-details?teamMember=${card.key}`)
                // }
              >
                <Image
                  src={`members/${card.image}`}
                  alt={card.name}
                  width={300}
                  height={365}
                  priority
                />

                <CardDetails>
                  <CardTitle>{translate(card.name)}</CardTitle>
                  <CardDescription>{card.description}</CardDescription>
                </CardDetails>
              </Card>
            ))}
          </CardContainer>
        </ContentWrapper>

        <MotionStrippedCircleImage>
          <MotionIcon
            iconName="strippedCircle"
            direction="vertical"
            zIndex={1}
          />
        </MotionStrippedCircleImage>

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

export default TeamMembers;
