import { ServiceType } from '@/types/common';
import {
  faBriefcase,
  faChartBar,
  faUnlockKeyhole,
  faFileLines,
  faEye,
  faBrush,
  faCompass,
  faGear,
} from '@fortawesome/free-solid-svg-icons';

export const ROUTES: {
  [key: string]: {
    key: string;
    label: string;
    path: string;
    subMenu?: {
      label: string;
      path: string;
    }[];
  };
} = {
  home: {
    key: 'home',
    label: 'home',
    path: '/',
    subMenu: [
      { label: 'company', path: '/' },
      { label: 'dedicatedTeam', path: '/dedicated-team' },
    ],
  },
  about: {
    key: 'about',
    label: 'about',
    path: '/about',
  },
  services: {
    key: 'services',
    label: 'services',
    path: '/services',
  },
  contact: {
    key: 'contact',
    label: 'contact',
    path: '/contact',
  },
  // team: {
  //   key: 'team',
  //   label: 'Team',
  //   path: '/team',
  // },
  portfolio: {
    key: 'portfolio',
    label: 'projects',
    path: '/portfolio',
  },
} as const;

export const CONTACT_INFO = {
  email: 'devcollective@gmail.com',
  // phone: '+30 6984575974',
  google_maps:
    'https://www.google.com/maps/place/Athens/@37.9908977,23.6971397,13z/data=!3m1!4b1!4m6!3m5!1s0x14a1bd1f067043f1:0x2736354576668ddd!8m2!3d37.9838096!4d23.7275388!16zL20vMG4yeg?entry=ttu',
  address: 'companyAddress',
  fb: 'https://www.facebook.com/profile.php?id=61555619860074&locale=el_GR',
  linkedin: 'https://www.linkedin.com/company/enospacedev/posts/?feedView=all',
};

export const SERVICES_DETAILS_LINKS = {
  UI: 'design',
  WEB: 'web',
  APP: 'app',
  DIGITAL: 'digital',
  CONTENT: 'content',
  ECOMMERCE: 'commerce',
};

