import EyeCatcherSection from "./Landing.page/EyeCatcher.section";
import IndustryNamesSection from "./Landing.page/IndustryNames.section";
import RegisterFormSection from "./Landing.page/RegisterForms.section";

import '../assets/images/foto_palestra_02.webp';
import { css } from "../../styled-system/css";
import { bgImgDefaults, flexCenter } from "../styles/pieces/common.piece";
import WhatUglOffer from "./Landing.page/WhatUglOffer.section";
import SponsorsSection from "./Landing.page/Sponsors.sections";
import LocationSection from "./Landing.page/Location.section";


const LandingPage = () => {
    return (
        <main>
            <EyeCatcherSection />
            <RegisterFormSection />
            <IndustryNamesSection />
            <section class={css({
                ...flexCenter,
                ...bgImgDefaults,
                w: '100%',
                h: '500px',
                overflow: 'hiden',
                backgroundImage: 'url(./assets/images/foto_palestra_02.webp)',
            })}>
                {/* TODO: add alt here <img src={uglPicture} class={css({
                    height: '400px',
                })}/> */}
            </section>
            <WhatUglOffer />
            <SponsorsSection />
            <LocationSection />
        </main>
    );
};


export default LandingPage;