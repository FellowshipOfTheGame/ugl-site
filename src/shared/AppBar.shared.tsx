import { A } from "@solidjs/router";
import { css } from "../../styled-system/css";
import ugl_logo from "../assets/logos/ugl-logos/main-logos/ugl-white-01.webp";
import { Accessor, Show, createEffect, createSignal } from "solid-js";
import useWindowDimensions from "../assets/utils/hooks";
import barsIcons from "../assets/vectors/bars.svg";

const WIDTH_AT_BAR_BREAK = 1280;
// NOTE: change in place (hard coded) the media query, a variable will not work
// const MEDIA_QUERY = "@media (min-width: 1280px)";

const AppBarLiClass = css({
    marginRight: "20px",
    padding: "5px",
    transition: "all .2s ease",
    textTransform: "uppercase",
    _hover: {
        color: "#efe1b6",
        cursor: "pointer",
        transform: 'scale(1.1)',
    },
    "@media(max-width: 1279px)": {
        minW: '100%',
        minH: '40px',
        p: '8px',
        marginRight: "0px",
        marginBottom: "5px",
    },
});

const _DropDownMenu = (props: { active: Accessor<boolean> }) => {
    return (
        <Show when={props.active()}>
            <div
                class={css({
                    position: "relative",
                    right: "0",
                    top: { base: "80px", md: "100px" },
                    minW: { base: "100vw", sm: "400px", md: "300px" },
                    bgColor: "ugl-purple",
                    boxShadow: "-2px 2px 4px black",
                    zIndex: "10",
                    display: "flex",
                    justifyContent: { base: "center", md: "right" },
                    textAlign: { base: "center", md: "right" },
                    alignItems: "center",
                    p: { base: "15px", md: "25px" },
                    overflow: { base: "auto", md: "hidden" },
                    transition: "all .4s ease",
                    h: "auto",
                    maxH: { base: "calc(100vh - 80px)", md: "400px" },
                })}
            >
                <_NavList />
            </div>
        </Show>
    );
};

const _Bars = (/*props: { sig?: () => void }*/) => {
    const [activeDropDown, setActiveDropDown] = createSignal<boolean>(false);

    return (
        <div>
            <button
                onClick={() => setActiveDropDown(!activeDropDown())}
                class={css({
                    ml: "auto",
                    mr: "calc(5px + 1%)",
                    display: "flex",
                    justifyContent: "right",
                    filter: "brightness(0) saturate(100%) invert(81%) sepia(0%) saturate(6855%) hue-rotate(93deg) brightness(110%) contrast(93%)",
                    cursor: "pointer",
                    _hover: {
                        transform: "scale(1.05)",
                        dropShadow: "2px 2px 4px black",
                        filter: "brightness(0) saturate(100%) invert(63%) sepia(93%) saturate(1989%) hue-rotate(0deg) brightness(90%) contrast(90%) saturate(25%) brightness(140%)",
                    },
                    position: "relative",
                    zIndex: "20",
                })}
            >
                <img src={barsIcons} />
            </button>
            <div
                onclick={() => setActiveDropDown(false)}
                class={css({
                    position: "absolute",
                    top: "0",
                    right: "0",
                    overflow: "visible",
                    zIndex: "9",

                })}
            >
                <_DropDownMenu active={activeDropDown} />
            </div>
        </div>
    );
};

const _NavList = () => {
    return (
        <ul
            class={css({
                display: "flex",
                flexDir: { base: "column", xl: "row" },
                width: { base: "100%", xl: "auto" },
                position: { base: "static", xl: "absolute" },

                "@media(min-width: 1280px)": {
                    top: "0",
                    right: "0",
                    position: "inherit",
                },
                listStyle: "none",
                padding: 0,
                margin: 0,
                justifyContent: "center",
                textStyle: "appBarFont",
            })}
        >
            <li class={AppBarLiClass}>
                <A href='https://docs.google.com/forms/d/e/1FAIpQLSdSI0JPz0TzyuFLp_T9Pa3nxNLmrvbVr-x0SFhJgRT5uuUslw/viewform?usp=pp_url&entry.1105553797=Aceito' target="_blank"> INSCRIÇÃO </A>
            </li>
            <li class={AppBarLiClass}>
                <A href='/'> INÍCIO </A>
            </li>
            <li class={AppBarLiClass}>
                <A href='/convidados'> CONVIDADOS </A>
            </li>
            {/*
            <li class={AppBarLiClass}>
                <A href='/#exposicao-de-jogos'> EXPOSIÇÃO </A>
            </li>
            */}
            <li class={AppBarLiClass}>
                <a href='/#schedule'> PROGRAMAÇÃO </a>
            </li>
            <li class={AppBarLiClass}>
                <A href='/galeria'> GALERIA </A>
            </li>
            <li class={AppBarLiClass}>
                <A href='/apoio'> APOIO </A>
            </li>
            <li class={AppBarLiClass}>
                <A href='/sobre-nos'> SOBRE </A>
            </li>
        </ul>
    );
};

const AppBar_ul = () => {
    const [bigEnough, setBigEnough] = createSignal<boolean>(true);
    const dimensions = useWindowDimensions();

    createEffect(() => {
        const w = dimensions().width;
        console.log(w);
        setBigEnough(w >= WIDTH_AT_BAR_BREAK);
    });

    return (
        <Show when={bigEnough()} fallback={<_Bars />}>
            {" "}
            <_NavList />
        </Show>
    );
};

const AppBar = () => {
    return (
        <header
            class={css({
                h: { base: "80px", md: "100px" },
                width: "100%",

                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",

                backgroundColor: "ugl-purple",
                color: "white",
                padding: { base: "0 10px", md: "0 20px" }
            })}
        >
            <A href='/'>
                <img src={ugl_logo} class={css({
                    minW: { base: "120px", sm: "150px", md: "180px", lg: "196px" },
                    maxW: { base: "150px", sm: "180px", md: "200px", lg: "220px" }
                })} />
            </A>
            <nav
                class={css({
                    alignSelf: "flex-center",
                    flexGrow: 1,
                })}
            >
                <AppBar_ul />
            </nav>
        </header>
    );
};

export default AppBar;