export const SERVICES_DETAILS: ServiceType[] = [
  {
    key: 'WEB APPS',
    title: 'webApps',
    description: 'servicesWebAppsDescription',
    icon: 'webDevelopment.webp',
    link: SERVICES_DETAILS_LINKS.WEB,
    image: 'webDevelopment.webp',
    firstDescription: 'servicesWebAppsFirstDescription',
    secondDescription: 'servicesWebAppsSecondDescription',
    keyFactors: [
      {
        title: 'servicesWebAppsFirstKeyFactorTitle',
        description: 'servicesWebAppsFirstKeyFactorDescription',
        icon: faBriefcase,
      },
      {
        title: 'servicesWebAppsSecondKeyFactorTitle',
        description: 'servicesWebAppsSecondKeyFactorDescription',
        icon: faChartBar,
      },
      {
        title: 'servicesWebAppsThirdKeyFactorTitle',
        description: 'servicesWebAppsThirdKeyFactorDescription',
        icon: faUnlockKeyhole,
      },
      {
        title: 'servicesWebAppsFourthKeyFactorTitle',
        description: 'servicesWebAppsFourthKeyFactorDescription',
        icon: faFileLines,
      },
    ],
    keyBenefits: [
      {
        title: 'servicesWebAppsFirstKeyBenefitTitle',
        description: 'servicesWebAppsFirstKeyBenefitDescription',
      },
      {
        title: 'servicesWebAppsSecondKeyBenefitTitle',
        description: 'servicesWebAppsSecondKeyBenefitDescription',
      },
      {
        title: 'servicesWebAppsThirdKeyBenefitTitle',
        description: 'servicesWebAppsThirdKeyBenefitDescription',
      },
    ],
  },
  {
    key: 'MOBILE APPS',
    title: 'mobileApps',
    description: 'servicesMobileAppsDescription',
    icon: 'appDevelopment.webp',
    link: SERVICES_DETAILS_LINKS.APP,
    image: 'mobileAppDevelopment.webp',
    firstDescription: 'servicesMobileAppsFirstDescription',
    secondDescription: 'servicesMobileAppsSecondDescription',
    keyFactors: [
      {
        title: 'servicesMobileAppsFirstKeyFactorTitle',
        description: 'servicesMobileAppsFirstKeyFactorDescription',
        icon: faBriefcase,
      },
      {
        title: 'servicesMobileAppsSecondKeyFactorTitle',
        description: 'servicesMobileAppsSecondKeyFactorDescription',
        icon: faChartBar,
      },
      {
        title: 'servicesMobileAppsThirdKeyFactorTitle',
        description: 'servicesMobileAppsThirdKeyFactorDescription',
        icon: faUnlockKeyhole,
      },
      {
        title: 'servicesMobileAppsFourthKeyFactorTitle',
        description: 'servicesMobileAppsFourthKeyFactorDescription',
        icon: faFileLines,
      },
    ],
    keyBenefits: [
      {
        title: 'servicesMobileAppsFirstKeyBenefitTitle',
        description: 'servicesMobileAppsFirstKeyBenefitDescription',
      },
      {
        title: 'servicesMobileAppsSecondKeyBenefitTitle',
        description: 'servicesMobileAppsSecondKeyBenefitDescription',
      },
      {
        title: 'servicesMobileAppsThirdKeyBenefitTitle',
        description: 'servicesMobileAppsThirdKeyBenefitDescription',
      },
    ],
  },
  {
    key: 'WEBSITES',
    title: 'websites',
    description: 'servicesWebsitesDescription',
    icon: 'digitalMarketing.webp',
    link: SERVICES_DETAILS_LINKS.DIGITAL,
    image: 'eCommerce.webp',
    firstDescription: 'servicesWebsitesFirstDescription',
    secondDescription: 'servicesWebsitesSecondDescription',
    keyFactors: [
      {
        title: 'servicesWebsitesFirstKeyFactorTitle',
        description: 'servicesWebsitesFirstKeyFactorDescription',
        icon: faBriefcase,
      },
      {
        title: 'servicesWebsitesSecondKeyFactorTitle',
        description: 'servicesWebsitesSecondKeyFactorDescription',
        icon: faChartBar,
      },
      {
        title: 'servicesWebsitesThirdKeyFactorTitle',
        description: 'servicesWebsitesThirdKeyFactorDescription',
        icon: faUnlockKeyhole,
      },
      {
        title: 'servicesWebsitesFourthKeyFactorTitle',
        description: 'servicesWebsitesFourthKeyFactorDescription',
        icon: faFileLines,
      },
    ],
    keyBenefits: [
      {
        title: 'servicesWebsitesFirstKeyBenefitTitle',
        description: 'servicesWebsitesFirstKeyBenefitDescription',
      },
      {
        title: 'servicesWebsitesSecondKeyBenefitTitle',
        description: 'servicesWebsitesSecondKeyBenefitDescription',
      },
      {
        title: 'servicesWebsitesThirdKeyBenefitTitle',
        description: 'servicesWebsitesThirdKeyBenefitDescription',
      },
    ],
  },
  {
    key: 'ESHOPS',
    title: 'eShops',
    description: 'servicesEshopDescription',
    icon: 'ecommerce.webp',
    link: SERVICES_DETAILS_LINKS.ECOMMERCE,
    image: 'digitalMarketing.webp',
    firstDescription: 'servicesEshopsFirstDescription',
    secondDescription: 'servicesEshopsSecondDescription',
    keyFactors: [
      {
        title: 'servicesEshopsFirstKeyFactorTitle',
        description: 'servicesEshopsFirstKeyFactorDescription',
        icon: faBriefcase,
      },
      {
        title: 'servicesEshopsSecondKeyFactorTitle',
        description: 'servicesEshopsSecondKeyFactorDescription',
        icon: faChartBar,
      },
      {
        title: 'servicesEshopsThirdKeyFactorTitle',
        description: 'servicesEshopsThirdKeyFactorDescription',
        icon: faUnlockKeyhole,
      },
      {
        title: 'servicesEshopsFourthKeyFactorTitle',
        description: 'servicesEshopsFourthKeyFactorDescription',
        icon: faFileLines,
      },
    ],
    keyBenefits: [
      {
        title: 'servicesEshopsFirstKeyBenefitTitle',
        description: 'servicesEshopsFirstKeyBenefitDescription',
      },
      {
        title: 'servicesEshopsSecondKeyBenefitTitle',
        description: 'servicesEshopsSecondKeyBenefitDescription',
      },
      {
        title: 'servicesEshopsThirdKeyBenefitTitle',
        description: 'servicesEshopsThirdKeyBenefitDescription',
      },
    ],
  },
  {
    key: 'UI',
    title: 'UiUxDesign',
    description: 'servicesUiUxDesignDescription',
    icon: 'uiUxDesign.webp',
    link: SERVICES_DETAILS_LINKS.UI,
    image: 'uiUx.webp',
    firstDescription: 'servicesUiUxDesignFirstDescription',
    secondDescription: 'servicesUiUxDesignSecondDescription',
    keyFactors: [
      {
        title: 'servicesUiUxDesignFirstKeyFactorTitle',
        description: 'servicesUiUxDesignFirstKeyFactorDescription',
        icon: faBriefcase,
      },
      {
        title: 'servicesUiUxDesignSecondKeyFactorTitle',
        description: 'servicesUiUxDesignSecondKeyFactorDescription',
        icon: faBrush,
      },
      {
        title: 'servicesUiUxDesignThirdKeyFactorTitle',
        description: 'servicesUiUxDesignThirdKeyFactorDescription',
        icon: faEye,
      },
      {
        title: 'servicesUiUxDesignFourthKeyFactorTitle',
        description: 'servicesUiUxDesignFourthKeyFactorDescription',
        icon: faFileLines,
      },
    ],
    keyBenefits: [
      {
        title: 'servicesUiUxDesignFirstKeyBenefitTitle',
        description: 'servicesUiUxDesignFirstKeyBenefitDescription',
      },
      {
        title: 'servicesUiUxDesignSecondKeyBenefitTitle',
        description: 'servicesUiUxDesignSecondKeyBenefitDescription',
      },
      {
        title: 'servicesUiUxDesignThirdKeyBenefitTitle',
        description: 'servicesUiUxDesignThirdKeyBenefitDescription',
      },
    ],
    endingParagraph: '',
  },
  {
    key: 'CONSULTING',
    title: 'consulting',
    description: 'servicesConsultingDescription',
    icon: 'contentWriting.webp',
    link: SERVICES_DETAILS_LINKS.CONTENT,
    image: 'contentStrategy.webp',
    firstDescription: 'servicesConsultingFirstDescription',
    secondDescription: 'servicesConsultingSecondDescription',
    keyFactors: [
      {
        title: 'servicesConsultingFirstKeyFactorTitle',
        description: 'servicesConsultingFirstKeyFactorDescription',
        icon: faBriefcase,
      },
      {
        title: 'servicesConsultingSecondKeyFactorTitle',
        description: 'servicesConsultingSecondKeyFactorDescription',
        icon: faCompass,
      },
      {
        title: 'servicesConsultingThirdKeyFactorTitle',
        description: 'servicesConsultingThirdKeyFactorDescription',
        icon: faGear,
      },
      {
        title: 'servicesConsultingFourthKeyFactorTitle',
        description: 'servicesConsultingFourthKeyFactorDescription',
        icon: faFileLines,
      },
    ],
    keyBenefits: [
      {
        title: 'servicesConsultingFirstKeyBenefitTitle',
        description: 'servicesConsultingFirstKeyBenefitDescription',
      },
      {
        title: 'servicesConsultingSecondKeyBenefitTitle',
        description: 'servicesConsultingSecondKeyBenefitDescription',
      },
      {
        title: 'servicesConsultingThirdKeyBenefitTitle',
        description: 'servicesConsultingThirdKeyBenefitDescription',
      },
    ],
  },
];

