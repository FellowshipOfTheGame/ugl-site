//============================================================================//
//=================|    Imports     |=========================================//
//============================================================================//

import genteChegando from "../assets/guests-images/gente-chegando.webp";

import linkedinIcon from "../assets/icons/linkedin-icon.webp";
import instagramIcon from "../assets/icons/instagram-icon.webp";
import coconut from "../assets/icons/coconut.webp";

// Images from 2022
import giovannaFranchiniPhoto from "../assets/guests-images/2022/giovanna-franchini.webp";
import leonardoChieppePhoto from "../assets/guests-images/2022/leonardo-chieppe.webp";
import arthurRDeSouzaPhoto from "../assets/guests-images/2022/arthur-r-de-souza.webp";
import leonardoTPereiraPhoto from "../assets/guests-images/2022/leonardo-t-pereira.webp";
import apoenaHerreroPhoto from "../assets/guests-images/2022/apoena-herrero.webp";
import ivanDGardePhoto from "../assets/guests-images/2022/ivan-d-garde.webp";
import stefaniaPecorePhoto from "../assets/guests-images/2022/stefania-percore.webp";
import daniSerranuPhoto from "../assets/guests-images/2022/dani-serranu.webp";

import lucianaGBoldoriniPhoto from "../assets/guests-images/2022/luciana-g-boldorini.webp";
import ivarPJuniorPhoto from "../assets/guests-images/2022/ivar-p-junior.webp";
import lisaYTaguchiPhoto from "../assets/guests-images/2022/lisa-y-taguchi.webp";
import rennanGonçalvezPhoto from "../assets/guests-images/2022/rennan-goncalvez.webp";
import guilhermeDaCasPhoto from "../assets/guests-images/2022/guilherme-da-cas.webp";
import joaoMBeraldoPhoto from "../assets/guests-images/2022/joão-m-beraldo.webp";

//============================================================================//
//=================|    Types   |=============================================//
//============================================================================//

export type YearType = "2023" | "2022" | "2021" | "2020";
export type SocialNetwork = "Instagram" | "LinkedIn";
export const years: YearType[] = ["2023", "2022"];

export interface GuestType {
    name: string;
    title: string;
    years: string[];
    img: string;
    alt?: string; // NOTE: the text `Foto retrato de {NOME}` será usado se alt for undefined.
    socials?: { social: SocialNetwork; link: string }[];
}

//============================================================================//
//=================|    Some functions      |=================================//
//============================================================================//

export function getSocialNetLogos(socialNetName: SocialNetwork) {
    switch (socialNetName) {
        case "LinkedIn":
            return linkedinIcon;
        case "Instagram":
            return instagramIcon;
        default:
            return coconut;
    }
}

//============================================================================//
//=================|    Data    |=============================================//
//============================================================================//

export const guests: GuestType[] = [
    // 2023
    {
        name: "EM BREVE",
        title: "Em breve!",
        years: ["2023"],
        img: genteChegando,
        alt: "Imagem contendo o texto estilizado 'tem gente chegando'.",
    },

    // 2022
    {
        name: "Giovanna Franchini",
        title: "Pulsatrix",
        years: ["2022"],
        img: giovannaFranchiniPhoto,
    },
    {
        name: "Leonardo Chieppe",
        title: "Strawberry Fields Interactive",
        years: ["2022"],
        img: leonardoChieppePhoto,
    },
    {
        name: "Arthur R. de Souza",
        title: "Siemens Energy",
        years: ["2022"],
        img: arthurRDeSouzaPhoto,
    },
    {
        name: "Leonardo T. Pereira",
        title: "Prof. ICMC São Carlos",
        years: ["2022"],
        img: leonardoTPereiraPhoto,
    },
    {
        name: "Apoena Herrero",
        title: "Ubisoft Montreal",
        years: ["2022"],
        img: apoenaHerreroPhoto,
    },
    {
        name: "Ivan D. Garde",
        title: "Vela Games",
        years: ["2022"],
        img: ivanDGardePhoto,
    },
    {
        name: "Stefania Pecòre",
        title: "Behaviour Interactive",
        years: ["2022"],
        img: stefaniaPecorePhoto,
    },
    {
        name: "Dani Serranú",
        title: "A Shell In The Pit",
        years: ["2022"],
        img: daniSerranuPhoto,
    },
    {
        name: "Luciana G.Boldorini",
        title: "Rook",
        years: ["2022"],
        img: lucianaGBoldoriniPhoto,
        socials: [
            {
                social: "Instagram",
                link: "https://www.instagram.com/rooktraducao/",
            },
            {
                social: "LinkedIn",
                link: "https://www.linkedin.com/in/lucianagaleaniboldorini/",
            },
        ],
    },
    {
        name: "Ivar P. Junior",
        title: "Rook",
        years: ["2022"],
        img: ivarPJuniorPhoto,
        socials: [
            {
                social: "Instagram",
                link: "https://www.instagram.com/rooktraducao/",
            },
            {
                social: "LinkedIn",
                link: "https://www.linkedin.com/in/ivarjr/",
            },
        ],
    },
    {
        name: "Lisa Y. Taguchi",
        title: "Dumativa",
        years: ["2022"],
        img: lisaYTaguchiPhoto,
    },
    {
        name: "Rennan Gonçalvez",
        title: "Dumativa",
        years: ["2022"],
        img: rennanGonçalvezPhoto,
    },
    {
        name: "Guilherme Da Cas",
        title: "AQUIRIS",
        years: ["2022"],
        img: guilhermeDaCasPhoto,
    },
    {
        name: "João M. Beraldo ",
        title: "Ubisoft Singapura",
        years: ["2022"],
        img: joaoMBeraldoPhoto,
    },
];

// NOTE (b): is this the best way to do this? No. Is it peformant? No. Howerver,
//  i doubt we need such levels of peformance anyways, and this notation will
//  save dev time.
let __guests_per_year: { year: string; guests: GuestType[] }[] = [];

years.forEach((y: string) => {
    let __this_year: { year: string; guests: GuestType[] } = {
        year: y,
        guests: [],
    };

    guests.forEach((g: GuestType) => {
        if (g["years"].includes(y)) __this_year.guests.push(g);
    });

    __guests_per_year.push(__this_year);
});

export const guests_per_year: { year: string; guests: GuestType[] }[] =
    __guests_per_year;
