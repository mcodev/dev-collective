import Head from 'next/head';
import { Inter } from 'next/font/google';
import Hero from '@/sections/Hero/Hero';
import AboutUs from '@/sections/about_us/AboutUs';
import Services from '@/sections/Services/Services';
import ExperienceBanner from '@/sections/experience_banner/ExperienceBanner';
import Faq from '@/sections/Faq/Faq';
import TechStack from '@/sections/texhStack/TechStack';
import LikeWhatYouSee from '@/sections/like_what_you_see/LikeWhatYouSee';
import BrandSuccessBanner from '@/sections/BrandSuccessBanner/BrandSuccessBanner';

const inter = Inter({ subsets: ['latin'] });

const FAQ_QUESTIONS = [
  {
    key: 1,
    title: 'homeFaq1Title',
    description: 'homeFaq1Description',
  },
  {
    key: 2,
    title: 'homeFaq2Title',
    description: 'homeFaq2Description',
  },
  {
    key: 3,
    title: 'homeFaq3Title',
    description: 'homeFaq3Description',
  },
  {
    key: 4,
    title: 'homeFaq4Title',
    description: 'homeFaq4Description',
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Dev Collective</title>
        <meta
          name="description"
          content="Dev Collective offers cutting-edge software solutions to help businesses thrive in the digital age. Our expertise spans across development, design, and consulting to deliver exceptional results."
        />
        <meta
          name="keywords"
          content="software solutions, software development, IT consulting, digital transformation, tech innovation, Dev Collective"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${inter.className}`}>
        <Hero />
        <ExperienceBanner />
        <AboutUs />
        <BrandSuccessBanner />
        <Faq content={FAQ_QUESTIONS} />
        <Services />
        <TechStack />
        <LikeWhatYouSee />
      </main>
    </>
  );
}
