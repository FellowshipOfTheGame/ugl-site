import { For } from "solid-js";
import { css } from "../../../styled-system/css";


import gorpakiLogo from '../../assets/logos/sponsors/gorpaki-game-studio.webp';
import norbLogo from '../../assets/logos/sponsors/norb.webp';
import wonamiLogo from '../../assets/logos/sponsors/wonami.webp';
import pushStartLogo from '../../assets/logos/sponsors/PushStart500x500.webp';

import dumativaLogo from '../../assets/logos/supporters/dumativa.webp';
import icmcLogo from '../../assets/logos/supporters/LOGO-ICMC-500x500.webp';
import artistaLogo from '../../assets/logos/supporters/ARTTISTA500X500.webp';
import aquirisLogo from '../../assets/logos/supporters/AQUIRIS-500X500.webp';

import disponivel from '../../assets/foguinho/patrocinio-disponivel.webp';



import { flexCenter } from "../../styles/pieces/common.piece";


const sponsors = [
    {img: gorpakiLogo, alt: ''},
    {img: norbLogo, alt: ''},
    {img: wonamiLogo, alt: ''},
    {img: pushStartLogo, alt: ''},
    {img: disponivel, alt: ''},
];


const supporters = [
    {img: dumativaLogo, alt: ''},
    {img: icmcLogo, alt: ''},
    {img: artistaLogo, alt: ''},
    {img: aquirisLogo, alt: ''},
    {img: disponivel, alt: ''},
];


const _LogoRow = (props : {
    height : any,
    list : {img: string, alt: string}[]
    class? : string
}) => {
    return (
        <table class={css({
            h: '100%',
            w: '94%',
        }) + ' ' + props.class ?? ''}>
            <thead class={css({h: '100%', w: '100%'})}>
                <tr class={css({
                    h: '100%', w: '100%',
                    ...flexCenter,
                    flexDir: 'row',
                    borderRight: '1px solid black' ,
                })}>
                    <For each={props.list}>{ (sponsor) => 
                        <td class={css({
                            ...flexCenter,

                            borderTop: '1px solid black',
                            borderBottom: '1px solid black',
                            borderLeft: '1px solid black',

                            h: props.height,
                            w: '90%',
                            p: '5px',   

                            overflow: 'hidden',
                        })}>
                            <img 
                                src={sponsor.img} 
                                alt={sponsor.alt} 
                                class={css({
                                    maxH: props.height,
                                })} 
                            />
                        </td>
                    }</For>
                </tr>
            </thead>
        </table>
    );
};


const SponsorsSection = () => {
    return (
        <section class={css({
            ...flexCenter,
            flexDir: 'column',
            w: '100%',
            minH: '638px',
            minW: '400px',
            p: '10px 20px',
        })}>
            <h2 class={css({
                textStyle: 'barlowH2',
                fontSize: '50px',
                lineHeight: '40px',
                wordSpacing: '-2.5em',
                mb: '20px',
                mt: '30px',
            })}> 
                PATROCINADORES
            </h2>

            <_LogoRow list={sponsors} height={{base: '100px', md: '200px', lg: '250px'}} class={
                css({mb: '50px'})
            }/>

            <h2 class={css({
                textStyle: 'barlowH2',
                fontSize: '50px',
                lineHeight: '40px',
                wordSpacing: '-2.5em',
                mb: '20px',
            })}> 
                APOIO
            </h2>

            <_LogoRow list={supporters} height={{base: '75px', md: '150px', lg: '175px'}} class={
                css({mb: '30px'})
            }/>

        </section>
    );
};


export default SponsorsSection;