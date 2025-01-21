import { useLanguageContext } from '@/contexts/LanguageProvider';
import {
  Wrapper,
  ServiceIcon,
  IconWrapper,
  PinkDot,
  ActionButton,
  Content,
  Title,
  Description,
} from './ServiceCard.styles';

type ServiceCardProps = {
  icon: string;
  title: string;
  description: string;
  onClick?: () => void;
};

const ServiceCard = ({
  icon,
  title,
  description,
  onClick,
}: ServiceCardProps): JSX.Element => {
  const { translate } = useLanguageContext();

  return (
    <Wrapper>
      <IconWrapper>
        <ServiceIcon
          alt="Service Icon"
          src={`../../servicesSection/${icon}`}
          title={title}
        />
        <PinkDot />
      </IconWrapper>

      <Content>
        <Title>{title}</Title>

        <Description>{description}</Description>
      </Content>

      <ActionButton onClick={onClick}>
        {translate('findOutMoreButton')}
      </ActionButton>
    </Wrapper>
  );
};

export default ServiceCard;
