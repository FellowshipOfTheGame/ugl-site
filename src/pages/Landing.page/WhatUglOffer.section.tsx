import { JSXElement, children } from "solid-js";
import { css } from "../../../styled-system/css";
import { flexCenter } from "../../styles/pieces/common.piece";
import videoSource from '../../assets/videos/ugl-best-clips-01.mp4';


const _Topic = (props : {children : JSXElement}) => {
    const c = children(() => props.children);
    return (
        <div class={css({
            w: {base: '100%', md: '20%'},
            m: '10px 25px',
            textAlign: 'center',

            '& > h3': {
                mb: '15px',
                textStyle: 'barlowH2',
                fontSize: '32px',
            },

            '& > p': {
                textStyle: 'barlowP',
                fontSize: '16px',
                lineHeight: '24px',
            },

        })}>
            {c()}
        </div>
    );
}

const _Video = () => {
    return (
        <video 
            autoplay={true} 
            muted={true} 
            loop={true} 
            class={css({
                width: {base: '72%', md: '32vw', lg: '22vw'},
                display: {base: 'inherit', sm: 'inherit'},
                ml: {base: '0', md: '15px', lg: '30px'}
            })}
        >
            <source src={videoSource} type='video/mp4' />
            Your browser does not support the video tag.
        </video>
    );
};

const WhatUglOffer = () => {
    return (
        <section class={css({
            ...flexCenter,
            flexDir: 'column',
            minH: '730px',
            w: '100%',
            bgColor: 'ugl-blue',
            color: 'white',
            p: '20px',
        })}>
            <div class={css({
                ...flexCenter,
                flexDir: {base: 'column', md: 'row'},
            })}>
                <h2 class={css({
                    w: {base: '100%', sm: '55vw', md: '45vw', lg: '35vw'},
                    textStyle: 'barlowH2',
                    fontSize: {base: '48px', sm: '54px', md: '58px', lg: '62px',},
                    lineHeight: '49.6px',
                    letterSpacing: '-1px',
                    wordSpacing: '2px',
                    mb: '50px',
                })}>
                    TESTE OS JOGOS CRIADOS PELA GALERA DA USP E CONVIDADOS
                </h2>
                <_Video />
            </div>
            <div class={css({
                ...flexCenter,
                flexDir: {base: 'column', md: 'row'},
            })}>
                <_Topic>
                    <h3>
                        Acompanhe o desenvolvimento de projetos
                    </h3>
                    <p>
                        Compreenda como são feitos os Brainstorms e os processos 
                        de Design na construção de um Game e sinta o gostinho de 
                        criar um novo universo de aventura e imaginação
                    </p>
                </_Topic>
                <_Topic>
                    <h3>
                        Converse com os criadores
                    </h3>
                    <p>
                        Troque ideias com toda galera envolvida no 
                        desenvolvimento de games. Converse com desenvolvedores, 
                        artistas, game designers, músicos e muitos outros.
                    </p>
                </_Topic>
                <_Topic>
                    <h3>
                        Divirta-se jogando e testando
                    </h3>
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