import { TEAM_DETAILS } from '@/modules/constants';
import PageHero from '@/sections/PageHero/PageHero';
import {
  Wrapper,
  Container,
  TeaMemberImage,
  TeamMemberImageWrapper,
  TeamMemberDetails,
  Title,
  FirstDescription,
  SecondDescription,
  ShowCaseSkillsWrapper,
  ShowCaseSkillWrapper,
  AchievedNumber,
  ShowCaseSkillTitle,
  ShowCaseCard,
  SocialsCard,
  PositionTitle,
  SocialMediaLink,
  SocialIcon,
} from '@/styles/pages/team-details';
import { useRouter } from 'next/router';

import {
  faLinkedinIn,
  faInstagram,
  faFacebookF,
} from '@fortawesome/free-brands-svg-icons';

const PortfolioDetailsPage = (): JSX.Element => {
  const router = useRouter();
  const teamMember = router.query?.teamMember as string;

  const selectedTeamMember = TEAM_DETAILS.find((t) => t.key === teamMember);

  return (
    <>
      <PageHero pageTitle="teamDetails" />

      <Wrapper>
        {selectedTeamMember ? (
          <Container>
            <TeamMemberImageWrapper>
              <TeaMemberImage
                src={`members/${selectedTeamMember.img}`}
                alt="an image of a team member"
                fill
                priority
              />

              <ShowCaseCard />

              <PositionTitle>{selectedTeamMember.position}</PositionTitle>

              <SocialsCard>
                {selectedTeamMember?.socialMedia?.hasOwnProperty(
                  'linkedin'
                ) && (
                  <SocialMediaLink
                    href={`/${selectedTeamMember.socialMedia.linkedin}`}
                    target="_blank"
                  >
                    <SocialIcon icon={faLinkedinIn} />
                  </SocialMediaLink>
                )}

                {selectedTeamMember?.socialMedia?.hasOwnProperty(
                  'facebook'
                ) && (
                  <SocialMediaLink
                    href={`/${selectedTeamMember.socialMedia.facebook}`}
                    target="_blank"
                  >
                    <SocialIcon icon={faFacebookF} />
                  </SocialMediaLink>
                )}

                {selectedTeamMember?.socialMedia?.hasOwnProperty(
                  'instagram'
                ) && (
                  <SocialMediaLink
                    href={`/${selectedTeamMember.socialMedia.instagram}`}
                    target="_blank"
                  >
                    <SocialIcon icon={faInstagram} />
                  </SocialMediaLink>
                )}

                {selectedTeamMember?.socialMedia?.hasOwnProperty(
                  'instagram'
                ) && (
                  <SocialMediaLink
                    href={`/${selectedTeamMember.socialMedia.instagram}`}
                    target="_blank"
                  >
                    <SocialIcon icon={faInstagram} />
                  </SocialMediaLink>
                )}
              </SocialsCard>
            </TeamMemberImageWrapper>

            <TeamMemberDetails>
              <Title>{`${selectedTeamMember.firstName} ${selectedTeamMember.lastName}`}</Title>
              <FirstDescription>
                {selectedTeamMember.firstDescription}
              </FirstDescription>

              <SecondDescription>
                {selectedTeamMember.secondDescription}
              </SecondDescription>

              <ShowCaseSkillsWrapper>
                <ShowCaseSkillWrapper isFirst>
                  <AchievedNumber>100+</AchievedNumber>

                  <ShowCaseSkillTitle>
                    {selectedTeamMember.firstShowCaseSkill}
                  </ShowCaseSkillTitle>
                </ShowCaseSkillWrapper>

                <ShowCaseSkillWrapper>
                  <AchievedNumber>100+</AchievedNumber>

                  <ShowCaseSkillTitle>
                    {selectedTeamMember.secondShowCaseSkill}
                  </ShowCaseSkillTitle>
                </ShowCaseSkillWrapper>

                <ShowCaseSkillWrapper isLast>
                  <AchievedNumber>100+</AchievedNumber>

                  <ShowCaseSkillTitle>
                    {selectedTeamMember.secondShowCaseSkill}
                  </ShowCaseSkillTitle>
                </ShowCaseSkillWrapper>
              </ShowCaseSkillsWrapper>
            </TeamMemberDetails>
          </Container>
        ) : (
          <div>No info about the specific team member</div>
        )}
      </Wrapper>
    </>
  );
};

export default PortfolioDetailsPage;
