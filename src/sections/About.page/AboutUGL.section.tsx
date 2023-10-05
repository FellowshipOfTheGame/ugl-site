import { css } from "../../../styled-system/css";
import { vstack } from "../../../styled-system/patterns";

import uglLogo from "../../assets/logos/ugl-logos/main-logos/ugl-blue-txt-under-01.webp";

const AboutUGLSection = () => {
    return (
        <section
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
                    textStyle: "barlowPSmall",
                })}
            >
                A USP Game Link (UGL) é um evento realizado anualmente pelo
                grupo de extensão da USP São Carlos, Fellowship of The Game
                (FoG), com foco no desenvolvimento de jogos. Durante o evento,
                são realizadas mostras de jogos, em especial, dos desenvolvidos
                pelos alunos da disciplina de{" "}
                <a
                    href='https://uspdigital.usp.br/jupiterweb/obterDisciplina?sgldis=SSC0770'
                    class={css({ textDecoration: "underline" })}
                >
                    Introdução ao Desenvolvimento de Jogos Eletrônicos do ICMC
                </a>{" "}
                (Instituto de Ciências Matemáticas e de Computação). A UGL
                também conta com a presença de convidados da indústria de jogos,
                que interagem com os presentes no evento por meio de palestras,
                workshops e rodas de conversa.
            </p>
        </section>
    );
};

export default AboutUGLSection;