export const ABOUT_PROJECTS = [
  {
    title: 'codingWeeks',
    number: 552,
  },
  {
    title: 'problemsSolved',
    number: 776,
  },
  {
    title: 'totalCoffees',
    number: 1500,
  },
];

const PORTFOLIO_CATEGORIES = {
  ALL: 'all',
  WEB: 'Web',
  ANDROID: 'Android',
  IOS: 'iOS',
  APP: 'Mobile',
  DESIGN: 'design',
  MARKETING: 'marketing',
  ECOMMERCE: 'ecommerce',
} as const;

type PortfolioProjectType = {
  key: string;
  title: string;
  minimizedDescription: string;
  firstDescription: string;
  secondDescription: string;
  endingParagraph: string;
  projectKeypoints: {
    iconDetails: {
      icon: string;
      color: string;
      alt?: string;
    };
    title: string;
    description: string;
  }[];
  projectType: (typeof PORTFOLIO_CATEGORIES)[keyof typeof PORTFOLIO_CATEGORIES];
  // client: string;
  // location: string;
  // projectDate: string;
  coreImageDetails: {
    src: string;
    alt: string;
  };
  firstImageDetails: {
    src: string;
    alt: string;
  };
  secondaryImageDetails: {
    src: string;
    alt: string;
  };
  thirdImageDetails: {
    src: string;
    alt: string;
  };
  projectTopics: {
    title: string;
    description: string;
  }[];
};

