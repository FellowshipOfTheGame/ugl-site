import EyeCatcherSection from "../sections/Landing.page/EyeCatcher.section";
import IndustryNamesSection from "../sections/Landing.page/IndustryNames.section";
import RegisterFormSection from "../sections/Landing.page/RegisterForms.section";

import "../assets/images/foto_palestra_02.webp";
import { css } from "../../styled-system/css";
import { bgImgDefaults, flexCenter } from "../styles/pieces/common.piece";
import WhatUglOffer from "../sections/Landing.page/WhatUglOffer.section";
// import SponsorsSection from "../sections/Landing.page/Sponsors.sections";
import LocationSection from "../sections/Landing.page/Location.section";
import CalendarSection from "../sections/Landing.page/Calendar.section";

const CoolBannerSection = () => {
    return (
        <section
            class={css({
                ...flexCenter,
                ...bgImgDefaults,
                w: "100%",
                h: "500px",
                overflow: "hiden",
                backgroundImage: "url(./assets/images/foto_palestra_02.webp)",
            })}
        >
            {/* TODO: add alt here <img src={uglPicture} class={css({
                height: '400px',
            })}/> */}
        </section>
    );
};

// NOTE: No register form in 2024 for attendees
const LandingPage = () => {
    return (
        <main>
            <EyeCatcherSection />
            <CalendarSection />
            {/* <RegisterFormSection /> */}
            <IndustryNamesSection />
            <CoolBannerSection />
            <WhatUglOffer />
            {/* <SponsorsSection /> */}
            <LocationSection />
        </main>
    );
};

export default LandingPage;
