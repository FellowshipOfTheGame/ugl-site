//============================================================================//
//=================|    Imports     |=========================================//
//============================================================================//

import genteChegando from "../assets/guests-images/gente-chegando.webp";

import linkedinIcon from "../assets/icons/linkedin-icon.webp";
import instagramIcon from "../assets/icons/instagram-icon.webp";
import xIcon from "../assets/icons/x-icon.png";
import coconut from "../assets/icons/coconut.webp";

// 2022
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

// 2023
import marioGazziroPhoto from "../assets/guests-images/2023/mario-gazziro.webp";
import abnerEduardoSilveiraSantosPhoto from "../assets/guests-images/2023/abner-eduardo-silveira-santos.webp";
import raquelGontijoPhoto from "../assets/guests-images/2023/raquel-gontijo.webp";
import tiagoMarinoSilvaPhoto from "../assets/guests-images/2023/tiago-marino-silva.webp";
import joaoVictorRodriguesPhoto from "../assets/guests-images/2023/joao-victor-rodrigues.webp";
import carolinaDeSaPhoto from "../assets/guests-images/2023/carolina-de-sa.webp";
import mateusResendePaludettiPhoto from "../assets/guests-images/2023/mateus-resende-paludetti.webp";
import leonardoTortoroPereiraPhoto from "../assets/guests-images/2023/leonardo-tortoro-pereira.webp";
import liviaScienzaPhoto from "../assets/guests-images/2023/livia-scienza.webp";
import danielXimenesPhoto from "../assets/guests-images/2023/daniel-ximenes.webp";

// 2024
import augustoMirandaGarciaPhoto from "../assets/guests-images/2024/augusto-miranda-garcia.jpg";
import melinaJuraskiPhoto from "../assets/guests-images/2024/melina-juraski.jpg";
import terriVelmanPhoto from "../assets/guests-images/2024/terri-velman.jpg";
import fernandoAraujoPhoto from "../assets/guests-images/2024/fernando-araujo.jpg";
import guilhermeGiacominiPhoto from "../assets/guests-images/2024/guilherme-giacomini.jpg";
import rafaelGaribPhoto from "../assets/guests-images/2024/rafael-garib.jpeg";

// 2025
import alessandroFranzenPhoto from "../assets/guests-images/2025/alessandro-franzen.jpg";
import thaisWeillerPhoto from "../assets/guests-images/2025/thais-weiller.jpeg";
import liminalRoadPhoto from "../assets/guests-images/2025/liminal-road.jpg";
import andreSanteePhoto from "../assets/guests-images/2025/andre-santee.jpeg";
import kamilaRiosPhoto from "../assets/guests-images/2025/kamila-rios.jpeg";

//============================================================================//
//=================|    Types   |=============================================//
//============================================================================//

export type YearType = "2025" | "2024" | "2023" | "2022" | "2021" | "2020";
export type SocialNetwork = "X" | "Instagram" | "LinkedIn";
export const years: YearType[] = ["2025", "2024", "2023", "2022"];

export interface GuestType {
  name: string;
  title: string;
  years: string[];
  img: string;
  alt?: string; // NOTE: the text `Foto retrato de {NOME}` will be used if alt is undefined.
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
    case "X":
      return xIcon;
    default:
      return coconut;
  }
}

//============================================================================//
//=================|    Data    |=============================================//
//============================================================================//