export const PORTFOLIO_PROJECTS: PortfolioProjectType[] = [
  {
    key: '1',
    // as a title we will have the key of the translation
    title: 'Quickord',
    minimizedDescription: 'quickordDescriptionMinimized',
    firstDescription: 'quickordFirstDescription',
    secondDescription: 'quickordSecondDescription',
    endingParagraph: '',
    projectKeypoints: [
      {
        iconDetails: {
          icon: '/portfolioSection/quickord/operations.svg',
          color: 'red',
          alt: 'operations icon',
        },
        title: 'quickordKeypointTitle1',
        description: 'quickordKeypointDescription1',
      },
      {
        iconDetails: {
          icon: '/portfolioSection/quickord/people.svg',
          color: 'blue',
          alt: 'two people icon',
        },
        title: 'quickordKeypointTitle2',
        description: 'quickordKeypointDescription2',
      },
      {
        iconDetails: {
          icon: '/portfolioSection/quickord/time.svg',
          color: 'green',
          alt: 'time icon',
        },
        title: 'quickordKeypointTitle3',
        description: 'quickordKeypointDescription3',
      },
    ],
    projectType: PORTFOLIO_CATEGORIES.WEB,
    coreImageDetails: {
      src: '/portfolioSection/quickord/quickord1.webp',
      alt: 'a waiter order app and management system',
    },
    firstImageDetails: {
      src: '/portfolioSection/quickord/quickord3.webp',
      alt: 'Portfolio 1 secondary',
    },
    secondaryImageDetails: {
      src: '/portfolioSection/quickord/quickord4.webp',
      alt: 'Portfolio 1 secondary',
    },
    thirdImageDetails: {
      src: '/portfolioSection/quickord/quickord2.webp',
      alt: 'Portfolio 1 third',
    },
    projectTopics: [
      {
        title: 'productOwner',
        description: 'Flarmio',
      },
      {
        title: 'platform',
        description: `${PORTFOLIO_CATEGORIES.WEB}, ${PORTFOLIO_CATEGORIES.IOS}, ${PORTFOLIO_CATEGORIES.ANDROID}`,
      },
      {
        title: 'collaborationType',
        description: 'FE dedicated team',
      },
      {
        title: 'projectDate',
        description: '22 March 2022',
      },
      {
        title: 'projectUrl',
        description: 'https://quickord.com/',
      },
    ],
  },
  {
    key: '2',
    title: 'Roomismo',
    minimizedDescription: 'roomismoDescriptionMinimized',
    firstDescription: 'roomismoFirstDescription',
    secondDescription: 'roomismoSecondDescription',
    endingParagraph: '',
    projectKeypoints: [
      {
        iconDetails: {
          icon: '/portfolioSection/roomismo/simplify.svg',
          color: 'green',
          alt: 'simplify icon',
        },
        title: 'roomismoKeypointTitle1',
        description: 'roomismoKeypointDescription1',
      },
      {
        iconDetails: {
          icon: '/portfolioSection/roomismo/people.svg',
          color: 'blue',
          alt: 'two people icon',
        },
        title: 'roomismoKeypointTitle2',
        description: 'roomismoKeypointDescription2',
      },
      {
        iconDetails: {
          icon: '/portfolioSection/roomismo/operations.svg',
          color: 'green',
          alt: 'operations icon',
        },
        title: 'roomismoKeypointTitle3',
        description: 'roomismoKeypointDescription3',
      },
    ],
    projectType: PORTFOLIO_CATEGORIES.WEB,
    coreImageDetails: {
      src: '/portfolioSection/roomismo/roomismo6.webp',
      alt: 'Portfolio 2',
    },
    firstImageDetails: {
      src: '/portfolioSection/roomismo/roomismo1.webp',
      alt: 'Portfolio 2 secondary',
    },
    secondaryImageDetails: {
      src: '/portfolioSection/roomismo/roomismo3.webp',
      alt: 'Portfolio 2 secondary',
    },
    thirdImageDetails: {
      src: '/portfolioSection/roomismo/roomismo2.webp',
      alt: 'Portfolio 2 third',
    },
    projectTopics: [
      {
        title: 'productOwner',
        description: 'Flarmio',
      },
      {
        title: 'platform',
        description: `${PORTFOLIO_CATEGORIES.WEB}`,
      },
      {
        title: 'collaborationType',
        description: 'FE dedicated team',
      },
      {
        title: 'projectDuration',
        description: '01/09/2023 - 01/08/2024',
      },
      {
        title: 'projectUrl',
        description: 'https://roomismo.com/',
      },
    ],
  },
  // {
  //   key: '3',
  //   title: 'Branding Special',
  //   minimizedDescription:
  //     'Draw a line in the sand quick win. My capacity is full. Keep it lean gain alignment we need to future-proof this plan.',
  //   firstDescription: 'First Description',
  //   secondDescription: 'Second description',
  //   endingParagraph: 'Ending paragraph',
  //   projectKeypoints: [
  //     {
  //       iconDetails: {
  //         icon: 'faBriefcase',
  //         color: 'red',
  //       },
  //       title: 'Key point 1',
  //       description: 'Description 1',
  //     },
  //     {
  //       iconDetails: {
  //         icon: 'faChartBar',
  //         color: 'blue',
  //       },
  //       title: 'Key point 2',
  //       description: 'Description 2',
  //     },
  //     {
  //       iconDetails: {
  //         icon: 'faUnlockKeyhole',
  //         color: 'green',
  //       },
  //       title: 'Key point 3',
  //       description: 'Description 3',
  //     },
  //   ],
  //   projectType: PORTFOLIO_CATEGORIES.WEB,

  //   coreImageDetails: {
  //     src: '/portfolioSection/projectImage3.webp',
  //     alt: 'Portfolio 3',
  //   },
  //   firstImageDetails: {
  //     src: 'portfolio2Secondary.webp',
  //     alt: 'Portfolio 2 secondary',
  //   },
  //   secondaryImageDetails: {
  //     src: 'portfolio2Secondary.webp',
  //     alt: 'Portfolio 3 secondary',
  //   },
  //   thirdImageDetails: {
  //     src: 'portfolio2Third.webp',
  //     alt: 'Portfolio 3 third',
  //   },
  //   projectTopics: [
  //     {
  //       title: 'Client',
  //       description: 'Nosimon Agency',
  //     },
  //     {
  //       title: 'Project Type',
  //       description: PORTFOLIO_CATEGORIES.WEB,
  //     },
  //     {
  //       title: 'Location',
  //       description: '61 R New Street, NYC',
  //     },
  //     {
  //       title: 'Project Date',
  //       description: '22 March 2022',
  //     },
  //   ],
  // },
  // {
  //   key: '4',
  //   title: 'Digital Marketing',
  //   minimizedDescription:
  //     'Draw a line in the sand quick win. My capacity is full. Keep it lean gain alignment we need to future-proof this plan.',
  //   firstDescription: 'First Description',
  //   secondDescription: 'Second description',
  //   endingParagraph: 'Ending paragraph',
  //   projectKeypoints: [
  //     {
  //       iconDetails: {
  //         icon: 'faBriefcase',
  //         color: 'red',
  //       },
  //       title: 'Key point 1',
  //       description: 'Description 1',
  //     },
  //     {
  //       iconDetails: {
  //         icon: 'faChartBar',
  //         color: 'blue',
  //       },
  //       title: 'Key point 2',
  //       description: 'Description 2',
  //     },
  //     {
  //       iconDetails: {
  //         icon: 'faUnlockKeyhole',
  //         color: 'green',
  //       },
  //       title: 'Key point 3',
  //       description: 'Description 3',
  //     },
  //   ],
  //   projectType: PORTFOLIO_CATEGORIES.WEB,

  //   coreImageDetails: {
  //     src: '/portfolioSection/projectImage4.webp',
  //     alt: 'Portfolio 4',
  //   },
  //   firstImageDetails: {
  //     src: 'portfolio2Secondary.webp',
  //     alt: 'Portfolio 2 secondary',
  //   },
  //   secondaryImageDetails: {
  //     src: 'portfolio2Secondary.webp',
  //     alt: 'Portfolio 2 secondary',
  //   },
  //   thirdImageDetails: {
  //     src: 'portfolio2Third.webp',
  //     alt: 'Portfolio 2 third',
  //   },
  //   projectTopics: [
  //     {
  //       title: 'Client',
  //       description: 'Nosimon Agency',
  //     },
  //     {
  //       title: 'Project Type',
  //       description: PORTFOLIO_CATEGORIES.WEB,
  //     },
  //     {
  //       title: 'Location',
  //       description: '61 R New Street, NYC',
  //     },
  //     {
  //       title: 'Project Date',
  //       description: '22 March 2022',
  //     },
  //   ],
  // },
];

