import { JSXElement, children, createSignal, onCleanup } from "solid-js";
import { css } from "../../../styled-system/css";
import { flexCenter } from "../../styles/pieces/common.piece";
import videoSource from "../../assets/videos/ugl-best-clips-01.mp4";

const _Topic = (props: { children: JSXElement }) => {
    const c = children(() => props.children);
    return (
        <div
            class={css({
                w: { base: "100%", md: "40%", lg: "30%", xl: "20%" },
                m: "10px 25px",
                textAlign: "center",

                "& > h3": {
                    mb: "20px",
                    textStyle: "barlowH2",
                    fontSize: "32px",
                },

                "& > p": {
                    textStyle: "barlowP",
                    fontSize: "16px",
                    lineHeight: "24px",
                },
            })}
        >
            {c()}
        </div>
    );
};

// const _PauseSvg = () => {
//     return (
//         <svg
//             class={css({
//                 sm: { w: "100px", h: "100px" },
//                 md: { w: "75px", h: "75px" },
//                 xl: { w: "100px", h: "100px" },
//             })}
//             preserveAspectRatio='xMidYMid meet'
//             data-bbox='6.5 7.5 69 69'
//             viewBox='0 0 82 82'
//             height='82'
//             width='82'
//             xmlns='http://www.w3.org/2000/svg'
//             data-type='color'
//             role='presentation'
//             aria-hidden='true'
//             aria-label=''
//         >
//             <g>
//                 <path
//                     d='M41 7.5L6.5 42 41 76.5 75.5 42 41 7.5z'
//                     fill='#FFFFFF'
//                     data-color='1'
//                 ></path>
//                 <path
//                     fill='#000000'
//                     d='M36.36 48.641V33.36L49.943 41 36.36 48.641z'
//                     data-color='2'
//                 ></path>
//             </g>
//         </svg>
//     );
// };

import diamondPause from '../../assets/vectors/diamondPause.svg';


const _Video = () => {
    const [isPaused, setIsPaused] = createSignal(false);

    const [videoRef, setVideoRef] = createSignal<HTMLVideoElement | null>(null);

    const toggleVideoPlayback = () => {
        const video = videoRef();
        if (video) {
            if (video.paused) {
                video.play();
                setIsPaused(false);
            } else {
                video.pause();
                setIsPaused(true);
            }
        }
    };

    // Clean up event listeners to prevent memory leaks
    onCleanup(() => {
        const video = videoRef();
        if (video) {
            video.removeEventListener("play", handlePlay);
            video.removeEventListener("pause", handlePause);
        }
    });

    const handlePlay = () => {
        // Update the button state if the video plays automatically (e.g., when src changes)
        const video = videoRef();
        if (video) {
            video.addEventListener("pause", handlePause);
        }
    };

    const handlePause = () => {
        // Update the button state if the video pauses automatically (e.g., when src changes)
        const video = videoRef();
        if (video) {
            video.removeEventListener("pause", handlePause);
        }
    };

    return (
        <div
            class={css({
                width: { base: "72%", md: "48vw", xl: "32vw" },
                display: { base: "inherit", sm: "inherit" },
                ml: { base: "0", md: "15px", lg: "30px" },
                clipPath: "polygon(50% 0%, 78.125% 50%, 50% 100%, 21.875% 50%)", // Create a diamond shape
                overflow: "hidden", // Hide the overflowing parts
                position: "relative", // Position to control video size within the diamond
                paddingTop: {
                    base: "40%",
                    md: "25%",
                    lg: "29%",
                    xl: "25%",
                },
                cursor: "pointer", // Add a pointer cursor to indicate clickability
                '& > div img': {
                  w: '12vw',
                  h: '12vh',
                  transition: 'width .4s ease, height .4s ease',
                },
                _hover: {
                  '& > div img': {
                    w: '15vw',
                    h: '15vh',
                  }
                },
            })}
        >
            <video
                ref={setVideoRef}
                src={videoSource}
                onPlay={handlePlay}
                onPause={handlePause}
                autoplay={true}
                muted={true}
                loop={true}
                onClick={toggleVideoPlayback} // Add an onClick event handler
                // onPause={() => {}}
                class={css({
                    width: "100%", // Set video width to 100% to fill the diamond container
                    position: "absolute", // Position the video absolutely within the container
                    top: "50%", // Center vertically
                    left: "50%", // Center horizontally
                    transform: "translate(-50%, -50%)", // Center the video within the container
                    display: isPaused() && false ? "none" : "block", // Hide the video when paused
                })}
            >
                <source src={videoSource} type='video/mp4' />
                Your browser does not support the video tag.
            </video>

            {/* Custom pause icon */}
            {isPaused() && (
                <div
                    onClick={toggleVideoPlayback}
                    class={css({
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        fontSize: "36px",
                        color: "white",
                        zIndex: 1, // Ensure the icon is above the video
                    })}
                >
                    <img src={diamondPause} />
                </div>
            )}
        </div>
    );
};

const WhatUglOffer = () => {
    return (
        <section
            id='exposicao-de-jogos'
            class={css({
                ...flexCenter,
                flexDir: "column",
                minH: "730px",
                w: "100%",
                bgColor: "ugl-blue",
                color: "white",
                p: "20px",
            })}
        >
            <div
                class={css({
                    ...flexCenter,
                    flexDir: { base: "column", md: "row" },
                    mb: { base: "30px", md: "50px" },
                })}
            >
                <h2
                    class={css({
                        w: { base: "100%", sm: "55vw", md: "45vw", lg: "35vw" },
                        textStyle: "barlowH2",
                        fontSize: {
                            base: "48px",
                            sm: "54px",
                            md: "58px",
                            lg: "62px",
                        },
                        lineHeight: "49.6px",
                        letterSpacing: "-1px",
                        wordSpacing: "2px",
                        mb: { base: "30px", md: "0" },
                    })}
                >
                    TESTE OS JOGOS CRIADOS PELA GALERA DA USP E CONVIDADOS
                </h2>
                <_Video />
            </div>
            <div
                class={css({
                    ...flexCenter,
                    flexDir: { base: "column", md: "row" },
                })}
            >
                <_Topic>
                    <h3>Acompanhe o desenvolvimento de projetos</h3>
                    <p>
                        Compreenda como são feitos os Brainstorms e os processos
                        de Design na construção de um Game e sinta o gostinho de
                        criar um novo universo de aventura e imaginação
                    </p>
                </_Topic>
                <_Topic>
                    <h3>Converse com os criadores</h3>
                    <p>
                        Troque ideias com toda galera envolvida no
                        desenvolvimento de games. Converse com desenvolvedores,
                        artistas, game designers, músicos e muitos outros.
                    </p>
                </_Topic>
                <_Topic>
                    <h3>Divirta-se jogando e testando</h3>
                    <p>
                        Entretenha-se jogando e testando os mais variados jogos
                        nacionais do momento. Corra, atire, desvie, solucione e
                        sobreviva as mais fantásticas experiências em Games.
                    </p>
                </_Topic>
            </div>
        </section>
    );
};

export default WhatUglOffer;
