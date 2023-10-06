import { css } from "../../styled-system/css";
import {
    divider,
    vstack,
} from "../../styled-system/patterns";

import photo from "../assets/images/foto_palestra_03.webp";
import PointyA from "../components/PointyA";

const SupportPage = () => {
    return (
        <main
            class={css({
                w: "100%",
            })}
        >
            <section
                class={css({
                    h: "500px",
                    display: "flex",
                    flexDir: { base: "column", md: "row" },
                    justifyItems: "left",
                    mb: "50px",
                })}
            >
                <img
                    src={photo}
                    class={css({
                        objectFit: "cover",
                        w: "34%",
                        h: "100%",

                        "@media (max-width: 768px)": {
                            h: "auto",
                            w: "100%",
                            maxH: "150px",
                        },
                    })}
                />

                <div
                    class={css({
                        w: {
                            base: "95%",
                            sm: "80%",
                            md: "60%",
                            lg: "40%",
                            xl: "33%",
                        },
                        p: "10px",
                        ml: {
                            base: "1%",
                            sm: "3%",
                            md: "7%",
                            lg: "11%",
                            xl: "15%",
                        },
                        mt: "5%",
                    })}
                >
                    <h2
                        class={css({
                            textStyle: "barlowH2",
                            lineHeight: "72px",
                            fontSize: "60px",
                            color: "ugl-orange",
                        })}
                    >
                        VENHA SER UM APOIADOR
                    </h2>
                    <div
                        class={divider({
                            w: "10%",
                            mt: "2px",
                            ml: "10%",
                            mb: "30px",
                        })}
                    />
                    <p class={css({ textStyle: "barlowPThin" })}>
                        Venha ser um apoiador!
                    </p>
                    <p class={css({ textStyle: "barlowPThin" })}>
                        Neste ano, desejamos fazer a maior edição da USP Game
                        Link e para isso precisamos do seu apoio. Para obter
                        informações sobre opções de patrocínio ou divulgar o
                        jogo do seu estúdio, veja os meios de contato abaixo.
                    </p>
                    <p class={css({ textStyle: "barlowPThin" })}>
                        Divulgue sua empresa e apoie a USP Game Link!
                    </p>
                </div>
            </section>
            <div
                class={divider({
                    w: "20%",
                    mt: {
                        base: "calc( 100px + 1% + 1vh + 1vw)",
                        sm: "calc( 75px + 1% + 1vh + 1vw)",
                        md: "calc( 50px + 1% + 1vh + 1vw)",
                        lg: "calc( 25px + 1% + 1vh + 1vw)",
                        xl: "2px",
                    },
                    ml: "40%",
                    mb: "30px",
                })}
            />
            <section class={vstack({p: '10px'})}>
                <h2 class={css({ textStyle: "barlowH2", mb: '10px'})}>
                    Quero ser um apoiador
                </h2>
                <PointyA>
                    Apoie o projeto
                </PointyA>
                <div class={css({mb: '50px', mt:'10px' })} />
            </section>
        </main>
    );
};

export default SupportPage;