export const guests: GuestType[] = [
  {
    name: "Vem Aí!",
    title: "Em breve!",
    years: ["2025"],
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
    title: "Prof. ICMC - USP",
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
  // 2023
  {
    name: "Mário Gazziro",
    title: "UFABC",
    years: ["2023", "2024"],
    img: marioGazziroPhoto,
    socials: [
      {
        social: "LinkedIn",
        link: "https://www.linkedin.com/in/mario-gazziro-1a41712a3/",
      },
    ],
  },
  {
    name: "Abner Eduardo Silveira Santos",
    title: "Kokku Games",
    years: ["2023"],
    img: abnerEduardoSilveiraSantosPhoto,
  },
  {
    name: "Raquel Gontijo",
    title: "Rogue Snail",
    years: ["2023"],
    img: raquelGontijoPhoto,
  },
  {
    name: "Tiago Marino Silva",
    title: "Flux Games",
    years: ["2023"],
    img: tiagoMarinoSilvaPhoto,
  },
  {
    name: "João Victor de Oliveira Rodrigues",
    title: "Umbu Games",
    years: ["2023"],
    img: joaoVictorRodriguesPhoto,
  },
  {
    name: "Carolina de Sá",
    title: "Dumativa",
    years: ["2023"],
    img: carolinaDeSaPhoto,
  },
  {
    name: "Mateus Resende Paludetti",
    title: "Black Sauva",
    years: ["2023"],
    img: mateusResendePaludettiPhoto,
  },
  {
    name: "Leonardo Tortoro Pereira",
    title: "Prof. IGCE-UNESP",
    years: ["2023", "2024", "2025"],
    img: leonardoTortoroPereiraPhoto,
    socials: [
      {
        social: "LinkedIn",
        link: "https://www.linkedin.com/in/leotpereira/",
      },
    ],
  },
  {
    name: "Lívia Scienza",
    title: "Doutoranda - UFSCAR",
    years: ["2023"],
    img: liviaScienzaPhoto,
  },
  {
    name: "Daniel Ximenes",
    title: "Dumativa",
    years: ["2023"],
    img: danielXimenesPhoto,
  },
  {
    name: "Augusto Miranda Garcia",
    title: "Afterverse",
    years: ["2024"],
    img: augustoMirandaGarciaPhoto,
    socials: [
      {
        social: "LinkedIn",
        link: "https://br.linkedin.com/in/augusto-garcia-6880057a",
      },
    ],
  },
  {
    name: "Melina Juraski",
    title: "Sunblack Game Studio",
    years: ["2024"],
    img: melinaJuraskiPhoto,
    socials: [
      {
        social: "LinkedIn",
        link: "https://br.linkedin.com/in/melinajuraski1408/en?trk=public_post_main-feed-card_reshare-text",
      },
    ],
  },
  {
    name: "Terri Velman",
    title: "Indie Dev",
    years: ["2024"],
    img: terriVelmanPhoto,
    socials: [
      {
        social: "X",
        link: "https://x.com/terrivellmann",
      },
    ],
  },
  {
    name: "Fernando Araujo",
    title: "INK-EYE Games",
    years: ["2024"],
    img: fernandoAraujoPhoto,
    socials: [
      {
        social: "LinkedIn",
        link: "https://br.linkedin.com/in/fernando-gamedev",
      },
    ],
  },
  {
    name: "Guilherme Giacomini",
    title: "ARVORE Immersive Experiences",
    years: ["2024"],
    img: guilhermeGiacominiPhoto,
    socials: [
      {
        social: "LinkedIn",
        link: "https://br.linkedin.com/in/gmgiacomini",
      },
    ],
  },
  {
    name: "Rafael Garib",
    title: "Wildlife",
    years: ["2024"],
    img: rafaelGaribPhoto,
    socials: [
      {
        social: "LinkedIn",
        link: "https://br.linkedin.com/in/rafael-garib-jankauskas-30354856",
      },
    ],
  },
  // 2025
  {
    name: "Alessandro Franzen",
    title: "Muito Abaixo do Oceano RPG",
    years: ["2025"],
    img: alessandroFranzenPhoto,
    socials: [
      {
        social: "LinkedIn",
        link: "https://br.linkedin.com/in/alessandro-franzen45bb2ab",
      },
      {
        social: "Instagram",
        link: "https://www.instagram.com/muitoabaixodooceano/",
      },
      {
        social: "X",
        link: "https://www.x.com/gyngaeditora",
      },
    ],
  },
  {
    name: "Thais Weiller",
    title: "Game Designer",
    years: ["2025"],
    img: thaisWeillerPhoto,
    socials: [
      {
        social: "Instagram",
        link: "https://www.instagram.com/thaisweiller",
      },
      {
        social: "X",
        link: "https://www.x.com/thaisweiller",
      },
    ],
  },
  {
    name: "Liminal Road",
    title: "Game Studio",
    years: ["2025"],
    img: liminalRoadPhoto,
    socials: [
      {
        social: "Instagram",
        link: "https://www.instagram.com/liminalroadstudio",
      },
      {
        social: "X",
        link: "https://www.x.com/liminalroad",
      },
    ],
  },
  {
    name: "André Santee",
    title: "Magic Rampage",
    years: ["2025"],
    img: andreSanteePhoto,
    socials: [
      {
        social: "Instagram",
        link: "https://www.instagram.com/magicrampagegame/",
      },
      {
        social: "X",
        link: "https://x.com/magicrampage",
      },
      {
        social: "LinkedIn",
        link: "https://www.linkedin.com/in/andre-santee",
      },
    ],
  },
  {
    name: "Kamila Rios",
    title: "Prof. ICMC - USP",
    years: ["2025"],
    img: kamilaRiosPhoto,
    socials: [
      {
        social: "LinkedIn",
        link: "https://www.linkedin.com/in/kamila-rios-h-rodrigues-1538b433/",
      },
    ],
  },
];

// NOTE (b): is this the best way to do this? No. Is it peformant? No. Howerver,
//  i doubt we need such levels of peformance anyways, and this notation will
//  save dev time.
const __guests_per_year: { year: string; guests: GuestType[] }[] = [];

years.forEach((y: string) => {
  const __this_year: { year: string; guests: GuestType[] } = {
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