type TeamMemberType = {
  key: string;
  img: string;
  firstName: string;
  lastName: string;
  position: string;
  firstShowCaseSkill?: string;
  firstAchievedNumber?: number;
  secondShowCaseSkill?: string;
  secondAchievedNumber?: number;
  thirdShowCaseSkill?: string;
  thirdAchievedNumber?: number;
  socialMedia: {
    linkedin?: string;
    facebook?: string;
    instagram?: string;
    youtube?: string;
    twitter?: string;
  };
  firstDescription: string;
  secondDescription: string;
};

export const TEAM_DETAILS: TeamMemberType[] = [
  {
    key: '1',
    img: 'spyros.webp',
    firstName: 'John',
    lastName: 'Doe',
    position: 'CEO & Founder',
    firstShowCaseSkill: 'Project complete',
    firstAchievedNumber: 100,
    secondShowCaseSkill: 'UI/UX Design',
    secondAchievedNumber: 100,
    thirdShowCaseSkill: 'Digital Marketing',
    thirdAchievedNumber: 100,
    socialMedia: {
      linkedin: 'https://www.linkedin.com/',
      facebook: 'https://www.facebook.com/',
      instagram: 'https://www.instagram.com/',
      youtube: 'https://www.youtube.com/',
      twitter: 'https://twitter.com/',
    },
    firstDescription:
      'Kindling the energy hidden in matter the only home we ve ever known radio telescope decipherment descended from astronomers rogue. Prime number network of wormholes take root. Kindling the energy hidden in matter the only home we ve ever known radio telescope decipherment descended from astronomers rogue. Prime number network of wormholes take root. we ve ever known radio telescope decipherment descended from astronomers rogue. Prime number network of wormholes take root.',
    secondDescription:
      'Kindling the energy hidden in matter the only home we ve ever known radio telescope decipherment descended from astronomers rogue. Prime number network of wormholes take root. Matter the only home we ve ever known radio telescope decipherment descended from astronomers rogue. Prime number network of wormholes take root',
  },
  {
    key: '2',
    img: 'nick.webp',
    firstName: 'Jane',
    lastName: 'Doe',
    position: 'UI/UX Designer',
    firstShowCaseSkill: 'Web Development',
    firstAchievedNumber: 100,
    secondShowCaseSkill: 'UI/UX Design',
    secondAchievedNumber: 100,
    thirdShowCaseSkill: 'Digital Marketing',
    thirdAchievedNumber: 100,
    socialMedia: {
      linkedin: 'https://www.linkedin.com/',
      facebook: 'https://www.facebook.com/',
      instagram: 'https://www.instagram.com/',
      youtube: 'https://www.youtube.com/',
      twitter: 'https://twitter.com/',
    },
    firstDescription:
      'Kindling the energy hidden in matter the only home we ve ever known radio telescope decipherment descended from astronomers rogue. Prime number network of wormholes take root. Kindling the energy hidden in matter the only home we ve ever known radio telescope decipherment descended from astronomers rogue. Prime number network of wormholes take root. we ve ever known radio telescope decipherment descended from astronomers rogue. Prime number network of wormholes take root.',
    secondDescription:
      'Kindling the energy hidden in matter the only home we ve ever known radio telescope decipherment descended from astronomers rogue. Prime number network of wormholes take root. Matter the only home we ve ever known radio telescope decipherment descended from astronomers rogue. Prime number network of wormholes take root',
  },
];
