import { useRouter } from 'next/router';
import {
  Wrapper,
  PortfolioImageWrapper,
  Title,
  Description,
  PortfolioDetails,
} from './PortfolioCard.styles';
import Image from 'next/image';
type PortfolioCardPropsType = {
  projectKey: string;
  title: string;
  description: string;
  imageDetails: {
    src: string;
    alt: string;
  };
};

const PortfolioCard = ({
  projectKey,
  title,
  description,
  imageDetails,
}: PortfolioCardPropsType): JSX.Element => {
  const router = useRouter();

  return (
    <Wrapper
      onClick={() => router.push(`/portfolio-details?project=${projectKey}`)}
    >
      <PortfolioImageWrapper>
        <Image src={imageDetails.src} alt={imageDetails.alt} fill priority />
      </PortfolioImageWrapper>

      <PortfolioDetails>
        <Title>{title}</Title>

        <Description>{description}</Description>
      </PortfolioDetails>
    </Wrapper>
  );
};

export default PortfolioCard;
