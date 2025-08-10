import { For, Show } from "solid-js";
import {
    GuestType,
    SocialNetwork,
    getSocialNetLogos,
    guests_per_year,
} from "../data/guests.data";
import { circle, grid } from "../../styled-system/patterns";
import { css } from "../../styled-system/css";
import { flexCenter } from "../styles/pieces/common.piece";
import { Transition } from "solid-transition-group";

const _Socials = (props: {
    socials?: { social: SocialNetwork; link: string }[];
    guestName: string;
}) => {
    const size = { base: "35px", md: "40px", xl: "45px", "2xl": "50px" };
    return (
        <Show when={props.socials}>
            <For each={props.socials}>
                {(s: { social: SocialNetwork; link: string }) => (
                    <li class={css({ cursor: "pointer" })}>
                        <a href={s.link} target='_blank'>
                            <img
                                src={getSocialNetLogos(s.social)}
                                alt={`Link para o ${s.social} de ${props.guestName}.`}
                                class={css({
                                    w: size,
                                    h: size,
                                    rounded: "10px",
                                    mr: "10px",
                                    transition: "all .1s ease-in",
                                    _hover: {
                                        transform: "scale(1.25)",
                                        boxShadow: "1px 1px 2px gray",
                                    },
                                })}
                            />
                        </a>
                    </li>
                )}
            </For>
        </Show>
    );
};

const _Guest = (props: { guestData: GuestType }) => {
    const g = props.guestData;
    return (
        <article
            class={css({
                ...flexCenter,
                flexDir: "column",
                minH: "250px",
            })}
        >
            <div class={css({ position: "relative" })}>
                <img
                    src={g.img}
                    alt={g.alt ?? `Foto retrato de ${g.name}.`}
                    class={circle({
                        size: { base: "175px", sm: "200px", md: "225px"},
                        objectFit: "cover",
                        ...flexCenter,
                    })}
                />
                <ul
                    class={css({
                        position: "absolute",
                        bottom: "0",
                        left: "0",
                        display: "flex",
                    })}
                >
                    <_Socials socials={g.socials} guestName={g.name} />
                </ul>
            </div>

            <strong
                class={css({
                    textStyle: "guestName",
                    color: "rgb(85, 0, 25)",
                    textAlign: "center",
                })}
            >
                {g.name}
            </strong>

            <p
                class={css({
                    textStyle: "guestJob",
                    color: "#111",
                    textAlign: "center",
                })}
            >
                {g.title}
            </p>
        </article>
    );
};

const _YearSection = (props: { year: string; guests: GuestType[] }) => {
    return (
        <section
            class={css({
                display: "flex",
                justifyItems: "left",
                flexDir: "column",
                mb: "100px",
                w: {
                    base: "100%",
                    sm: "97.5%",
                    md: "95%",
                    lg: "85%",
                    xl: "75%",
                    "2xl": "65%",
                },
                overflow: "hidden",
            })}
        >
            <h3 class={css({ textStyle: "barlowH2", mb: "10px" })}>
                {" "}
                🗓️ {props.year}{" "}
            </h3>
            <div
                class={grid({
                    columns: { base: 2, md: 3, xl: 4 },
                    gap: "10px",
                    rowGap: "25px",
                })}
            >
                <For each={props.guests}>{(g) => <_Guest guestData={g} />}</For>
            </div>
        </section>
    );
};

const GuestsPage = () => {
    return (
        <Transition name='fade-in'>
            <main>
                <div
                    class={css({
                        ...flexCenter,
                        flexDir: "column",
                        p: { base: "25px 10px", md: "50px 10px" },
                        minW: "400px",
                    })}
                >
                    <For each={guests_per_year}>
                        {(y) => (
                            <_YearSection year={y.year} guests={y.guests} />
                        )}
                    </For>
                </div>
            </main>
        </Transition>
    );
};

export default GuestsPage;
