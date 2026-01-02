import {HeroSection} from '../ui/sections/HeroSections';
import {HeroSectionAlt} from '../ui/sections/HeroSectionAlt';
import {IntroSection} from '../ui/IntroSection';
import LandingTextUI from '../ui/text/LandingTextUI';
import {ProfileSection} from '../ui/ProfileSection';

export const LandingPage = () => {
  return (
    <>
      <HeroSectionAlt />
      <ProfileSection />
      <IntroSection />
    </>
  );
};

export default LandingPage

