import { css } from "../../../styled-system/css";
import videoSource from "../../assets/videos/ugl-opening-01.mp4";
import foguinho3 from "../../assets/foguinho/FoGuinho3.webp";

import { flexCenter, maxSize } from "../../styles/pieces/common.piece";
import { UGLDate } from "../../utils/constants";
import { createSignal, onCleanup } from "solid-js";

const targetDate = new Date(UGLDate);

const SEC_TO_MILISEC = 1000;
const MIN_TO_MILISEC = 1000 * 60;
const HOUR_TO_MILISEC = 1000 * 60 * 60;
const DAYS_TO_MILISEC = 1000 * 60 * 60 * 24;

const fontSizeOffset1 = {
    base: "32px",
    sm: "40px",
    md: "48px",
    lg: "56px",
    xl: "64px",
};
const fontSizeOffset2 = {
    base: "40px",
    sm: "48px",
    md: "56px",
    lg: "64px",
    xl: "72px",
};
const fontSizeOffset3 = {
    base: "48px",
    sm: "56px",
    md: "64px",
    lg: "72px",
    xl: "80px",
};

const formatTwoDigits = (number: number) => {
    return number.toString().padStart(2, "0").slice(-2);
};

const _ClockDisplay = (props: { time: number; title: string }) => {
    return (
        <div
            class={css({
                display: "flex",
                flexDir: "column",
                justifyContent: "center",
                alignItems: "center",

                textAlign: "center",
                m: {
                    base: "1px",
                    sm: "1px 2px",
                    md: "2px 3px",
                    lg: "2px 4px",
                    xl: "3px 6px",
                    "2xl": "4px 8px",
                },
                fontSize: fontSizeOffset2,
                lineHeight: fontSizeOffset3,
                color: "ugl-orange",
                textStyle: "majorTitle",

                p: "1px",

                minW: {
                    base: "50px",
                    sm: "60px",
                    md: "70px",
                    lg: "80px",
                    xl: "90px",
                },
            })}
        >
            <p>{formatTwoDigits(props.time)}</p>
            <p class={css({ fontSize: "14px", lineHeight: "16px" })}>
                {props.title}
            </p>
        </div>
    );
};

const _TimeLeft = () => {
    const [remainingSeconds, setRemainingSeconds] = createSignal(0);
    const [remainingMinutes, setRemainingMinutes] = createSignal(0);
    const [remainingHours, setRemainingHours] = createSignal(0);
    const [remainingDays, setRemainingDays] = createSignal(0);

    const updateTime = () => {
        const now = new Date();
        const timeDiff = targetDate.getTime() - now.getTime();

        const seconds = Math.floor(timeDiff / SEC_TO_MILISEC) % 60;
        const minutes = Math.floor(timeDiff / MIN_TO_MILISEC) % 60;
        const hours = Math.floor(timeDiff / HOUR_TO_MILISEC) % 24;
        const days = Math.floor(timeDiff / DAYS_TO_MILISEC);

        if (hours >= 0) {
            setRemainingSeconds(seconds);
            setRemainingMinutes(minutes);
            setRemainingHours(hours);
            setRemainingDays(days);
        } else {
            setRemainingSeconds(0);
            setRemainingMinutes(0);
            setRemainingHours(0);
            setRemainingDays(0);
        }
    };

    // Update the remaining hours every second
    const intervalId = setInterval(updateTime, 1000);

    // Cleanup the interval when the component unmounts
    onCleanup(() => {
        clearInterval(intervalId);
    });

    return (
        <>
            <div
                class={css({
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                    height: "100%",
                    // padding: {
                    //     base: "15px 5px 20px 5px",
                    //     md: "20px 10px 30px 10px",
                    // },
                    p: "2px",
                    ml: { base: "0", md: "calc(5px + 1%)" },
                    minW: {
                        base: "99%",
                        sm: "95%",
                        md: "72.5%",
                        lg: "70%",
                        xl: "67.5%",
                        "2xl": "65%",
                    },
                    maxW: {
                        base: "100%",
                        sm: "99%",
                        md: "92.5%",
                        lg: "90%",
                        xl: "87.5%",
                        "2xl": "85%",
                    },
                })}
            >
                <p
                    class={css({
                        color: "ugl-yellow",
                        textStyle: "majorTitle",
                        fontSize: fontSizeOffset1,
                        lineHeight: fontSizeOffset2,
                        overflow: "hidden",
                        mr: {
                            base: "calc(2px + 1%)",
                            sm: "calc(4px + 1%)",
                            md: "calc(1px + 1%)",
                            lg: "calc(4px + 2%)",
                            xl: "calc(8px + 3%)",
                            '2xl': "calc(12px + 3%)",
                        },
                    })}
                >
                    FALTAM
                </p>
                <div
                    class={css({
                        ...flexCenter,
                        flexDir: "row",
                    })}
                >
                    <_ClockDisplay time={remainingDays()} title='Dias' />
                    <_ClockDisplay time={remainingHours()} title='Horas' />
                    <_ClockDisplay time={remainingMinutes()} title='Minutos' />
                    <_ClockDisplay time={remainingSeconds()} title='Segundos' />
                </div>
            </div>
            <div
                class={css({
                    height: "220px",
                    overflow: "visible",
                    alignSelf: "end",
                    display: { base: "none", md: "flex" },
                    flexDir: "row",
                    alignItems: "center",
                    justifyItems: "center",
                })}
            >
                <img
                    src={foguinho3}
                    class={css({
                        transform: "scaleX(-1)" /* Horizontal inversion */,
                        height: {
                            base: "103%",
                            sm: "107%",
                            md: "112%",
                            lg: "120%",
                        },
                        ml: {
                            base: "0",
                            md: "calc(1% + 1px)",
                            lg: "calc(2% + 5px)",
                            xl: "calc(3% + 10px)",
                            "2xl": "calc(4% + 20px)",
                        },
                        bottom: "0px",
                        aspectRatio: 201 / 264,

                        // margin: {
                        //     base: "5px",
                        //     md: "0 0 10px 20px",
                        //     lg: "0 0 10px 40px",
                        //     xl: "0 0 10px 100px",
                        // },
                    })}
                />
            </div>
        </>
    );
};

