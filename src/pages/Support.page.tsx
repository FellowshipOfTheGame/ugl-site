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
                    h: { base: "auto", md: "500px" },
                    minH: { base: "auto", md: "500px" },
                    display: "flex",
                    flexDir: { base: "column", md: "row" },
                    justifyItems: "left",
                    mt: "30px",
                    ml: "5%",
                    mb: "50px",
                })}
            >
                <img
                    src={photo}
                    class={css({
                        objectFit: "cover",
                        // w: "34%",
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
                            sm: "2%",
                            md: "3%",
                            lg: "4%",
                            xl: "5%",
                        },
                        mt: { base: "20px", md: "5%" },
                    })}
                >
                    <h2
                        class={css({
                            textStyle: "barlowH2",
                            lineHeight: { base: "40px", md: "72px" },
                            fontSize: { base: "32px", sm: "40px", md: "60px" },
                            color: "ugl-orange",
                        })}
                    >
                        VENHA SER UM APOIADOR!
                    </h2>
                    <div
                        class={divider({
                            w: "10%",
                            mt: "2px",
                            ml: "10%",
                            mb: "30px",
                        })}
                    />
                    <p class={css({ textStyle: "barlowPThin", mb: '10px' })}>
                        Divulgue sua empresa e apoie a USP Game Link!
                    </p>
                    <p class={css({ textStyle: "barlowPThin", mb: '10px' })}>
                        Neste ano, desejamos fazer a maior edição da USP Game
                        Link e para isso precisamos do seu apoio. Para obter
                        informações sobre opções de patrocínio ou divulgar o
                        jogo do seu estúdio, clique no botão abaixo.
                    </p>
                    <p class={css({ textStyle: "barlowPThin" })}>
                        A sua marca pode aparecer
                        em nosso site e nas nossas redes sociais!
                    </p>
                </div>
            </section>
            <div
                class={divider({
                    w: "20%",
                    mt: { base: "40px", md: "20px" },
                    ml: "40%",
                    mb: "30px",
                })}
            />
            <section class={vstack({ p: '10px' })}>
                <h2 class={css({ textStyle: "barlowH2", mb: '10px' })}>
                    Quero ser um apoiador
                </h2>
                <PointyA href="https://forms.gle/AEwGcrjAukqYC4Mb7">
                    Apoie a UGL
                </PointyA>
                <div class={css({ mb: '50px', mt: '10px' })} />
            </section>
        </main>
    );
};

export default SupportPage;
