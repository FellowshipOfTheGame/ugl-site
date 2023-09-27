import { css } from '../../../styled-system/css';
import videoSource from '../../assets/videos/ugl-opening-01.mp4';
import foguinho3 from '../../assets/foguinho/FoGuinho3.webp';

import { flexCenter, maxSize } from '../../styles/pieces/common.piece';

 
const _TimeLeft = () => {
    return (
        <>
            <div class={css({
                ...flexCenter,
                height: '100%',
                padding: '20px 10px 30px 10px',
            })}>
                <h3 class={css({
                    color: 'ugl-yellow',
                    textStyle: 'majorTitle',
                    fontSize: '64px',
                })}>
                    FALTAM 
                    <span class={css({
                        marginLeft: '10px',
                        fontSize: '72px',
                        color: 'ugl-orange',
                    })}>
                        00d 00h 00m 00s
                    </span>
                </h3>
            </div>
                <div class={css({
                    height: '220px',
                    overflow: 'hidden',
                    alignSelf: 'end',
                })}>
                    <img src={foguinho3} class={css({
                        transform: 'scaleX(-1)', /* Horizontal inversion */
                        height: '150%',
                        bottom: '0px',
                        margin: '0 0 10px 100px',
                    })} />
                </div>
        </>
    );
};


const _EyeCatcherOverlay = () => {
    return (
        <div class={css({
            ...maxSize,
            ...flexCenter,
            position: 'static',
            flexDir: 'column',
            opacity: '100%',
            textAlign: 'center',
        })}>
            <div class={css({
                ...maxSize,
                ...flexCenter,
                flexDir: 'column',
                p: '10px',
            })}>
                <h1 class={css({
                    textStyle: 'majorTitle',
                    color: '#282c64',
                    width: '33%',
                    textShadow: 'rgba(0, 0, 0, 0.4) 0px 4px 5px',
                    marginBottom: '30px',
                })}>
                    O MAIOR EVENTO INDIE GAME DO BRASIL
                </h1>

                <strong class={css({
                    color: '#F79421',
                    textStyle: 'barlowH3',
                    backgroundColor: 'black',
                    padding: '5px 15px', 
                    marginBottom: '20px',
                })}> 
                    BEM-VINDO A USP GAME LINK! 
                </strong>

                <p class={css({
                    textStyle: 'barlowStrong',
                    color: 'rgb(30, 34, 100)',
                })}>
                    Este é o site oficial da UGL, onde você poderá acompanhar 
                    toda a programação e novidades do evento.
                </p>
            </div>

            <div class={css({
                ...flexCenter,
                backgroundColor: '#2f2f2f',
                width: '80%',
                height: '175px',
            })}>
                <_TimeLeft />
            </div>
        </div>
    );
};

const EyeCatcherSection = () => {
    return (
        <section class={css({
            ...flexCenter,
            minWidth: '400px',
            height: '700px',
            overflow: 'hidden',
            position: 'relative', // Add this to make positioning easier
            flexDir: 'row',
        })}>

            <video 
                autoplay={true} 
                muted={true} 
                loop={true} 
                class={css({
                    filter: 'blur(1px) grayscale(10%) brightness(100%)',
                    width: '100%',
                    zIndex: 0, // Add this to control the stacking order
                    opacity: '66%',
                })}
            >
                <source src={videoSource} type='video/mp4' />
                Your browser does not support the video tag.
            </video>

            {/* Add a div for the text overlay */}
            <div class={css({
                ...maxSize,
                ...flexCenter,
                position: 'absolute', // Position the overlay
                top: 0,
                left: 0,
                background: 'radial-gradient(circle at center, rgba(211, 211, 211, 0.01) 50%, rgba(211, 211, 211, 0.05) 100%)', // Add radial gradient background
                zIndex: 1, // Ensure it's above the video
            })}>
                <_EyeCatcherOverlay />
            </div>
        </section>
    );
};

export default EyeCatcherSection;
