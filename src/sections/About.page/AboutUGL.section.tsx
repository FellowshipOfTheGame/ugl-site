import { css } from "../../../styled-system/css";
import { vstack } from "../../../styled-system/patterns";

import uglLogo from "../../assets/logos/ugl-logos/main-logos/ugl-blue-txt-under-01.webp";
import { UGL_COLOR_BLUE, UGL_COLOR_YELLOW } from "../../utils/constants.ts";

const AboutUGLSection = () => {
    return (
        <b
            class={vstack({
                w: "100%",
                p: {
                    base: "10px",
                    sm: "10px 10%",
                    md: "15px 15%",
                    lg: "20px 20%",
                    xl: "25px 25%",
                    "2xl": "25px 30%",
                },
                textAlign: "center",
            })}
        >
            <img
                class={css({ h: "173px", mt: '20px', mb: '10px' })}
                src={uglLogo}
                alt='UGL logo azul.'
            />
            <h2
                class={css({
                    textStyle: "barlowH2",
                    mb: "10px",
                })}
            >
                SOBRE A UGL
            </h2>
            <p
                class={css({
                    textStyle: "barlowP",
                })}
            >
                A USP Game Link (UGL) é um evento realizado anualmente pelo
                grupo de extensão da <b style={`color: ${UGL_COLOR_BLUE}`}>USP São Carlos,</b> <b style={`color: ${UGL_COLOR_YELLOW}`}><a target="_blank" href='https://www.instagram.com/fog_icmc/' class={css({ textDecoration: "underline" })}>Fellowship of The Game (FoG)</a></b>, com foco no desenvolvimento de jogos.
                <br /><br />
                A UGL é <b style={`color: ${UGL_COLOR_BLUE}`}>100% gratuita</b> e <b style={`color: ${UGL_COLOR_BLUE}`}>aberta ao público</b> dentro e fora da USP! Basta se <b style={`color: ${UGL_COLOR_YELLOW}`}><a class={css({ textDecoration: "underline" })} href="#">inscrever</a></b> e curtir as atrações!
                <br /><br />
                Durante o evento temos <b style={`color: ${UGL_COLOR_BLUE}`}>palestras, workshops e rodas de conversa</b> com <b style={`color: ${UGL_COLOR_YELLOW}`}><a class={css({ textDecoration: "underline" })} target="_blank" href="/convidados">convidados</ a></b> da indústria de jogos, além da <b style={`color: ${UGL_COLOR_BLUE}`}>mostra de jogos do FoG</b> (e de quem quiser compartilhar sua arte)!
            </p>
        </b>
    );
};

export default AboutUGLSection;
