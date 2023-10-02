export type YearType = "2023" | "2022" | "2021" | "2020";
export const years : YearType[] = ["2023", "2022", "2021", "2020"];

export interface GuestType {
    name: string;
    title: string;
    years: string[];
    img: string,
    alt: string;
    socials: Record<string, string>;
};

export const guests : GuestType[] = [
    {
        name: "EM BREVE",
        title: "Em breve!",
        years: ["2023", "2022", "2021", "2020"],
        img: "",
        alt: "",
        socials: {},
    },
];

// NOTE (b): is this the best way to do this? No. Is it peformant? No. Howerver,
//  i doubt we need such levels of peformance anyways, and this notation will
//  save dev time.
let __guests_per_year : {year: string, guests: GuestType[]}[] = [];

years.forEach((y : string) => {
    let __this_year : {year: string, guests: GuestType[]} = {year: y, guests: []};

    guests.forEach((g : GuestType) => {
        if(g['years'].includes(y)) __this_year.guests.push(g)
    })

    __guests_per_year.push(__this_year);
});

export const guests_per_year : {year: string, guests: GuestType[]}[] = __guests_per_year;