import { css } from "../../../styled-system/css";
import { flexCenter } from "../../styles/pieces/common.piece";

import instagramIcon from "../../assets/icons/instagram-icon.webp";

const _TextColStyle = css({
    display: 'flex',
    alignItems: 'left',
    flexDir: "column",
    w: { base: '100%', sm: '85%', md: '70%', lg: '55%', xl: '40%', '2xl': '33%' },
    p: 'calc(15px + 2%)',
});

const _TextColStyleH3 = css({
    textStyle: "barlowH3",
    textAlign: 'left',
});

const _TextColStyleP = css({
    textStyle: "barlowP",
    textAlign: 'left',
    fontSize: '20px',
    fontWeight: '400',
});


const _Text = () => {
    return (
        <div class={css({
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            flexDir: { base: 'column', sm: "row" },
            width: '90%',
            textAlign: 'left',
            p: { base: '5px', lg: '5px 5px 5px 50px' },
        })}>
            <div class={_TextColStyle}>
                <h3 class={_TextColStyleH3}>Endereço</h3>
                <p class={_TextColStyleP}>
                    Avenida Trabalhador São-carlense, 400 - Centro
                    CEP: 13566-590 - São Carlos - SP
                </p>
            </div>

            <div class={_TextColStyle}>
                <h3 class={_TextColStyleH3}>
                    Contato
                </h3>
                <p class={_TextColStyleP}>
                    fellowshipofthegame@gmail.com
                    <br />
                    <a href={'https://www.instagram.com/fog_icmc/'} target='_blank' style={{ display: 'flex', "align-items": 'center' }}>
                        <img
                            src={instagramIcon}
                            alt={`Link para o Instagram do FoG.`}
                            class={css({
                                w: "20px",
                                h: "20px",
                                rounded: "5px",
                                mr: "5px",
                            })}
                        />
                        {"@fog_icmc"}
                    </a>
                </p>
            </div>
        </div>
    );
};


const LocationSection = () => {
    return (
        <section
            class={css({
                ...flexCenter,
                flexDir: "column",
                maxH: "800px",
                w: "100%",
                mt: "50px",
            })}
        >
            <h2 class={css({ textStyle: "barlowH2", mb: '25px' })}> Local do evento </h2>
            <h3 class={css({ textStyle: "barlowH3", mb: '10px' })}> ICMC - USP</h3>
            <h3 class={css({ textStyle: "barlowH3", mb: '10px' })}> Auditório Fernão </h3>
            <_Text />
        </section>
    );
};

export default LocationSection;