const _EyeCatcherOverlay = () => {
    return (
        <div
            class={css({
                ...maxSize,
                ...flexCenter,
                position: "static",
                flexDir: "column",
                opacity: "100%",
                textAlign: "center",
            })}
        >
            <div
                class={css({
                    ...maxSize,
                    ...flexCenter,
                    flexDir: "column",
                    p: "10px",
                })}
            >
                <h1
                    class={css({
                        textStyle: "majorTitle",
                        color: "#282c64",
                        maxW: {
                            base: "auto",
                            sm: "95%",
                            md: "85%",
                            lg: "70%",
                            xl: "55%",
                            "2xl": "40%",
                        },
                        textShadow: "rgba(0, 0, 0, 0.4) 0px 4px 5px",
                        marginBottom: { base: "25px", lg: "30px" },
                        // fontSize: {base: '32px', sm: '40px', md: '48px', lg: '56px', xl: '64px'},
                    })}
                >
                    O MAIOR EVENTO INDIE GAME DO BRASIL
                </h1>

                <strong
                    class={css({
                        color: "#F79421",
                        textStyle: "barlowH3",
                        backgroundColor: "black",
                        padding: "5px 15px",
                        marginBottom: "20px",
                    })}
                >
                    BEM-VINDO A USP GAME LINK!
                </strong>

                <p
                    class={css({
                        textStyle: "barlowStrong",
                        color: "rgb(30, 34, 100)",
                        mb: {base: '5px', md: 'calc(1% + 5px)', lg: 'calc(2% + 10px)', xl: 'calc(3% + 15px)'}
                    })}
                >
                    Este é o site oficial da UGL, onde você poderá acompanhar
                    toda a programação e novidades do evento.
                </p>
            </div>

            <div
                class={css({
                    ...flexCenter,
                    backgroundColor: "#2f2f2f",
                    width: {
                        base: "100%",
                        sm: "96%",
                        md: "92%",
                        lg: "88%",
                        xl: "84%",
                        "2xl": "80%",
                    },
                    height: "175px",
                })}
            >
                <_TimeLeft />
            </div>
        </div>
    );
};

const EyeCatcherSection = () => {
    return (
        <section
            class={css({
                ...flexCenter,
                minWidth: "400px",
                height: "700px",
                overflow: "hidden",
                position: "relative", // Add this to make positioning easier
                flexDir: "row",
            })}
        >
            <video
                autoplay={true}
                muted={true}
                loop={true}
                class={css({
                    filter: "blur(1px) grayscale(10%) brightness(100%)",
                    zIndex: 0, // Add this to control the stacking order
                    opacity: "66%",
                    objectFit: "cover",

                    minH: "100%",
                    minW: { base: "100vw" },

                    // '@media (max-width: 768px)': {}
                })}
            >
                <source src={videoSource} type='video/mp4' />
                Your browser does not support the video tag.
            </video>

            {/* Add a div for the text overlay */}
            <div
                class={css({
                    ...maxSize,
                    ...flexCenter,
                    position: "absolute", // Position the overlay
                    top: 0,
                    left: 0,
                    background:
                        "radial-gradient(circle at center, rgba(211, 211, 211, 0.01) 50%, rgba(211, 211, 211, 0.05) 100%)", // Add radial gradient background
                    zIndex: 1, // Ensure it's above the video
                })}
            >
                <_EyeCatcherOverlay />
            </div>
        </section>
    );
};

export default EyeCatcherSection;
