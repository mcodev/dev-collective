import { useEffect, useState } from 'react';
import {
  Wrapper,
  LogoBackgroundWrapper,
  BackgroundHeroImageWrapper,
  LeftDotsWrapper,
  DownLollipopWrapper,
  StraightLinesWrapper,
  RightShellWrapper,
  MiddleDotsWrapper,
  PageDetails,
  NavigationDetails,
  HeroNavigationDetails,
  ImagesWrapper,
  HomeLink,
  CurrentPage,
} from './PageHero.styles';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { useLanguageContext } from '@/contexts/LanguageProvider';

type PageHeroProps = {
  pageTitle: string;
};

const SCROLL_OFFSET = 100;

const PageHero = ({ pageTitle }: PageHeroProps): JSX.Element => {
  const [isPageScrolled, setIsPageScrolled] = useState(false);
  const { translate } = useLanguageContext();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > SCROLL_OFFSET && !isPageScrolled) {
        setIsPageScrolled(true);
      } else {
        setIsPageScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <Wrapper>
      <ImagesWrapper>
        {!isPageScrolled && (
          <LogoBackgroundWrapper>
            <Image
              src="pageHeroBackgroundLogo.webp"
              alt="heroImage"
              fill
              priority
            />
          </LogoBackgroundWrapper>
        )}

        <BackgroundHeroImageWrapper>
          <Image src="pageHeroSplash.webp" alt="heroImage" fill priority />
        </BackgroundHeroImageWrapper>

        <StraightLinesWrapper>
          <Image
            src="stripedCircleHorizontal.webp"
            alt="heroImage"
            fill
            priority
          />
        </StraightLinesWrapper>

        <LeftDotsWrapper>
          <Image src="dottedCirclePurple.webp" alt="heroImage" fill priority />
        </LeftDotsWrapper>

        <DownLollipopWrapper>
          <Image src="spiralHalfTop.webp" alt="heroImage" fill priority />
        </DownLollipopWrapper>

        <MiddleDotsWrapper>
          <Image src="pinkHorizontalDots.webp" alt="heroImage" fill priority />
        </MiddleDotsWrapper>

        <RightShellWrapper>
          <Image src="spiralPurple.webp" alt="heroImage" fill priority />
        </RightShellWrapper>
      </ImagesWrapper>

      <HeroNavigationDetails>
        <PageDetails>{translate(pageTitle)}</PageDetails>

        <NavigationDetails>
          <HomeLink href={'/'}>{translate('home')}</HomeLink>

          <FontAwesomeIcon icon={faArrowRightLong} />

          <CurrentPage>{translate(pageTitle)}</CurrentPage>
        </NavigationDetails>
      </HeroNavigationDetails>
    </Wrapper>
  );
};

export default PageHero;
