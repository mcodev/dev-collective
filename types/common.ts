import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

type KeyFactorType = {
  title: string;
  description: string;
  icon: IconDefinition;
};

type KeyBenefitType = {
  title: string;
  description: string;
};

export type ServiceType = {
  key: string;
  title: string;
  description: string;
  icon: string;
  link: string;
  image: string;
  firstDescription: string;
  secondDescription: string;
  keyFactors: KeyFactorType[];
  keyBenefits: KeyBenefitType[];
  endingParagraph?: string;
};
