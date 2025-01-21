import React, { useEffect, useState } from 'react';
import {
  Container,
  Content,
  ContentDetails,
  DetailsTitle,
  DisplayContent,
  GreenCircle,
  ImageWrapper,
  ListItem,
  ListWrapper,
  MainImage,
  MotionIconWrapper,
  Counter,
  Wrapper,
  CounterItem,
  CounterNumber,
  CounterTitle,
} from './AboutUs.styles';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import MotionIcon from '@/components/MotionIcon/MotionIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ABOUT_PROJECTS } from '@/modules/constants';
import { useLanguageContext } from '@/contexts/LanguageProvider';

const KET_POINTS = ['aboutKeyPoint1', 'aboutKeyPoint2', 'aboutKeyPoint3'];

const AboutUs = () => {
  const [isInView, setIsInView] = useState(false);
  const [counters, setCounters] = useState({});
  const { translate } = useLanguageContext();

  const handleScroll = () => {
    const sectionHeight =
      document.getElementById('about_section')?.offsetHeight || 2;

    const sectionTop = document.getElementById('counter')?.offsetTop || 0;
    const scrollY = window.scrollY;

    if (scrollY > (sectionTop + sectionHeight) / 2) {
      setIsInView(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    ABOUT_PROJECTS.forEach((project) => {
      setCounters((prev) => ({
        ...prev,
        [project.title]: project.number,
      }));
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // useEffect(() => {
  //   if (isInView) {
  //     const interval = setInterval(() => {
  //       setCounters((prev) => {
  //         const newCounters = {};
  //         Object.keys(prev).forEach((key) => {
  //           newCounters[key] = prev[key] + 1;
  //         });
  //         return newCounters;
  //       });
  //     }, 50);
  //     return () => clearInterval(interval);
  //   }
  // }, [isInView]);

  const counter = (number: number) => {
    if (isInView) {
      let count = 0;
      const interval = setInterval(() => {
        count += 1;
        if (count === number) {
          clearInterval(interval);
        }
      }, 50);
      return count;
    }
    return 0;
  };

  return (
    <Wrapper id="about_section">
      <Container>
        <DisplayContent>
          <h4 className="sectionSubtitle">{translate('aboutTitle')}</h4>

          <h2 className="sectionTitle">
            <span>{translate('aboutSubtitle1')} </span>
            <br />
            {translate('aboutSubtitle2')}
          </h2>
        </DisplayContent>

        <Content>
          <ImageWrapper>
            <MainImage
              src="/about_us/office.webp"
              alt="workingOffice"
              width={631}
              height={409}
            />
          </ImageWrapper>

          <ContentDetails>
            <DetailsTitle>{translate('aboutDescription')}</DetailsTitle>

            <ListWrapper>
              {KET_POINTS.map((item, index) => (
                <ListItem key={index}>
                  <FontAwesomeIcon icon={faArrowRight} />
                  <p>{translate(item)}</p>
                </ListItem>
              ))}
            </ListWrapper>
          </ContentDetails>

          <MotionIconWrapper>
            <MotionIcon iconName="purpleDots" direction="vertical" zIndex={1} />
          </MotionIconWrapper>

          <GreenCircle />
        </Content>
      </Container>

      <Counter id="counter">
        {ABOUT_PROJECTS.map(({ title, number }, index) => (
          <CounterItem
            key={index}
            hasDivider={index < ABOUT_PROJECTS.length - 1}
          >
            {/* <CounterNumber>{counter(number)}+</CounterNumber> */}
            <CounterNumber>{number}+</CounterNumber>

            <CounterTitle>{translate(title)}</CounterTitle>
          </CounterItem>
        ))}
      </Counter>
    </Wrapper>
  );
};

export default AboutUs;
