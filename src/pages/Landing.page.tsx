import EyeCatcherSection from '../sections/Landing.page/EyeCatcher.section';
import IndustryNamesSection from '../sections/Landing.page/IndustryNames.section';
import WhatUglOffer from '../sections/Landing.page/WhatUglOffer.section';
import LocationSection from '../sections/Landing.page/Location.section';
import CalendarSection from '../sections/Landing.page/Calendar.section';

import { css } from '../../styled-system/css';
import { bgImgDefaults, flexCenter } from '../styles/pieces/common.piece';
import '../assets/images/foto_palestra_02.webp';

const CoolBannerSection = () => {
  return (
    <section
      class={css({
        ...flexCenter,
        ...bgImgDefaults,
        w: '100%',
        h: { base: '300px', md: '500px' },
        overflow: 'hidden',
        position: 'relative',
        backgroundImage: 'url(./assets/images/foto_palestra_02.webp)',
        _before: {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(40, 44, 100, 0.3)',
          zIndex: 1,
        },
      })}
    />
  );
};

const LandingPage = () => {
  return (
    <main>
      <EyeCatcherSection />
      <CalendarSection />
      <IndustryNamesSection />
      <CoolBannerSection />
      <WhatUglOffer />
      <LocationSection />
    </main>
  );
};

export default LandingPage;
