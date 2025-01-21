import PageHero from '@/sections/PageHero/PageHero';
import TeamMembers from '@/sections/team_members/TeamMembers';
import React from 'react';

const About = () => {
  return (
    <>
      <PageHero pageTitle="aboutUs" />

      <TeamMembers />
    </>
  );
};

export default About;
