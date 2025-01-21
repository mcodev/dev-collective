import BrandSuccessBanner from '@/sections/BrandSuccessBanner/BrandSuccessBanner';
import DedicatedTeamHero from '@/sections/DedicatedTeamHero/DedicatedTeamHero';
import Faq from '@/sections/Faq/Faq';
import LikeWhatYouSee from '@/sections/like_what_you_see/LikeWhatYouSee';
// import TechStack from '@/sections/texhStack/TechStack';
import { Wrapper } from '@/styles/pages/dedicated-team';

const FAQ_QUESTIONS = [
  {
    key: 1,
    title: 'dedicatedTeamFirstFaqTitle',
    description: 'dedicatedTeamFirstFaqDescription',
  },
  {
    key: 2,
    title: 'dedicatedTeamSecondFaqTitle',
    description: 'dedicatedTeamSecondFaqDescription',
  },
  {
    key: 3,
    title: 'dedicatedTeamThirdFaqTitle',
    description: 'dedicatedTeamThirdFaqDescription',
  },
  {
    key: 4,
    title: 'dedicatedTeamFourthFaqTitle',
    description: 'dedicatedTeamFourthFaqDescription',
  },
];

const DedicatedTeam = (): JSX.Element => {
  return (
    <Wrapper>
      <DedicatedTeamHero />
      <BrandSuccessBanner />
      <Faq content={FAQ_QUESTIONS} />
      <LikeWhatYouSee />
      {/* <TechStack /> */}
    </Wrapper>
  );
};

export default DedicatedTeam;
