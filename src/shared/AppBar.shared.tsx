import { A } from "@solidjs/router";
import { css } from "../../styled-system/css";
import ugl_logo from "../assets/logos/ugl-logos/main-logos/ugl-white-01.webp";
import { Accessor, Show, createEffect, createSignal } from "solid-js";
import useWindowDimensions from "../assets/utils/hooks";
import barsIcons from "../assets/vectors/bars.svg";
import { flexCenter } from "../styles/pieces/common.piece";

//
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
    "@media(min-width: 1280px)": {
        w: '100%',
        // minH: '50px',
        p: '5px',
    },
});

const _DropDownMenu = (props: { active: Accessor<boolean> }) => {
    return (
        <Show when={props.active()}>
            <div
                class={css({
                    position: "relative",
                    // top: "0",
                    right: "0",
                    top: "100px",
                    minW: "300px",
                    // minW: { base: "66vw", sm: '50%vw', md: "33vw", lg: '25vw', xl: "20vw", '2xl': '16vw' },
                    bgColor: "ugl-purple",
                    boxShadow: "-2xp 2xp 4px black",
                    // opacity: "100%",
                    zIndex: "10",
                    display: "flex",
                    justifyContent: "right",
                    textAlign: "right",
                    alignItems: "center",
                    p: "25px",
                    overflow: "hidden",
                    // h: "0",
                    transition: "all .4s ease",
                    h: '400px',
                })}
            >
                <div
                    class={css({
                        ...flexCenter,
                        position: "relative",
                        top: "0px",
                        right: "100px",
                    })}
                >
                    <_NavList />
                </div>
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
                flexDir: 
                     "column",
            
                "@media (min-width: 1280px)": {flexDir: "row"}, // NOTE (b): this is fine. 🔥☕ 

                // borderBottom: {
                //     base: "1px solid gray",
                //     "@media (min-width: 1280px)": "0", // NOTE (b): this is fine. 🔥☕
                // },
                position:  "absolute",
                    // NOTE (b): this is fine. 🔥☕
                
                "@media(min-width: 1280px)": {
                    top: "0",
                    right: "0",
                    position : "inherit",
                },
                listStyle: "none",
                padding: 0,
                margin: 0,
                justifyContent: "center", // Center items horizontally
                textStyle: "appBarFont",
            })}
        >
            <li class={AppBarLiClass}>
                <A href='/convidados'> CONVIDADOS </A>
            </li>
            <li class={AppBarLiClass}>
                <A href='/#exposicao-de-jogos'> EXPOSIÇÃO </A>
            </li>
            {/* <li class={AppBarLiClass}>
                <a href='#'> PROGRAMAÇÃO </a>
            </li> */}
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
                h: "100px",
                width: "100%",

                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",

                backgroundColor: "ugl-purple",
                color: "white",
                padding: "0 20px", // Add padding for spacing
            })}
        >
            <A href='/'>
                <img src={ugl_logo} class={css({ minW: "196px" })} />
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
